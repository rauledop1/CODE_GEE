var table = ui.Chart(
    [
     ['<img src=data:image/png;base64,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>'],
    ],
    'Table', {allowHtml: true});


var bandMapping = {
  443: {name: 'Azul costero', bands: 'SR_B1'},   // Banda 1 (Blue coast)  [435-452 nm]
  483: {name: 'Azul', bands: 'SR_B2'},  // Banda 2 (Blue) [452-512 nm]
  561: {name: 'Verde1', bands: 'SR_B3'},    // Banda 3 (Green)   [533-590 nm]
  592: {name: 'Verde2', bands: 'SR_B12'},    // Banda 4 (Green - red) [592 nm]
  613: {name: 'Rojo1', bands: 'SR_B4'}, // Banda 5 (Red) [613 nm]
  655: {name: 'Rojo2', bands: 'SR_B13'}, // Banda 6 (Rojo 2) [655 nm]
  865: {name: 'NIR', bands: 'SR_B5'}, // Banda 7 (NIR) [685 nm]
};
var path='projects/stellar-horizon-248313/assets/'
var format = ''
var gcp = true

var uris = [
  path + 'acolite_L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_865'+ format,
  path + 'acolite_L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_561'+ format,
  path + 'acolite_L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_655'+ format,
  path + 'acolite_L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_483'+ format,
  path + 'acolite_L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_483'+ format,
  path + 'acolite_L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_655'+ format,
  path + 'acolite_L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_613'+ format,
  path + 'acolite_L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_613'+ format,
  path + 'acolite_L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_443'+ format,
  path + 'acolite_L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_483'+ format,
  path + 'acolite_L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_592'+ format,
  path + 'acolite_L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_561'+ format,
  path + 'acolite_L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_655'+ format,
  path + 'acolite_L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_483'+ format,
  path + 'acolite_L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_613'+ format,
  path + 'acolite_L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_592'+ format,
  path + 'acolite_L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_865'+ format,
  path + 'acolite_L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_561'+ format,
  path + 'acolite_L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_443'+ format,
  path + 'acolite_L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_443'+ format,
  path + 'acolite_L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_592'+ format,
  path + 'acolite_L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_561'+ format,
  path + 'acolite_L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_865'+ format,
  path + 'acolite_L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_865'+ format,
  path + 'acolite_L8_OLI_2022_02_09_14_29_12_232087_L2W_rhow_613'+ format,
  path + 'acolite_L8_OLI_2017_03_06_14_35_04_233087_L2W_rhow_655'+ format,
  path + 'acolite_L8_OLI_2020_02_11_14_35_19_233087_L2W_rhow_443'+ format,
  path + 'acolite_L8_OLI_2014_10_24_14_35_29_233087_L2W_rhow_592'+ format
];

var extractMetadata = function(uri) {
  var filename = ee.String(uri);
  var parts = filename.split('_');
  
  var predio = ee.String(parts.get(1)).split('/').get(1);
  var year = ee.Number.parse(parts.get(3));
  var month = ee.Number.parse(parts.get(4));
  var day = ee.Number.parse(parts.get(5));
  var date = ee.Date.fromYMD(year, month, day);
  var wavelength = ee.Number.parse(parts.get(12))//.slice(0, -4));
  var bandData = bandMapping[wavelength.getInfo()] || {bands: 'Unknown'};
  return ee.Image(uri)
    .set('date', date)
    .set('wavelength', wavelength)
    .set('bandName', bandData.bands);
    
};

var images = ee.List(uris.map(extractMetadata));

var collection = ee.ImageCollection(images);

var uniqueDates = collection.aggregate_array('date').distinct();
var groupedByDate = uniqueDates.map(function(date) {
  date = ee.Date(date);
  
  var bandsForDate = collection.filter(ee.Filter.eq('date', date)).sort('bandName');
  
  var stackedImage = bandsForDate.iterate(function(bandImage, previous) {
    previous = ee.Image(previous);
    bandImage = ee.Image(bandImage);
    var bandName = ee.String(bandImage.get('bandName'));
    return previous.addBands(bandImage.rename(bandName));
  }, ee.Image().set('date', date));
  
  return ee.Image(stackedImage).set('date', date);
});


