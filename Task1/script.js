function add(){
  const firstNumber = parseInt(document.getElementById('firstNumber').value);
  const secondNumber = parseInt(document.getElementById('secondNumber').value);
  setTimeout(function(){
    document.getElementById('result').innerHTML = (firstNumber + secondNumber);
  }, 2000);
}

function subtract(){
  const firstNumber = parseInt(document.getElementById('firstNumber').value);
  const secondNumber = parseInt(document.getElementById('secondNumber').value);
  setTimeout(function(){
    document.getElementById('result').innerHTML = (firstNumber - secondNumber);
  }, 1000);
}

function multiply(){
  const firstNumber = parseInt(document.getElementById('firstNumber').value);
  const secondNumber = parseInt(document.getElementById('secondNumber').value);
  setTimeout(function(){
    document.getElementById('result').innerHTML = (firstNumber * secondNumber);
  }, 4000);
}

function divide(){
  const firstNumber = parseInt(document.getElementById('firstNumber').value);
  const secondNumber = parseInt(document.getElementById('secondNumber').value);
  setTimeout(function(){
    document.getElementById('result').innerHTML = (firstNumber / secondNumber);
  }, 3000);
}

