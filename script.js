const info = '{  "S0":   { "symbol": "TSLA","name": "Tesla Inc.","industry": "Tech","description": "Tesla, Inc. engages in the design, development, manufacture, and sale of fully electric vehicles, energy generation and storage systems. It also provides vehicle service centers, supercharger station, and self-driving capability. The company operates through the following segments: Automotive and Energy Generation and Storage. The Automotive segment includes the design, development, manufacture and sale of electric vehicles. The Energy Generation and Storage segment includes the design, manufacture, installation, sale, and lease of stationary energy storage products and solar energy systems, and sale of electricity generated by its solar energy systems to customers. It develops energy storage products for use in homes, commercial facilities and utility sites. The company was founded by Jeffrey B. Straubel, Elon Reeve Musk, Martin Eberhard, and Marc Tarpenning on July 1, 2003 and is headquartered in Palo Alto, CA."}, "S1" : { "symbol": "NVDA","name": "NVIDIA Corp.","industry": "Tech","description": "NVIDIA Corp. engages in the design and manufacture of computer graphics processors, chipsets, and related multimedia software. It operates through the following segments: Graphics Processing Unit (GPU), Tegra Processor, and All Other. The GPU segment comprises of product brands, which aims specialized markets including GeForce for gamers; Quadro for designers; Tesla and DGX for AI data scientists and big data researchers; and GRID for cloud-based visual computing users. The Tegra Processor segment integrates an entire computer onto a single chip, and incorporates GPUs and multi-core CPUs to drive supercomputing for autonomous robots, drones, and cars, as well as for consoles and mobile gaming and entertainment devices. The All Other segment refers to the stock-based compensation expense, corporate infrastructure and support costs, acquisition-related costs, legal settlement costs, and other non-recurring charges. The company was founded by Jen Hsun Huang, Chris A. Malachowsky, and Curtis R. Priem in January 1993 and is headquartered in Santa Clara, CA."}, "S2" : { "symbol": "BAC","name": "Bank of America","industry": "Fin","description": "Bank of America Corp. is a bank and financial holding company, which engages in the provision of banking and nonbank financial services. It operates through the following segments: Consumer Banking, Global Wealth and Investment Management, Global Banking, Global Markets, and All Other. The Consumer Banking segment offers credit, banking, and investment products and services to consumers and small businesses. The Global Wealth and Investment Management provides client experience through a network of financial advisors focused on to meet their needs through a full set of investment management, brokerage, banking, and retirement products. The Global Banking segment deals with lending-related products and services, integrated working capital management and treasury solutions to clients, and underwriting and advisory services. The Global Markets segment includes sales and trading services, as well as research, to institutional clients across fixed-income, credit, currency, commodity, and equity businesses. The All Other segment consists of asset and liability management activities, equity investments, non-core mortgage loans and servicing activities, the net impact of periodic revisions to the mortgage servicing rights (MSR) valuation model for both core and non-core MSRs, other liquidating businesses, residual expense allocations and other. The company was founded by Amadeo Peter Giannini in 1904 is headquartered in Charlotte, NC."} }';
const obj = JSON.parse(info);

// Portfolio Array | Is it required given purchase history Array?
const portfolio = '{ "TSLA": [10,12.2], "NVDA": [20,82.2], "BAC": [5,12.0] }';
const portfolioObj = JSON.parse(portfolio);

// Price Array | related function priceUpdate()
// Latest Price priceObj.TSLA[priceObj.TSLA.length - 1];
const priceMatrix = '{ "TSLA": [12.2], "NVDA": [82.2], "BAC": [12.0] }';
const priceObj = JSON.parse(priceMatrix);

// Market Array | related function priceUpdate()
  // Market should be a weighted average.
const  marketMatrix = '{ "Market": [12.21], "Tech": [6.2], "Fin": [4.3], "Food":[6.2] }';
const  marketObj = JSON.parse(marketMatrix);
// Purchase History Array | DATETIME | SYMBOL | TRANSACTION_TYPE | TRANSACTION_VALUE (-1,1) | QUANTITY | PRICE
// related function TransactionEvent()
// Sample Price History
// Reminder; dates in JavaScript start at 0: Jan to 11: Dec
// const history = new Array([new Date(2021,11,04,20,44,00), "TSLA","BUY",1,10,10.20],[new Date(2021,11,04,20,47,00), "NVDA","BUY",1,2,80]);
const history = new Array();

// Hyperparameters Array
const Hyperparameters = new Array([])

