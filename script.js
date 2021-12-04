function darkMode() {
  
};

function buy(quantity_buy, price_buy, balance, commission) {
  var Total = quantity_buy*price_buy;
  var TotalExpense = Total - commission
  if (TotalExpense > balance){
    return alert('You do not have enough money! :(');
  } else {
    return alert('Beep beep buying...zzz')
    // Add code to update portfolio
  };
};

function sell(quantity_sell, price_buy, quantity_holdings, commission) {
  var Total = quantity_sell*price_sell;
  var TotalExpense = Total - commission
  if (TotalExpense > balance){
    alert('You do not have enough money! :(');
  } else {
    // Add code to update portfolio
    alert('Beep beep selling...zzz')
  };
};

function currentBalance (portfolio) {

};