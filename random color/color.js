const a=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];

function clr(){
  let b="#";


  for(i=1;i<7;i++){
    let c=Math.floor(Math.random()*a.length);
    b+=a[c];
  }
    document.body.style.backgroundColor = b;
    document.getElementById("hex").innerHTML = b;
  }
  
