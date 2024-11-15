var table = ui.Chart(
    [
     ['<img src=data:image/png;base64,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>'],
    ],
    'Table', {allowHtml: true});



// load image from bucket

var bandMapping = {
  443: {name: 'Azul costero', bands: 'SR_B1'},   // Banda 1 (Blue coast)  [435-452 nm]
  483: {name: 'Azul', bands: 'SR_B2'},  // Banda 2 (Blue) [452-512 nm]
  561: {name: 'Verde1', bands: 'SR_B3'},    // Banda 3 (Green)   [533-590 nm]
  592: {name: 'Verde2', bands: 'SR_B12'},    // Banda 4 (Green - red) [592 nm]
  613: {name: 'Rojo1', bands: 'SR_B4'}, // Banda 5 (Red) [613 nm]
  655: {name: 'Rojo2', bands: 'SR_B13'}, // Banda 6 (Rojo 2) [655 nm]
  865: {name: 'NIR', bands: 'SR_B5'}, // Banda 7 (NIR) [685 nm]
};


// Lista de URIs de las imágenes de GCS
var uris = [
  'gs://l8_app/acolite/L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_865.tif',
  'gs://l8_app/acolite/L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_561.tif',
  'gs://l8_app/acolite/L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_655.tif',
  'gs://l8_app/acolite/L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_483.tif',
  'gs://l8_app/acolite/L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_483.tif',
  'gs://l8_app/acolite/L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_655.tif',
  'gs://l8_app/acolite/L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_613.tif',
  'gs://l8_app/acolite/L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_613.tif',
  'gs://l8_app/acolite/L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_443.tif',
  'gs://l8_app/acolite/L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_483.tif',
  'gs://l8_app/acolite/L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_592.tif',
  'gs://l8_app/acolite/L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_561.tif',
  'gs://l8_app/acolite/L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_655.tif',
  'gs://l8_app/acolite/L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_483.tif',
  'gs://l8_app/acolite/L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_613.tif',
  'gs://l8_app/acolite/L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_592.tif',
  'gs://l8_app/acolite/L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_865.tif',
  'gs://l8_app/acolite/L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_561.tif',
  'gs://l8_app/acolite/L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_443.tif',
  'gs://l8_app/acolite/L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_443.tif',
  'gs://l8_app/acolite/L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_592.tif',
  'gs://l8_app/acolite/L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_561.tif',
  'gs://l8_app/acolite/L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_865.tif',
  'gs://l8_app/acolite/L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_865.tif',
  'gs://l8_app/acolite/L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_613.tif',
  'gs://l8_app/acolite/L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_655.tif',
  'gs://l8_app/acolite/L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_443.tif',
  'gs://l8_app/acolite/L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_592.tif'
];

// Function to extract metadata and assign bands
var extractMetadata = function(uri) {
  var filename = ee.String(uri);
  
  // Separate parts by '_'
  var parts = filename.split('_');
  var predio = ee.String(parts.get(1)).split('/').get(1);
  var year = ee.Number.parse(parts.get(3));
  var month = ee.Number.parse(parts.get(4));
  var day = ee.Number.parse(parts.get(5));
  var date = ee.Date.fromYMD(year, month, day); // Date
  
  var col = ee.Number(ee.String(parts.get(9)).slice(0, 3)); // Column
  var row = ee.Number(ee.String(parts.get(9)).slice(4, 6)); // Row
  var wavelength = ee.Number.parse(ee.String(parts.get(12)).slice(0, -4)); // Wavelength
  
  // Match the wavelength to band info
  var bandData = bandMapping[wavelength.getInfo()] || {bands: 'Unknown'};
  
  var timeStart = date  // 6 hours before the given date
  var timeEnd = date.advance(6, 'hour'); 
  
  // Load the image and set metadata
  return ee.Image.loadGeoTIFF(uri)
    .set('date', date)
    .set('column', col)
    .set('row', row)
    .set('wavelength', wavelength)
    .set('predio', predio)
    .set('bandName', bandData.bands)
    .set('system:time_start', timeStart.millis()) // Set system:time_start
    .set('system:time_end', timeEnd.millis());  
};

// Map URIs to images with metadata
var images = uris.map(extractMetadata);

// Convert the list of images into an ImageCollection
var collection = ee.ImageCollection(images);

// Group by date and stack bands for each date
var uniqueDates = collection.aggregate_array('date').distinct();

