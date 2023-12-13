function add() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var display = document.getElementById("display");
    display.value = number1 + number2;
  }
  
  function subtract() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var display = document.getElementById("display");
    display.value = number1 - number2;
  }
  
  function multiply() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var display = document.getElementById("display");
    display.value = number1 * number2;
  }
  
  function divide() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var display = document.getElementById("display");
    display.value = number1 / number2;
  }
  
  function calculate() {
    var operator = document.getElementById("operator").value;
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var display = document.getElementById("display");
  
    switch (operator) {
      case "+":
        display.value = number1 + number2;
        break;
      case "-":
        display.value = number1 - number2;
        break;
      case "*":
        display.value = number1 * number2;
        break;
      case "/":
        display.value = number1 / number2;
        break;
    }
  }
  