var compositeCollection = ee.ImageCollection(ee.List(groupedByDate));


var style_perlita = {
    min: 100,
    max: 150,
    palette: ['#ffffff', '#ffc0cb', '#ff69b4', '#ff1493', '#8b008b']
};

//var applyScaleFactors = require('users/raulperezastorga/VariosEjemplos/08_app_rs:applyScaleFactors')
var l8app = {};
var imgRaw;
var leftMarker, rightMarker;
var imgId;
var imgDate;
var bf_imgButton;
var vectors; 
var previousPlot = null;
var previousGraphUI = null;
var drawingTool = null;
var chartPanel = null;
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


var dateItems = uniqueDatesStrings.getInfo();


function applyScaleFactors(image, location) {
  var opticalBands = image.select('SR_B.*').multiply(1); 

  var ndvi = opticalBands.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI');
  var ndwi = opticalBands.normalizedDifference(['SR_B3', 'SR_B5']).rename('NDWI');
  var evi = image.expression(
    '2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))', {
      'NIR': opticalBands.select('SR_B5'),
      'RED': opticalBands.select('SR_B4'),
      'BLUE': opticalBands.select('SR_B2')
    }).rename('EVI');
  
  // Optionally, if you want to retrieve a string value for comparison
  var location = location.getInfo();  // To get the value in the client-side

  // Create the Perlita index based on the location
  var perlita;

  if (location == 'Villarrica') {
    perlita = image.expression(
      '21.3 * (BLUE / RED) + 2.45', {
        'BLUE': opticalBands.select('SR_B2'),
        'RED': opticalBands.select('SR_B4')
      }).rename('Perlita');
  } else if (location == 'Lanalhue') {
    perlita = image.expression(
      '5.3 * (BLUE / RED) + 5.45', {
        'BLUE': opticalBands.select('SR_B2'),
        'RED': opticalBands.select('SR_B4')
      }).rename('Perlita');
  } else if (location == 'Llanquihue') {
    perlita = image.expression(
      '6 * (BLUE / RED) + 4', {
        'BLUE': opticalBands.select('SR_B2'),
        'RED': opticalBands.select('SR_B4')
      }).rename('Perlita');
  } else if (location == 'San Pedro') {
    perlita = image.expression(
      '6.5 * (BLUE / RED) + 4.5', {
        'BLUE': opticalBands.select('SR_B2'),
        'RED': opticalBands.select('SR_B4')
      }).rename('Perlita');
  } else {
    print('Location not recognized, no formula set');
    return image; 
  }

  
  return image.addBands([ndvi, ndwi, evi, perlita]); 
}

var leftDateSelector = ui.Select({
  items: dateItems,
  placeholder: 'fecha',
  onChange: function(selectedDate) {
    loadImage(selectedDate, leftMap);
  }
});

var leftDateTextBox = ui.Panel({
  widgets: [
    ui.Label('Fecha (Izquierda):'),
    leftDateSelector
  ],
  layout: ui.Panel.Layout.Flow('vertical'),
  style: {
    position: 'top-left',
    padding: '2px',
    backgroundColor: 'rgba(60, 110, 113, 0.5)'
  }
});

var rightDateSelector = ui.Select({
  items: dateItems,
  placeholder: 'fecha',
  onChange: function(selectedDate) {
    loadImage(selectedDate, rightMap);
  }
});

var rightDateTextBox = ui.Panel({
  widgets: [
    ui.Label('Fecha (Derecha):'),
    rightDateSelector
  ],
  layout: ui.Panel.Layout.Flow('vertical'),
  style: {
    position: 'top-right',
    padding: '2px',
    backgroundColor: 'rgba(60, 110, 113, 0.5)' 
  }
});

