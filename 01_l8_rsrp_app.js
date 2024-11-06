var l8app = {};
var imgRaw;
var imgId;
var imgDate;
var bf_imgButton;
var vectors; 
var url_feature;
var predstyle = {color: 'yellow', fillColor: '00000000'};
var style_ndvi = {
    min: -0.2,
    max: 1.0,
    palette: [
      '#000000', '#a50026', '#d73027', '#f46d43', '#fdae61', 
      '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', 
      '#1a9850', '#006837'
    ]
};
var style_ndwi ={
  min: -1,
  max: 0,
  palette: ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF']
};
var style_evi = {
    min: -0.2,
    max: 0.5,
    palette: ['#FF0000', '#FFA500', '#FFFF00', '#008000']
};
var style_perlita = {
    min: 5,
    max: 20,
    palette: ['#ffffff', '#ffc0cb', '#ff69b4', '#ff1493', '#8b008b']
};

var style_rgb = {bands: ['SR_B4', 'SR_B3', 'SR_B2'], min: 7000, max: 13000};
var style_falsecolor = {bands: ['SR_B5', 'SR_B4', 'SR_B3'], min: 7000, max: 18000};


// Create an array for date items
var dateItems = [
  '2014-01-24',
  '2014-10-24',
  '2017-03-06',
  '2020-02-11',
  '2022-02-07',
  '2022-09-02'
];

// Function to apply scale factors to Landsat 8 imagery
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  var ndvi = opticalBands.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI');
  var ndwi = opticalBands.normalizedDifference(['SR_B3', 'SR_B5']).rename('NDWI');
  var evi = image.expression(
    '2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))', {
      'NIR': opticalBands.select('SR_B5'),
      'RED': opticalBands.select('SR_B4'),
      'BLUE': opticalBands.select('SR_B2')
    }).rename('EVI');
  var perlita = image.expression(
    '21.3 * (BLUE / RED) + 2.45', {
      'BLUE': opticalBands.select('SR_B2'),
      'RED': opticalBands.select('SR_B4')
    }).rename('Perlita');
  return image.addBands([ndvi, ndwi, evi, perlita]);
}

// Create the left date selector
var leftDateSelector = ui.Select({
  items: dateItems,
  placeholder: 'fecha',
  onChange: function(selectedDate) {
    loadImage(selectedDate, leftMap);
  }
});

// Wrap the left date selector in a panel for positioning
var leftDateTextBox = ui.Panel({
  widgets: [
    ui.Label('Fecha (Izquierda):'),
    leftDateSelector
  ],
  layout: ui.Panel.Layout.Flow('vertical'),
  style: {
    position: 'top-left',
    padding: '2px',
    backgroundColor: 'rgba(60, 110, 113, 0.5)' // Optional: Background color
  }
});

// Create the right date selector
var rightDateSelector = ui.Select({
  items: dateItems,
  placeholder: 'fecha',
  onChange: function(selectedDate) {
    loadImage(selectedDate, rightMap);
  }
});

// Wrap the right date selector in a panel for positioning
var rightDateTextBox = ui.Panel({
  widgets: [
    ui.Label('Fecha (Derecha):'),
    rightDateSelector
  ],
  layout: ui.Panel.Layout.Flow('vertical'),
  style: {
    position: 'top-right',
    padding: '2px',
    backgroundColor: 'rgba(60, 110, 113, 0.5)' // Optional: Background color
  }
});

// Create left and right maps
var leftMap = ui.Map();  // Left map
var rightMap = ui.Map();  // Right map

// Add the date text boxes to the maps
leftMap.add(leftDateTextBox);
rightMap.add(rightDateTextBox);

leftMap.setOptions('SATELLITE');
rightMap.setOptions('SATELLITE');

// Center point for the maps
var centerPoint = ee.Geometry.Point([-73.5, -37.5]);
leftMap.centerObject(centerPoint, 9);
rightMap.centerObject(centerPoint, 9);

// Link the left and right maps for synchronization
var linker = ui.Map.Linker([leftMap, rightMap]);

// Create a split panel with the two maps
var splitPanel = ui.SplitPanel({
  firstPanel: leftMap,
  secondPanel: rightMap,
  orientation: 'horizontal',
  wipe: true
});

