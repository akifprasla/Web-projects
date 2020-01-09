
var x=1;
//main function to print X and O and check for winner
function clck(btn){

  if(x==1){
    document.getElementById(btn).value = "X";
    x-=1;
    document.getElementById(btn).disabled="disabled";
    win();
  }

  else{
    document.getElementById(btn).value = "O";
    x+=1;
    document.getElementById(btn).disabled="disabled";
    win();
  }
}

// Check the winner

function win(){
  //for X to win
  if(
    //for all rows
    document.getElementById('btn1').value == "X"&&
    document.getElementById('btn2').value == "X"&&
    document.getElementById('btn3').value == "X"||

    document.getElementById('btn4').value == "X"&&
    document.getElementById('btn5').value == "X"&&
    document.getElementById('btn6').value == "X"||

    document.getElementById('btn7').value == "X"&&
    document.getElementById('btn8').value == "X"&&
    document.getElementById('btn9').value == "X"||

    //for all columns
    document.getElementById('btn1').value == "X"&&
    document.getElementById('btn4').value == "X"&&
    document.getElementById('btn7').value == "X"||

    document.getElementById('btn2').value == "X"&&
    document.getElementById('btn5').value == "X"&&
    document.getElementById('btn8').value == "X"||

    document.getElementById('btn3').value == "X"&&
    document.getElementById('btn6').value == "X"&&
    document.getElementById('btn9').value == "X"||

    //for diagnols
    document.getElementById('btn1').value == "X"&&
    document.getElementById('btn5').value == "X"&&
    document.getElementById('btn9').value == "X"||

    document.getElementById('btn3').value == "X"&&
    document.getElementById('btn5').value == "X"&&
    document.getElementById('btn7').value == "X"
  )
  {
    document.write("X WINS");
    reset();
  }
  //for O to win
else if(
  //for all rows
  document.getElementById('btn1').value == "O"&&
  document.getElementById('btn2').value == "O"&&
  document.getElementById('btn3').value == "O"||

  document.getElementById('btn4').value == "O"&&
  document.getElementById('btn5').value == "O"&&
  document.getElementById('btn6').value == "O"||

  document.getElementById('btn7').value == "O"&&
  document.getElementById('btn8').value == "O"&&
  document.getElementById('btn9').value == "O"||

  //for all columns
  document.getElementById('btn1').value == "O"&&
  document.getElementById('btn4').value == "O"&&
  document.getElementById('btn7').value == "O"||

  document.getElementById('btn2').value == "O"&&
  document.getElementById('btn5').value == "O"&&
  document.getElementById('btn8').value == "O"||

  document.getElementById('btn3').value == "O"&&
  document.getElementById('btn6').value == "O"&&
  document.getElementById('btn9').value == "O"||

  //for diagnols
  document.getElementById('btn1').value == "O"&&
  document.getElementById('btn5').value == "O"&&
  document.getElementById('btn9').value == "O"||

  document.getElementById('btn3').value == "O"&&
  document.getElementById('btn5').value == "O"&&
  document.getElementById('btn7').value == "O"
)
{
  document.write("O WINS");
  reset();
}
}
// To restart the game
function reset(){
  document.getElementById('btn1').value = "";
  document.getElementById('btn2').value = "";
  document.getElementById('btn3').value = "";
  document.getElementById('btn4').value = "";
  document.getElementById('btn5').value = "";
  document.getElementById('btn6').value = "";
  document.getElementById('btn7').value = "";
  document.getElementById('btn8').value = "";
  document.getElementById('btn9').value = "";

  document.getElementById('btn1').disabled = "";
  document.getElementById('btn2').disabled = "";
  document.getElementById('btn3').disabled = "";
  document.getElementById('btn4').disabled = "";
  document.getElementById('btn5').disabled = "";
  document.getElementById('btn6').disabled = "";
  document.getElementById('btn7').disabled = "";
  document.getElementById('btn8').disabled = "";
  document.getElementById('btn9').disabled = "";
}
