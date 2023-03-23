const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculate = document.querySelector(".calculate");

// Add event listener to each number button
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    display.value += number.innerText;
    console.log(number);
  });
});

// Add event listener to each operator button
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    display.value += operator.innerText;
  });
});

// Add event listener to the calculate button
calculate.addEventListener("click", () => {
  const result = eval(display.value);
  display.value = result;
});
