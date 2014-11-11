

// handsontable test

var data = [
  ["2008", 10, 11, 12, 13],
  ["2009", 20, 11, 14, 13],
  ["2010", 30, 15, 12, 13]
];

var $container = $("#dataTable");
$container.handsontable({
    data: data,
    colHeaders: true,
    rowHeaders: true,
    formulas: true, //add formulas from rule.js
    afterChange: refreshChart, //refresh chart when data is input
    contextMenu: true, //adding clipboard
    contextMenuCopyPaste: {
    swfPath: "vendors/javascripts/ZeroClipboard.swf"
  }
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

var refreshChart = function () {
    chartGen(data);
};

var colorPalette = function (color) {
    switch(color){
        case "circus":
            return ['#2E0927', '#D90000', '#FF2D00', '#FF8C00','#04756F'];
        case "odd":
            return ['#000000', '#333333', '#FF358B', '#01B0F0','#AEEE00'];
        case "sea-wolf":
            return ['#DC3522', '#D9CB9E', '#374140', '#2A2C2B','#1E1E20'];
        case "tech-office":
            return ['#DC3522', '#D9CB9E', '#374140', '#2A2C2B','#1E1E20'];

        default:
            return ['#2E0927', '#D90000', '#FF2D00', '#FF8C00','#04756F'];
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