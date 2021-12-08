//  LoadChartJS();

const symbol = 'TSLA';
var pricearray = priceObj[symbol];
const labelarray = [...Array(pricearray.length).keys()];

var canvas = document.getElementById('myChart').getContext('2d');
var data = {
  labels: labelarray,
  datasets: [{
    label: 'Price of ' + symbol,
    data: pricearray,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    // yAxisID: "y1",
  }, 
  // {
  //   label: 'Average Cost of ' + symbol,
  //   data: 13,
  //   borderColor: 'rgba(99, 99, 99, 1)',
  //   borderWidth: 1,
  //   yAxisID: "y2",
  // },  

  ],
};

var option = {
  showLines: true,
  stacked: false,
};

var myLineChart = new Chart(canvas, {type: 'line',data: data, options: option})

function UpdateChartData() {
  const symbol = 'TSLA';
  var pricearray = priceObj[symbol];
  const labelarray = [...Array(pricearray.length).keys()];
  myLineChart.data.datasets[0].data = pricearray;
  // myLineChart.data.datasets[1].data = 13;  
  myLineChart.data.labels = labelarray;
  myLineChart.update();
}