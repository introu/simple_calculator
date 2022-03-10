const add = function (a, b) {
    return (a + b)
};

const subtract = function (a, b) {
    return (a - b)
};

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    if (b !== 0) {
        return a / b;
    } else return 'ERROR'
};

const operate = function (operator, a, b) {
    if (operator === add) {
        return add(a, b)
    } else if (operator === subtract) {
        return subtract(a, b)
    } else if (operator === multiply) {
        return multiply(a, b)
    } else if (operator === divide) {
        return divide(a, b)
    } else return 'ERROR'
}

const screen = document.getElementById('screen')
const divideButton = document.getElementById('divide')
const multiplyButton = document.getElementById('multiply')
const equalsButton = document.getElementById('equals')
const subtractButton = document.getElementById('subtract')
const addButton = document.getElementById('add')
const clearButton = document.getElementById('clear')
const backButton = document.getElementById('back')
/*
const zeroButton = document.getElementById('zero')
const oneButton = document.getElementById('one')
const twoButton = document.getElementById('two')
const threeButton = document.getElementById('three')
const fourButton = document.getElementById('four')
const fiveButton = document.getElementById('five')
const sixButton = document.getElementById('six')
const sevenButton = document.getElementById('seven')
const eightButton = document.getElementById('eight')
const nineButton = document.getElementById('nine')
*/

document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', event => {
        if (screen.innerText === '0' && item.textContent === '0') {
        } else if (screen.innerText === '0' && item.textContent === '.') {
            screen.innerText += item.textContent
        } else if (screen.innerText === '0' && item.textContent !== '0') {
            screen.innerText = item.textContent;
        } else if (screen.innerText.includes('.') && item.textContent === '.') {
        } else screen.innerText += item.textContent;
    })
})


clearButton.addEventListener('click', function () {
    screen.innerText = '0';
})