var groupedByDate = uniqueDates.map(function(date) {
  date = ee.Date(date);
  
  // Filter images for the specific date
  var bandsForDate = collection.filter(ee.Filter.eq('date', date))
    .sort('bandName'); // Ensure bands are ordered correctly
  
  // Use `iterate` to add each band image as a new band in a single image
  var stackedImage = bandsForDate.iterate(function(bandImage, previous) {
    previous = ee.Image(previous);
    bandImage = ee.Image(bandImage);
    var bandName = ee.String(bandImage.get('bandName'));
    return previous.addBands(bandImage.rename(bandName));
  }, ee.Image().set('date', date));
  
  return ee.Image(stackedImage).set('date', date);
});

// Convert the grouped images to an ImageCollection of composites by date
var compositeCollection = ee.ImageCollection(groupedByDate);

var style_perlita = {
    min: 100,
    max: 150,
    palette: ['#ffffff', '#ffc0cb', '#ff69b4', '#ff1493', '#8b008b']
};


// Function to apply scale factors to Landsat 8 imagery
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.*').multiply(1);
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

//var applyScaleFactors = require('users/raulperezastorga/VariosEjemplos/08_app_rs:applyScaleFactors')
var l8app = {};
var imgRaw;
var leftMarker, rightMarker;
var imgId;
var imgDate;
var bf_imgButton;
var vectors; 
var url_feature;
var predstyle = {color: 'yellow', fillColor: '00000000'};
var lago_style = {color: 'blue', fillColor: '00000000'};
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

var datesCollection = compositeCollection.aggregate_array('date');
var uniqueDates = ee.List(datesCollection.distinct()).sort();

var uniqueDatesStrings = uniqueDates.map(function(date) {
  var dateObj = ee.Date(date);
  var year = ee.String(dateObj.get('year'));
  var month = ee.String(dateObj.get('month').format('%02d'));
  var day = ee.String(dateObj.get('day').format('%02d')); 
  return year.cat('-').cat(month).cat('-').cat(day);
});

// Step 4: Print the dates as a list of strings

var dateItems = uniqueDatesStrings.getInfo();


// Function to apply scale factors to Landsat 8 imagery
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(1);
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

//var titlePanel = ui.Panel([table], 'flow', {width: '300px', padding: '8px'});


// Create header for the app
l8app.intro = {
  panel: ui.Panel({
    widgets: [
      ui.Panel([
        ui.Label({
          value: 'Monitoreo Lagos',
          style: {
            fontWeight: 'bold', 
            fontSize: '14px', 
            color: '#3C6E71'
          }
        })
      ], ui.Panel.Layout.Flow('horizontal'), {width: '100%', textAlign: 'center'}),  // Panel contenedor centrado

      table,  // Se asume que "table" está definida previamente

      ui.Panel([
        ui.Label({
          value: 'Seccion filtros',
          style: {
            fontSize: '14px', 
            color: '#3C6E71'
          }
        })
      ], ui.Panel.Layout.Flow('horizontal'), {width: '100%', textAlign: 'center'})  // Panel contenedor centrado
    ],
    style: {
      width: '300px',  // Define el ancho del panel
      padding: '10px'
    }
  })
};



// Administrative areas feature collection
// proyect must need lakes projects/stellar-horizon-248313/assets/Cuerpos_Agua_pp
var areasAdministrativas = ee.FeatureCollection('projects/stellar-horizon-248313/assets/Cuerpos_Agua_pp')
                          //.filter(ee.Filter.eq('codregion', 9));
var comunas = areasAdministrativas.aggregate_array('Nombre').sort();
var comunaSeleccionada = null;

// Create a dropdown for selecting communes in Chile
var selectorComuna = ui.Select({
  items: [],
  placeholder: 'Lagos',
  onChange: function(seleccionada) {
    comunaSeleccionada = areasAdministrativas.filter(ee.Filter.eq('Nombre', seleccionada));
    leftMap.centerObject(comunaSeleccionada);
    rightMap.centerObject(comunaSeleccionada);
    //
    leftMap.addLayer(comunaSeleccionada, lago_style, 'lago izquierda');
    rightMap.addLayer(comunaSeleccionada, lago_style, 'lago derecha');
    //
  }
});

// Evaluate and fill the selector with commune names
comunas.evaluate(function(nombres) {
  selectorComuna.items().reset(nombres);
});