// Randomization Function
function getRandomChange() {
  return ((Math.random() * 2)- 1) /100;
}

// Onload/Execution Script
function ScriptOnload() {
  startTime(0);
  draftTable('Market'); 
  updateHistory();
  updateBalance();
  updateCount();
  darkmode();
}

// Transaction Function
function TransactionEvent (TRANSACTION_TYPE, symbol, quantity, price, DATETIME) {
  if (TRANSACTION_TYPE == 'BUY') {
    TRANSACTION_VALUE =  1;
  } else {
    TRANSACTION_VALUE = -1;
  };
  inputs = [new Date(DATETIME.getFullYear(), DATETIME.getMonth(), DATETIME.getDate(), DATETIME.getHours(),DATETIME.getMinutes(), DATETIME.getSeconds()), symbol, TRANSACTION_TYPE, TRANSACTION_VALUE, quantity, price];
  history.push(inputs);
  updateHistory();
  updateBalance();  
  updateCount();
  draftTable('Market');
  console.log(TRANSACTION_TYPE + ' ' + symbol);
}

// TransactionEvent('BUY','TSLA',10,12.2,new Date());
// TransactionEvent('SELL','TSLA',10,12.2,new Date());

// Completed Function | changeValue is a (%)
function priceUpdate(symbol,changeValue) {
  if (Object.keys(marketObj).includes(symbol)) {
    marketArray = marketObj[symbol];
    marketArray.push(marketArray[marketArray.length - 1]*(1 + changeValue));
    // console.log(marketArray);
  } else {
    priceArray = priceObj[symbol];
    priceArray.push(priceArray[priceArray.length - 1]*(1 + changeValue));
    // console.log(priceArray);
  };
    if (changeValue > 0) {
      return 1
    } else if (changeValue < 0) {
      return -1
    } else {
      return 0
    }; 
}

// priceUpdate('TSLA',getRandomChange())

// Completed Function
function draftTable(Selectindustry) {
  // var len = Object.keys(info).length;

  // Clear Table (except headers)
  for (let index = 0; index < document.getElementById("StockSpreadsheet").rows.length + 2; index++) {
    document.getElementById("StockSpreadsheet").deleteRow(-1);
  };

  for (const info_row in obj) {
    if (Selectindustry == obj[info_row].industry || Selectindustry == 'Market') {
      var indexTable = document.getElementById('StockSpreadsheet');
      var newRow = indexTable.insertRow();
      var Col1   = newRow.insertCell(0);
      var Col2   = newRow.insertCell(1);
      var Col3   = newRow.insertCell(2);
      var Col4   = newRow.insertCell(3);
      var Col5   = newRow.insertCell(4);
      var Col6   = newRow.insertCell(5);    
      Col1.innerHTML = obj[info_row].industry;
      Col2.innerHTML = obj[info_row].symbol;
      Col3.innerHTML = obj[info_row].name;
      // Col3.innerHTML = obj[info_row].description;
      Col4.innerHTML = priceObj[ obj[info_row].symbol ][ priceObj[obj[info_row].symbol].length - 1 ].toFixed(2);     // Pulls latest price from price matrix
      Col5.innerHTML = updateQuantity(obj[info_row].symbol);
      Col6.innerHTML = '<button onclick="' 
        + "TransactionEvent('BUY','" + obj[info_row].symbol + "',10,priceObj." + obj[info_row].symbol + '[priceObj.' + obj[info_row].symbol + '.length - 1],new Date());">Buy</button>'
        + '<button onclick="' 
        + "TransactionEvent('SELL','" + obj[info_row].symbol + "',10,priceObj." + obj[info_row].symbol + '[priceObj.' + obj[info_row].symbol + '.length - 1],new Date());">Sell</button>';
    };
  };
};

function updateHistory() {
  document.getElementById('history').innerHTML = history.sort().slice(-4).join('<br>');  
}

function updateBalance() {
  document.getElementById('balance').innerHTML = currentBalance().toFixed(2);  
}

function updateCount() {
  document.getElementById('numTransaction').innerHTML = history.length;  
}

// Completed Function 
function currentBalance () {
  return history.reduce(getSum, 0);

  function getSum(total, num) {
    return total + (num[3]*num[4]*num[5]);
  };
}

function updateQuantity (symbol) {
  const result = history.filter(record => record[1] == symbol);
  return result.reduce(getSum, 0);

  function getSum(total, num) {
    return total + (num[3]);
  };
}