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
  // document.body.style.backgroundColor = '#121212'
  var c = document.body.children;
  for (let index = 0+2; index < c.length; index++ ){
    c[index].style.borderBottom = "thin dotted white";
  };
}

function lightmode() {
  document.body.style.color = '#121212'
  document.body.style.backgroundColor = 'white'
  var c = document.body.children;
  for (let index = 0+2; index < c.length; index++ ){
    c[index].style.borderBottom = "thin dotted #121212" ;
  };
}

function UpdateIndicator(id, value) {
  if (value == -1) {
    // Down
    document.getElementById(id + 'Down').style.visibility = 'visible'
    document.getElementById(id + 'Down').style.display = 'initial';
    // Up
    document.getElementById(id + 'Up').style.visibility = 'hidden'
    document.getElementById(id + 'Up').style.display = 'none'
    document.getElementById(id + 'Flat').style.visibility = 'hidden'
    document.getElementById(id + 'Flat').style.display = 'none'
    
  } else if (value == 1) {
    // Up
    document.getElementById(id + 'Up').style.visibility = 'visible'
    document.getElementById(id + 'Up').style.display = 'initial'
    // Down
    document.getElementById(id + 'Down').style.visibility = 'hidden'
    document.getElementById(id + 'Down').style.display = 'none'
    document.getElementById(id + 'Flat').style.visibility = 'hidden'
    document.getElementById(id + 'Flat').style.display = 'none'

  } else {
    // Up
    document.getElementById(id + 'Flat').style.visibility = 'visible'
    document.getElementById(id + 'Flat').style.display = 'initial'
    // Down
    document.getElementById(id + 'Down').style.visibility = 'hidden'
    document.getElementById(id + 'Down').style.display = 'none'
    document.getElementById(id + 'Up').style.visibility = 'hidden'
    document.getElementById(id + 'Up').style.display = 'none'
  };
};