// Add the commune selector to the panel
var predios_panel = ui.Panel({
  widgets: [
    ui.Label('Lagos:'),
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

  var dataset = compositeCollection
      .filter(ee.Filter.eq('date', date))
      .map(applyScaleFactors)
      .max();
      //.clip(comunaSeleccionada);

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


// Define global variables for the inspector and chart elements
var isInspecting = false;
var chartPanel;

// Create the Inspector button and add it to the selector panel
var inspectorButton = ui.Button({
  label: 'Inspector',
  onClick: function() {
    isInspecting = !isInspecting;
    inspectorButton.setLabel(isInspecting ? 'Salir de Inspector' : 'Inspector');
    if (isInspecting) {
      activateInspector(leftMap);
      activateInspector(rightMap);
    } else {
      leftMap.unlisten();
      rightMap.unlisten();
      if (chartPanel) {
        ui.root.remove(chartPanel);
      }
    }
  },
  style: {margin: '2px'}
});
l8app.selectorPanel.add(inspectorButton);

// Function to activate the map inspector
function activateInspector(map) {
  map.style().set('cursor', 'crosshair');  // Change cursor to cross symbol
  map.onClick(function(coords) {
    generateChart(coords.lon, coords.lat);
    addRedDot(map, coords);  // Place the red dot on the map at click location
  });
}

// Declare chartPanel variable outside the function
var chartPanel;

// Function to generate the chart based on the selected index and all dates
function generateChart(lon, lat) {
  // Remove the existing chart panel if it exists
  if (chartPanel) {
    rightMap.remove(chartPanel);
    ui.root.remove(chartPanel);
  }

  // Define the new chart panel position and style
  chartPanel = ui.Panel({
    style: {
      position: 'bottom-right',
      width: '300px',
      height: '229px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }
  });

  var point = ee.Geometry.Point([lon, lat]);

  // Function to retrieve index values for each date
  var values = dateItems.map(function(date) {
    var image = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
      .filterDate(ee.Date(date), ee.Date(date).advance(2, 'day'))
      .map(applyScaleFactors)
      .max()
      .select(selectedIndex)
      .reduceRegion({
        reducer: ee.Reducer.mean(),
        geometry: point,
        scale: 30
      });
    return ee.Number(image.get(selectedIndex)).getInfo();
  });

  // Generate chart using values and dates
  var chartData = {
    labels: dateItems,
    values: values
  };

  var chart = ui.Chart.array.values(chartData.values, 0, chartData.labels)
    .setOptions({
      title: selectedIndex + ' Over Time',
      hAxis: {title: 'Dates'},
      vAxis: {title: selectedIndex},
      pointSize: 5,
      series: {0: {color: '#1a9850'}}
    });
  
  // Add the chart to the chart panel
  chartPanel.add(chart);

  // Add the chart panel to the map and UI root
  rightMap.add(chartPanel);
}


// Function to add a red dot marker at the clicked point and remove previous markers
function addRedDot(map, coords) {
  // Remove previous markers from each map, if they exist
  if (leftMarker) {
    leftMap.layers().remove(leftMarker);
  }
  if (rightMarker) {
    rightMap.layers().remove(rightMarker);
  }

  // Create new markers for each map with the clicked coordinates
  leftMarker = ui.Map.Layer(ee.Geometry.Point([coords.lon, coords.lat]), {color: 'red'}, 'Left Marker');
  rightMarker = ui.Map.Layer(ee.Geometry.Point([coords.lon, coords.lat]), {color: 'red'}, 'Right Marker');


  // Add the new markers to both maps
  leftMap.layers().add(leftMarker);
  rightMap.layers().add(rightMarker);
}
// Add the selector panel and intro panel to the UI
l8app.intro.panel.add(l8app.selectorPanel);
ui.root.insert(0, l8app.intro.panel);

// Create a new Boxplot section
var boxplotSection = ui.Panel({
  layout: ui.Panel.Layout.flow('vertical'),
  style: {stretch: 'both'}
});

// Add the Boxplot section to the intro panel
l8app.intro.panel.add(boxplotSection);

// First ComboBox for selecting 'manual' or 'poligono'
var selectionOptions = ['manual', 'poligono'];
var firstComboBox = ui.Select({
  items: selectionOptions,
  placeholder: 'Seleccione',
  style: {
            fontSize: '14px', 
            color: '#3C6E71'}
});

// Add the first ComboBox to the Boxplot section
boxplotSection.add(ui.Label('BOX PLOT'));
boxplotSection.add(ui.Label('Metodo Sel'));
boxplotSection.add(firstComboBox);

// Second ComboBox for selecting the range of years (1, 2, 3, 4, or 5 years)
var yearOptions = ['2014', '2017', '2020', '2021', '2022'];
var secondComboBox = ui.Select({
  items: yearOptions,
  placeholder: 'Select a range of years',
  style: {margin: '10px'}
});

// Add the second ComboBox to the Boxplot section
boxplotSection.add(ui.Label('Select number of years:'));
boxplotSection.add(secondComboBox);

// Now you can add event listeners to handle the selected values if needed
firstComboBox.onChange(function(value) {
  console.log('Selected region type:', value);
  // Add any functionality based on the selection
});

secondComboBox.onChange(function(value) {
  console.log('Selected range of years:', value);
  // Add any functionality based on the selection
});
