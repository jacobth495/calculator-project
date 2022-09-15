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
const buttons = document.querySelectorAll('button');
const operatorBtns = document.querySelectorAll('.func')

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

oneBtn.addEventListener('click', function() {
  screen.textContent += 1;
})

twoBtn.addEventListener('click', function() {
  screen.textContent += 2;
})

threeBtn.addEventListener('click', function() {
  screen.textContent += 3;
})

fourBtn.addEventListener('click', function() {
  screen.textContent += 4;
})

fiveBtn.addEventListener('click', function() {
  screen.textContent += 5;
})

sixBtn.addEventListener('click', function() {
  screen.textContent += 6;
})

sevenBtn.addEventListener('click', function() {
  screen.textContent += 7;
})

eightBtn.addEventListener('click', function() {
  screen.textContent += 8;
})

nineBtn.addEventListener('click', function() {
  screen.textContent += 9;
})

zeroBtn.addEventListener('click', function() {
  screen.textContent += 0;
})

multiplyBtn.addEventListener('click', function() {
  screen.textContent += ' * ';
})

divideBtn.addEventListener('click', function() {
  screen.textContent += ' / ';
})

addBtn.addEventListener('click', function() {
  screen.textContent += ' + ';
})

subtractBtn.addEventListener('click', function() {
  screen.textContent += ' - ';
})

equalBtn.addEventListener('click', operate)

clearBtn.addEventListener('click', function() {
  screen.textContent = '';
  inputs = ''
})

backspaceBtn.addEventListener('click', function() {
  screen.textContent = screen.textContent.slice(0, -1);
})

function checkInputs() {
  inputs = screen.textContent.split(' ');
  inputOne = parseInt(inputs[0]);
  operator = inputs[1];
  inputTwo = parseInt(inputs[2]);
}

for (b of buttons) {
  b.addEventListener('click', checkInputs);
}

function operate() {
  if (operator === '/' && inputTwo === 0) {
    alert("You can't divide by 0 silly!!!");
  }
  switch (operator) {
    case '*':
      screen.textContent = multiply(inputOne, inputTwo);
      break;
    case '/':
      screen.textContent = divide(inputOne, inputTwo);
      break;
    case '-':
      screen.textContent = subtract(inputOne, inputTwo);
      break;
    case '+':
      screen.textContent = add(inputOne, inputTwo);
      break;
  }
}

for (o of operatorBtns) {
  o.addEventListener('click', function checkText() {
    if (inputs.length >= 4) {
      operate();
    }
  })
}