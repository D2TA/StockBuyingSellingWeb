//  LoadChartJS();

const symbol = 'TSLA';
const pricearray = priceObj[symbol];
const labelarray = [...Array(pricearray.length).keys()];

var canvas = document.getElementById('myChart').getContext('2d');
var data = {
  labels: labelarray,
  datasets: [{
    label: 'Price of ' + symbol,
    data: pricearray,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }],
};

var option = {
  showLines: true
};

var myLineChart = new Chart(canvas, {type: 'line', data: data, options: option})

function UpdateChartData() {
  const symbol = 'TSLA';
  const pricearray = priceObj[symbol];
  const labelarray = [...Array(pricearray.length).keys()];
  myLineChart.data.datasets[0].data = pricearray;
  myLineChart.data.labels = labelarray;
  myLineChart.update();
}