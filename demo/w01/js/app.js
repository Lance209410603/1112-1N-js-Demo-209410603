let userInput = document.querySelector('#input-number');
let Add = document.querySelector('#btn-add');
let Subtract = document.querySelector('#btn-subtract');
let Multiply = document.querySelector('#btn-multiply');
let Divide = document.querySelector('#btn-divide');
let ResultOutput = document.querySelector('#current-result');
let CalculationOutput = document.querySelector('#current-calculation');

/*
console.log('userInput', userInput);
console.log('Add', Add);
console.log('Subtract', Subtract);
console.log('Multiply', Multiply);
console.log('Divide', Divide);
*/

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function outputResult(result, text) {
  ResultOutput.textContent = result;
  CalculationOutput.textContent = text;
}

function add() {
  const op1 = currentResult;
  const op2 = getUserInput();
  currentResult = op1 + op2;
  console.log(`${op1}+${op2} = ${currentResult}`);
  const calcText = `${op1}+${op2}`;
  outputResult(currentResult, calcText);
}

function subtract() {
  const op1 = currentResult;
  const op2 = getUserInput();
  currentResult = op1 - op2;
  console.log(`${op1}-${op2} = ${currentResult}`);
  const calcText = `${op1}-${op2}`;
  outputResult(currentResult, calcText);
}

function multiply() {
  const op1 = currentResult;
  const op2 = getUserInput();
  currentResult = op1 * op2;
  console.log(`${op1}*${op2} = ${currentResult}`);
  const calcText = `${op1}*${op2}`;
  outputResult(currentResult, calcText);
}

function divide() {
  const op1 = currentResult;
  const op2 = getUserInput();
  currentResult = op1 / op2;
  console.log(`${op1}/${op2} = ${currentResult}`);
  const calcText = `${op1}/${op2}`;
  outputResult(currentResult, calcText);
}

Add.addEventListener('click', add);
Subtract.addEventListener('click', subtract);
Multiply.addEventListener('click', multiply);
Divide.addEventListener('click', divide);
