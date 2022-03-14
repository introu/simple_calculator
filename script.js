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
    } else return alert('ERROR')
};

const operate = function (operator, a, b) {
    if (operator === 'add') {
        return add(a, b)
    } else if (operator === 'subtract') {
        return subtract(a, b)
    } else if (operator === 'multiply') {
        return multiply(a, b)
    } else if (operator === 'divide') {
        return divide(a, b)
    } else return 'ERROR'
}

const screen = document.getElementById('screen')
const topScreen = document.getElementById('topScreen')
const equalsButton = document.getElementById('equals')
const clearButton = document.getElementById('clear')
const backButton = document.getElementById('back')

let operatedValue = '';
let valueToOperate = '';
let desiredOperation

document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', () => {
        if (screen.innerText === '0' && item.textContent !== '.') {
            screen.innerText = item.textContent;
            return;
        }
        if (screen.innerText.includes('.') && item.textContent === '.') {
            return
        }
        screen.innerText += item.textContent
    })
})

document.querySelectorAll('.operate').forEach((item => {
    item.addEventListener('click', () => {
        operatedValue = parseFloat(topScreen.textContent)
        valueToOperate = parseFloat(screen.innerText)
        if (isNaN(operatedValue)) {
            operatedValue = valueToOperate
            topScreen.textContent = operatedValue
            screen.innerText = '0'
        } else if (operatedValue) {
            topScreen.textContent = operate(desiredOperation, operatedValue, valueToOperate)
            screen.innerText = '0'
        }
        desiredOperation = item.id
    })
}))

clearButton.addEventListener('click', () => {
    screen.innerText = `0`
    topScreen.innerText = ``
})

equalsButton.addEventListener('click', () => {
    screen.innerText = operate(desiredOperation, parseFloat(topScreen.textContent), parseFloat(screen.innerText))
    topScreen.innerText = ``
})

backButton.addEventListener('click', () => {
    if (screen.innerText.length > 1) {
        screen.innerText = screen.innerText.slice(0, -1)
    } else if (screen.innerText.length === 1) {
        screen.innerText = '0'
    }
})