function myFunc(){
  var txt = document.getElementById('messg');
  var txt1=  document.getElementById('msg');
  let content= txt.value;
  if(content===" "){
    alert("Please Enter a Valid Message");
  }
  else{
  txt1.innerHTML+=  content + "<br>" ;
  txt.value=" ";

}

}
