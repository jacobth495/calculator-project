const screen = document.querySelector('#screen');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const clearBtn = document.querySelector('#clear');
const backspaceBtn = document.querySelector('#backspace');
const equalBtn = document.querySelector('#equal');

function add(a, b) {
	c = a + b;
  return c;
};

function subtract(a, b) {
	c = a - b;
  return c;
};

function multiply(a, b) {
  c = a * b;
  return c
};

function divide(a, b) {
  c = a / b;
  return c
};