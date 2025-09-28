const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const point = document.querySelector(".point");
const allClear = document.querySelector(".allClear");
const clear = document.querySelector(".clear");
const screen = document.querySelector(".screen");

let a = "";
let b = "";
let operator = "";
let result = "";
let inputB = false;
let equalsClicked = false;
screen.textContent = 0;

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (equalsClicked == true) {
      a = "";
      b = "";
      a += button.textContent;
      console.log("a:", a.length);
      screen.textContent = a;
    } else if (!inputB && a.length < 10) {
      a += button.textContent;
      console.log("a:", a.length);
      screen.textContent = a;
    } else if (inputB && b.length < 10) {
      b += button.textContent;
      console.log("b:", b);
      screen.textContent = b;
    }
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (b !== "") {
      result = calculator(Number(a), Number(b), operator);
      a = result;
      b = "";
      console.log(result);
      let display = String(result).slice(0, 10);
      screen.textContent = display;
    }
    operator = button.textContent;
    inputB = true;
    console.log(operator);
    equalsClicked = false;
  });
});

point.addEventListener("click", () => {
  if (!inputB && !a.includes(".")) {
    a += point.textContent;
    console.log("a:", a);
    screen.textContent = a;
  } else if (inputB === true && !b.includes(".")) {
    b += point.textContent;
    console.log("b:", b);
    screen.textContent = b;
  }
});

equals.addEventListener("click", () => {
  if (equalsClicked === false && a === "") {
    screen.textContent = 0;
  } else if (Number(b) === 0 && operator === "/") {
    console.log("Undefined");
    screen.textContent = "LOSeR";

    return "Undefined";
  } else if (b === "") {
    console.log(a);
    screen.textContent = a;
    return a;
  } else {
    result = calculator(Number(a), Number(b), operator);
    console.log(result);
    a = result;
    b = "";
    equalsClicked = true;
    let display = String(result).slice(0, 10);
    screen.textContent = display;
  }
});

clear.addEventListener("click", () => {
  if (!inputB) {
    a = "";
    console.log("a:", a);
    screen.textContent = a;
  } else {
    b = "";
    console.log("b:", b);
    screen.textContent = b;
  }
});

allClear.addEventListener("click", () => {
  a = "";
  b = "";
  operator = "";
  timesClicked = 0;
  result = "";
  inputB = false;
  let equalsClicked = false;
  console.clear();
  screen.textContent = 0;
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

/*c = calculator(a, b, operator); - don't need a chain function

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
