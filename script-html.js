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
  document.body.style.color = 'white'
  document.body.style.backgroundColor = '#121212'
}

function lightmode() {
  document.body.style.color = '#121212'
  document.body.style.backgroundColor = 'white'
}
