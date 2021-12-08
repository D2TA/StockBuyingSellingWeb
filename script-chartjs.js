// Body onresize function
function PieResize() {
  var c   = document.getElementById('allocation');
  var ctx = c.getContext('2d');
  c.height = 200;
  canvas.canvas.height  = parseInt(document.getElementsByClassName('chartTicker')[0].style.height.replace('px',''))  
}
//  LoadChartJS();
function UpdateChartData() {
  const symbol = 'TSLA';
  var pricearray = priceObj[symbol];
  const labelarray = [...Array(pricearray.length).keys()];
  myLineChart.data.datasets[0].data = pricearray;
  // myLineChart.data.datasets[1].data = 13;  
  myLineChart.data.labels = labelarray;
  myLineChart.update();
}

function UpdateAllocationData() {
  myPieChart.data.datasets[0].data = PortfolioData();
  myPieChart.update();
}

function PortfolioData() {
  // var total = 0;  
  var PofPort = []
  for (row in obj) {
    var sym = obj[row].symbol;
    var bal = updateBalance(sym);
    PofPort.push(bal)
    // total = total + bal;
  };
  return PofPort;
}


// Trend Chart
const symbol = 'TSLA';
var pricearray = priceObj[symbol];
const labelarray = [...Array(pricearray.length).keys()];
var canvas = document.getElementById('lineGraph').getContext('2d');
canvas.canvas.height  = parseInt(document.getElementsByClassName('chartTicker')[0].style.height.replace('px',''))
var data = {
  labels: labelarray,
  datasets: [{
    label: 'Price of ' + symbol,
    data: pricearray,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    }, 
  ],
};
var option = {
  showLines: true,
  stacked: false,
  maintainAspectRatio: false,
  responsive: true,
};

var myLineChart = new Chart(canvas, {type: 'line',data: data, options: option})

// 
var canvasPie = document.getElementById('allocation').getContext('2d');
const dataPie = {
  labels: [...Object.keys(priceObj)],
  datasets: [{
    label: 'My First Dataset',
    data: PortfolioData(),
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const optionPie = {
  type: 'doughnut',
  data: data,
  maintainAspectRatio: false,
  responsive: true,
  plugins : {
    legend: {
      display: false,
    },
  },
};

var myPieChart = new Chart(canvasPie, {type: 'doughnut', data: dataPie, options: optionPie})