function expandhistory() {
  var propert = document.getElementById("history").style.visibility;
  if (propert == "hidden") {
    document.getElementById('expandhistory').innerHTML = '-';
    document.getElementById("history").style.display = 'flex';
    return document.getElementById("history").style.visibility = 'visible';
  } else {
    document.getElementById('expandhistory').innerHTML = '+';    
    document.getElementById("history").style.display = 'none';
    return document.getElementById("history").style.visibility = 'hidden';
  };
}

function darkmode() {
  // var propert = document.getElementById("history").style.visibility;
  // if (propert == "hidden") {
  //   document.getElementById('expandhistory').innerHTML = '-';
  //   document.getElementById("history").style.display = 'flex';
  //   return document.getElementById("history").style.visibility = 'visible';
  // } else {
  //   document.getElementById('expandhistory').innerHTML = '+';    
  //   document.getElementById("history").style.display = 'none';
  //   return document.getElementById("history").style.visibility = 'hidden';
  // };
}
