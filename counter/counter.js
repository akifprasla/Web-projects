let x = 0;
function subtcount(){
  var a = document.getElementById("coun");
  let c = x-1;
  a.innerHTML = c;
  x=c;
}

function addcount(){
  var a = document.getElementById("coun");
  let c = x+1;
  a.innerHTML = c;
  x=c;
}

function reset(){
  var a = document.getElementById("coun");
  a.innerHTML = "0";
  x=0;
}
