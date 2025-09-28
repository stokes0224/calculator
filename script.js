const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

let a = "";
let b = "";
let operator = "";
let timesClicked = 0;
let result = "";
let inputB = false;

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (!inputB) {
      a += button.textContent;
      console.log("a:", a);
    } else {
      b += button.textContent;
      console.log("b:", b);
    } 
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.textContent;
    inputB = true;
    timesClicked++;
     console.log(operator);
    console.log(timesClicked);
    if (timesClicked > 1) {
        b = ""
      let result = calculator(Number(a), Number(b), operator);
      console.log(result);
    }
  });
});

equals.addEventListener("click", () => {
    if (Number(b) === 0 && operator === "/"){
        console.log("Undefined")
        return "Undefined"
    } else {
    result = calculator(Number(a), Number(b), operator);
    console.log(result);
    a = result}

  });

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "/":
      return divide(a, b);
    case "X":
      return multiply(a, b);
    default:
      return "Invalid Operator";
  }
}

/*c = calculator(a, b, operator);

function chain(c, d, operator) {
  switch (operator) {
    case "+":
      return add(c, d);
    case "-":
      return subtract(c, d);
    case "/":
      return divide(c, d);
    case "X":
      return multiply(c, d);
    default:
      return "Invalid Operator";
  }
}

console.log(calculator(a, b, "+")); */