var leftMap = ui.Map();  
var rightMap = ui.Map();  

leftMap.add(leftDateTextBox);
rightMap.add(rightDateTextBox);

leftMap.setOptions('SATELLITE');
rightMap.setOptions('SATELLITE');

var centerPoint = ee.Geometry.Point([-73.5, -37.5]);
leftMap.centerObject(centerPoint, 9);
rightMap.centerObject(centerPoint, 9);

var linker = ui.Map.Linker([leftMap, rightMap]);

var splitPanel = ui.SplitPanel({
  firstPanel: leftMap,
  secondPanel: rightMap,
  orientation: 'horizontal',
  wipe: true
});

l8app.splitpanel = ui.root.widgets().reset([splitPanel]);

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
      ], ui.Panel.Layout.Flow('horizontal'), {width: '100%', textAlign: 'center'}), 

      table, 

      ui.Panel([
        ui.Label({
          value: 'Seccion filtros',
          style: {
            fontSize: '14px', 
            color: '#3C6E71'
          }
        })
      ], ui.Panel.Layout.Flow('horizontal'), {width: '100%', textAlign: 'center'}) 
    ],
    style: {
      width: '300px', 
      padding: '10px'
    }
  })
};


var areasAdministrativas = ee.FeatureCollection('projects/stellar-horizon-248313/assets/Cuerpos_Agua_pp')
var comunas = areasAdministrativas.aggregate_array('Nombre').sort();
var comunaSeleccionada = null;

var selectorComuna = ui.Select({
  items: [],
  placeholder: 'Lagos',
  onChange: function(seleccionada) {
    comunaSeleccionada = areasAdministrativas.filter(ee.Filter.eq('Nombre', seleccionada));
    leftMap.centerObject(comunaSeleccionada);
    rightMap.centerObject(comunaSeleccionada);
    leftMap.addLayer(comunaSeleccionada, lago_style, 'lago izquierda');
    rightMap.addLayer(comunaSeleccionada, lago_style, 'lago derecha');
  }
});

comunas.evaluate(function(nombres) {
  selectorComuna.items().reset(nombres);
});
var predios_panel = ui.Panel({
  widgets: [
    ui.Label('Lagos:'),
    selectorComuna
  ],
  layout: ui.Panel.Layout.Flow('horizontal'),
  style: {stretch: 'horizontal', margin: '1px'}
});

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