// Add the split panel to the main interface
l8app.splitpanel = ui.root.widgets().reset([splitPanel]);

// Create header for the app
l8app.intro = {
  panel: ui.Panel([
    ui.Label({
      value: 'Monitoreo Predios',
      style: {
        fontWeight: 'bold', 
        fontSize: '14px', 
        margin: '5px 5px',
        color: '#3C6E71',
      }
    })
  ])
};

// Administrative areas feature collection
var areasAdministrativas = ee.FeatureCollection('users/raulperezastorga/Comunas')
                          .filter(ee.Filter.eq('codregion', 9));
var comunas = areasAdministrativas.aggregate_array('Comuna').sort();
var comunaSeleccionada = null;

// Create a dropdown for selecting communes in Chile
var selectorComuna = ui.Select({
  items: [],
  placeholder: 'Predios',
  onChange: function(seleccionada) {
    comunaSeleccionada = areasAdministrativas.filter(ee.Filter.eq('Comuna', seleccionada));
    leftMap.centerObject(comunaSeleccionada);
    rightMap.centerObject(comunaSeleccionada);
  }
});

// Evaluate and fill the selector with commune names
comunas.evaluate(function(nombres) {
  selectorComuna.items().reset(nombres);
});

// Add the commune selector to the panel
var predios_panel = ui.Panel({
  widgets: [
    ui.Label('Predios:'),
    selectorComuna
  ],
  layout: ui.Panel.Layout.Flow('horizontal'),
  style: {stretch: 'horizontal', margin: '1px'}
});

// Index selector
var indexOptions = ['NDVI', 'NDWI', 'EVI', 'Perlita','RGB','Falso Color'];
var selectedIndex = 'NDVI';

var selectorIndex = ui.Select({
  items: indexOptions,
  placeholder: 'Select Index',
  onChange: function(index) {
    selectedIndex = index;
    loadImage(leftDateSelector.getValue(), leftMap);
    loadImage(rightDateSelector.getValue(), rightMap);
  }
});

// Panel for index selector
var index_panel = ui.Panel({
  widgets: [
    ui.Label('Índice:'),
    selectorIndex
  ],
  layout: ui.Panel.Layout.Flow('horizontal'),
  style: {stretch: 'horizontal', margin: '1px'}
});

l8app.selectorPanel = ui.Panel({
  widgets: [predios_panel, index_panel],
  layout: ui.Panel.Layout.Flow('vertical'),
  style: {color: '#3C6E71', margin: '1px', padding: '1px'}
});

// Load image based on the selected date and index
function loadImage(selectedDate, map) {
  var date = ee.Date(selectedDate);
  var nextDate = date.advance(2, 'day');

  var dataset = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
      .filterDate(date, nextDate)
      .map(applyScaleFactors)
      .max()
      .clip(comunaSeleccionada);

  var indexStyle, indexBand;
  switch (selectedIndex) {
    case 'NDVI':
      indexStyle = style_ndvi;
      indexBand = 'NDVI';
      break;
    case 'NDWI':
      indexStyle = style_ndwi;
      indexBand = 'NDWI';
      break;
    case 'EVI':
      indexStyle = style_evi;
      indexBand = 'EVI';
      break;
    case 'Perlita':
      indexStyle = style_perlita;
      indexBand = 'Perlita';
      break;
    case 'RGB':
      indexStyle = style_rgb;
      indexBand = ['SR_B4','SR_B3','SR_B2']
      break;
    case 'Falso Color':
      indexStyle = style_falsecolor;
      indexBand = ['SR_B5','SR_B4','SR_B3']
      break;
  }
  
  var dataset_clip = dataset.select(indexBand);

  if (map === leftMap) {
    leftMap.clear();
    leftMap.add(leftDateTextBox);
    if (dataset_clip) {
      leftMap.addLayer(dataset_clip, indexStyle, selectedIndex + ' - ' + selectedDate);
    }
  } else if (map === rightMap) {
    rightMap.clear();
    rightMap.add(rightDateTextBox);
    if (dataset_clip) {
      rightMap.addLayer(dataset_clip, indexStyle, selectedIndex + ' - ' + selectedDate);
    }
  }
}

// Add the selector panel and intro panel to the UI
l8app.intro.panel.add(l8app.selectorPanel);
ui.root.insert(0, l8app.intro.panel);
