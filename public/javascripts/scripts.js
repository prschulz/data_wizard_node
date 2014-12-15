

// handsontable test

//seed data
var data = [
  ["2008", 10, 11, 12, 13],
  ["2009", 20, 11, 14, 13],
  ["2010", 30, 15, 12, 13],
  ["2011", 22, 25, 14, 7],
  ["2012", 15, 20, 16, 20],
];

var $container = $("#dataTable");
$container.handsontable({
    data: data,
    colHeaders: true,
    rowHeaders: true,
    formulas: true, //add formulas from rule.js
    afterChange: refreshChart, //refresh chart when data is input
    contextMenu: true //adding clipboard
  //   contextMenuCopyPaste: {
  //   swfPath: "vendors/javascripts/ZeroClipboard.swf"
  // }
  });



var chartGen = function (data) {
    var type = $('#chart-type').val();
    var chart = c3.generate({
        data: {
            columns: data,
            type: type,
        },
        color: {
              pattern: colorPalette($('#color-palette').val())
            }
    });
};

//function to refresh chart on user action
var refreshChart = function () {
    chartGen(data);
};

//color palette function to choose chart color scheme
var colorPalette = function (color) {
    switch(color){
        case "salmon":
            return ['#FFE1A8', '#FF7F66', '#7ECEFD', '#2185C5','#3E454C'];
        case "circus":
            return ['#2E0927', '#D90000', '#FF2D00', '#FF8C00','#04756F'];
        case "odd":
            return ['#000000', '#333333', '#FF358B', '#01B0F0','#AEEE00'];
        case "sea-wolf":
            return ['#DC3522', '#D9CB9E', '#374140', '#2A2C2B','#1E1E20'];
        case "tech-office":
            return ['#595241', '#B8AE9C', '#ACCFCC', '#8A0917','#BBBBBB'];
        case "dusty-petrol":
            return ['#292929', '#5B7876', '#8F9E8B', '#F2E6B6','#412A22'];
        default:
            return ['#FFE1A8', '#FF7F66', '#7ECEFD', '#2185C5','#3E454C'];
    }
};

//event handler for chart type select tag to refresh chart
$('select').on('change', function () {
    refreshChart();
});

//initial chart generation on page load
chartGen(data);

//add selectordie styling to all dropdowns
$("select").selectOrDie();