function loadImage(selectedDate, map) {
  var date = ee.Date(selectedDate);
  var nextDate = date.advance(2, 'day');
  var dataset = compositeCollection
      .filter(ee.Filter.eq('date', date))
      .map(function(image) {
        return applyScaleFactors(image, ee.String(comunaSeleccionada.first().get('Nombre'))); // Pass the location for dynamic formula
      })
      .max();

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

var isInspecting = false;

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

function addRedDot(map, coords) {

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

function activateInspector(map) {
  map.style().set('cursor', 'crosshair'); 
  map.onClick(function(coords) {
    generateChart(coords.lon, coords.lat);
    addRedDot(map, coords); 
  });
}

var chartPanel;

function generateChart(lon, lat) {

  if (chartPanel) {
    boxplotSection.remove(chartPanel);
    ui.root.remove(chartPanel);
  }

  chartPanel = ui.Panel({
    style: {
      position: 'bottom-right',
      width: '300px',
      height: '229px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }
  });

  var point = ee.Geometry.Point([lon, lat]);

  var values = dateItems.map(function(date) {
    var image = compositeCollection
      .filter(ee.Filter.eq('date', ee.Date(date)))
      .map(function(image) {
        return applyScaleFactors(image, ee.String(comunaSeleccionada.first().get('Nombre'))); // Pass the location for dynamic formula
      })
      .max()
      .select(selectedIndex);
      
    var meanValue = image.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: point,
      scale: 30,
      maxPixels: 1e8
    });

    return ee.Number(meanValue.get(selectedIndex)).getInfo();
  });

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

  chartPanel.add(chart);

  boxplotSection.add(chartPanel);
}

function activateDrawingTool(callback) {
  var drawingTools = leftMap.drawingTools();
  drawingTools.setShape('polygon'); 
  drawingTools.setDrawModes(['polygon']); 
  drawingTools.draw(); 


  drawingTools.onDraw(function () {
    var drawnGeometry = drawingTools.layers().get(0).getEeObject();
    if (drawnGeometry) {
      drawingTools.stop(); 
      drawingTools.layers().reset(); 
      callback(drawnGeometry);
    }
  });
}


function generateBoxPlotWithPolygon(geometry) {
  

  if (chartPanel) {
    rightMap.remove(chartPanel);
    ui.root.remove(chartPanel);
  }

  var values = compositeCollection
    //.filter(ee.Filter.calendarRange(startYear, endYear, 'year'))
    .map(function(image) {
      return applyScaleFactors(image, ee.String(comunaSeleccionada.first().get('Nombre'))); // Pass the location for dynamic formula
    })
    .sort('date')
    .map(function(image) {
      var index = image.select(selectedIndex);
      
      var allReducers = ee.Reducer.median()
        .combine({reducer2: ee.Reducer.min(), sharedInputs: true})
        .combine({reducer2: ee.Reducer.max(), sharedInputs: true})
        .combine({reducer2: ee.Reducer.percentile([25]), sharedInputs: true})
        .combine({reducer2: ee.Reducer.percentile([50]), sharedInputs: true})
        .combine({reducer2: ee.Reducer.percentile([75]), sharedInputs: true});
        
      var stats = index.reduceRegion({
        reducer: allReducers,
        geometry: geometry,
        scale: 30
      });
      
      var dateString = ee.Date(image.get('date')).format('YYYY-MM-dd');
      var properties = {
        'date': dateString,
        'median': stats.get(selectedIndex + '_p50'), // median is 50th percentile
        'min': stats.get(selectedIndex + '_min'),
        'max': stats.get(selectedIndex + '_max'),
        'p25': stats.get(selectedIndex + '_p25'),
        'p50': stats.get(selectedIndex + '_p50'),
        'p75': stats.get(selectedIndex + '_p75'),
      };
      return ee.Feature(null, properties);
    });

  var values = values.filter(ee.Filter.notNull(
    ['median', 'min', 'max', 'p25', 'p50', 'p75']
  ));
  
  var dateList = values.aggregate_array('date');
  
  function formatDate(date) {
    var year = ee.Date(date).get('year').format();
    var month = ee.Date(date).get('month').subtract(1).format();
    var day = ee.Date(date).get('day').format();
    return ee.String('Date(')
      .cat(year)
      .cat(', ')
      .cat(month)
      .cat(', ')
      .cat(day)
      .cat(ee.String(', 1)'));
  }

  var rowList = dateList.map(function(date) {
    var f = values.filter(ee.Filter.eq('date', date)).first();
    var x = formatDate(date);
    var median = f.get('median');
    var min = f.get('min');
    var max = f.get('max');
    var p25 = f.get('p25');
    var p50 = f.get('p50');
    var p75 = f.get('p75');
    var rowDict = {
      c: [{v: x}, {v: median}, {v: min}, {v: max},
          {v: p25}, {v: p50}, {v: p75}]
    };
    return rowDict;
  });

  rowList.evaluate(function(rowListClient) {
    var dataTable = {
      cols: [
        {id: 'x', type: 'date'},
        {id: 'median', type: 'number'},
        {id: 'min', type: 'number', role: 'interval'},
        {id: 'max', type: 'number', role: 'interval'},
        {id: 'firstQuartile', type: 'number', role: 'interval'},
        {id: 'median', type: 'number', role: 'interval'},
        {id: 'thirdQuartile', type: 'number', role: 'interval'}
      ],
      rows: rowListClient
    };

    var boxplot_options = {
      title: selectedIndex + ' Time-Series Box Plot',
      vAxis: {
        title: selectedIndex,
        gridlines: {
          color: '#d9d9d9'
        },
        minorGridlines: {
          color: 'transparent'
        },
        viewWindow: {
          max: 1
        }
      },
      hAxis: {
        title: '',
        format: 'YYYY-MMM',
        gridlines: {
          color: '#d9d9d9'
        },
        minorGridlines: {
          color: 'transparent'
        }
      },
      legend: {position: 'none'},
      lineWidth: 1,
      series: [{'color': '#D3362D'}],
      interpolateNulls: true,
      intervals: {
        barWidth: 1,
        boxWidth: 1,
        lineWidth: 1,
        style: 'boxes'
      },
      interval: {
        min: {
          style: 'bars',
          fillOpacity: 1,
          color: '#777777'
        },
        max: {
          style: 'bars',
          fillOpacity: 1,
          color: '#777777'
        }
      },
      chartArea: {left: 100, right: 100}
    };

    var chartPanel = ui.Panel({
      style: {
        position: 'bottom-right',
        width: '400px',
        height: '270px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      },
    });

    var chart = ui.Chart(dataTable, 'LineChart', boxplot_options);
    chartPanel.add(chart);


    var deleteButton = ui.Button({
      label: 'Delete Chart',
      style: {stretch: 'horizontal'},
      onClick: function() {
        rightMap.remove(chartPanel);
        ui.root.remove(chartPanel);
      }
    });

    chartPanel.add(deleteButton);
    rightMap.add(chartPanel);
  });
}

l8app.intro.panel.add(l8app.selectorPanel);
ui.root.insert(0, l8app.intro.panel);

var boxplotSection = ui.Panel({
  layout: ui.Panel.Layout.flow('vertical'),
  style: {stretch: 'both'}
});

l8app.intro.panel.add(boxplotSection);

var selectionOptions = ['manual', 'poligono'];
var firstComboBox = ui.Select({
  items: selectionOptions,
  placeholder: 'Metodo',
  style: {
    fontSize: '14px',
    color: '#3C6E71',
  },
  onChange: function (selection) {
    
    
    if (selection === 'poligono') {
      if (comunaSeleccionada) {
        generateBoxPlotWithPolygon(comunaSeleccionada.geometry());
      } else {
        ui.notify('No polygon selected', 'Please select a polygon first.');
      }
    } else if (selection === 'manual') {
      activateDrawingTool(function (geometry) {
        generateBoxPlotWithPolygon(geometry);
      });
    }
  },
});

var seleccion = ui.Panel({
  widgets: [
    ui.Label({
      value: 'Método Sel.',
      style:{
            fontSize: '14px', 
            color: '#3C6E71'
          }
    }),
    firstComboBox
  ],
  layout: ui.Panel.Layout.Flow('horizontal'),
  style: {stretch: 'horizontal', margin: '10px', color: '#3C6E71'}
});

boxplotSection.add(ui.Label('BOX PLOT'));
boxplotSection.add(seleccion);

var yearOptions = ['2014', '2017', '2020', '2021', '2022'];

var startYearComboBox = ui.Select({
  items: yearOptions,
  placeholder: 'Inicial',
  style: {margin: '5px'}
});

var endYearComboBox = ui.Select({
  items: yearOptions,
  placeholder: 'Final',
  style: {margin: '5px'}
});

var rangePanel = ui.Panel({
  widgets: [
    ui.Label({
      value: 'Años',
      style:{
            fontSize: '14px', 
            color: '#3C6E71'
          }
    }),
    startYearComboBox,
    endYearComboBox
  ],
  layout: ui.Panel.Layout.Flow('horizontal'),
  style: {stretch: 'horizontal', margin: '10px', color: '#3C6E71'}
});

boxplotSection.add(rangePanel);

startYearComboBox.onChange(function(value) {
  console.log('Año inicial seleccionado:', value);
});

endYearComboBox.onChange(function(value) {
  console.log('Año final seleccionado:', value);
});


boxplotSection.add(inspectorButton);
