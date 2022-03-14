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
    } else return '0'
}

const screen = document.getElementById('screen')
const topScreen = document.getElementById('topScreen')
const equalsButton = document.getElementById('equals')
const clearButton = document.getElementById('clear')
const backButton = document.getElementById('back')
const numberOne = document.querySelector('#one')
const numberTwo = document.querySelector('#two')
const numberThree = document.querySelector('#three')
const numberFour = document.querySelector('#four')
const numberFive = document.querySelector('#five')
const numberSix = document.querySelector('#six')
const numberSeven = document.querySelector('#seven')
const numberEight = document.querySelector('#eight')
const numberNine = document.querySelector('#nine')
const numberZero = document.querySelector('#zero')
const operationDivide = document.querySelector('#divide')
const operationMultiply = document.querySelector('#multiply')
const operationAdd = document.querySelector('.add')
const operationSubtract = document.querySelector('#subtract')
const decimalPoint = document.querySelector('#decimal')




let operatedValue = '';
let valueToOperate = '';
let desiredOperation
let totallyEvaluated = false
let result

document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', () => {
        if (screen.innerText.length > 15) return
        if (!totallyEvaluated) {
            if (screen.innerText === '0' && item.innerText !== '.') {
                screen.innerText = item.innerText;
                return;
            }
            if (screen.innerText.includes('.') && item.innerText === '.') {
                return
            }
            screen.innerText += item.innerText
        } else {
            screen.innerText = item.innerText
            totallyEvaluated = 0
        }
    })
})

document.querySelectorAll('.operate').forEach((item => {
    item.addEventListener('click', () => {
        operatedValue = parseFloat(topScreen.innerText)
        valueToOperate = parseFloat(screen.innerText)
        if (isNaN(operatedValue)) {
            operatedValue = valueToOperate
            topScreen.innerText = operatedValue
            screen.innerText = '0'
        } else if (operatedValue) {
            result = operate(desiredOperation, operatedValue, valueToOperate)
            topScreen.innerText = (Math.round(result * 1000000000) / 1000000000).toString()
            screen.innerText = '0'
        }
        desiredOperation = item.id
    })
}))
let memorizedNumber = 0;

clearButton.addEventListener('click', () => {
    screen.innerText = `0`
    topScreen.innerText = ``
    totallyEvaluated = false
    memorizedNumber = 0
})

equalsButton.addEventListener('click', () => {
    if (memorizedNumber === 0) {
        memorizedNumber = parseFloat(screen.innerText)
    }
    if (topScreen.innerText === '' && screen.innerText !== '0') {
        result = operate(desiredOperation, parseFloat(screen.innerText), memorizedNumber)
        screen.innerText = (Math.round(result * 1000000000) / 1000000000).toString()
        totallyEvaluated = true
    } else {
        result = operate(desiredOperation, parseFloat(topScreen.innerText), parseFloat(screen.innerText))
        screen.innerText = (Math.round(result * 1000000000) / 1000000000).toString()
        topScreen.innerText = ``
        totallyEvaluated = true
    }
})

backButton.addEventListener('click', () => {
    if (screen.innerText.length > 1) {
        screen.innerText = screen.innerText.slice(0, -1)
    } else if (screen.innerText.length === 1) {
        screen.innerText = '0'
    }
})

document.onkeydown = function(e) {
    console.log(e)
    switch (e.key) {
        case '1':
            numberOne.click()
            break;
        case '2':
            numberTwo.click()
            break;
        case '3':
            numberThree.click()
            break;
        case '4':
            numberFour.click()
            break;
        case '5':
            numberFive.click()
            break;
        case '6':
            numberSix.click()
            break;
        case '7':
            numberSeven.click()
            break;
        case '8':
            numberEight.click()
            break;
        case '9':
            numberNine.click()
            break;
        case '0':
            numberZero.click()
            break;
        case '/':
            operationDivide.click()
            break;
        case '*':
            operationMultiply.click()
            break;
        case '+':
            operationAdd.click()
            break;
        case '-':
            operationSubtract.click()
            break;
        case 'Enter':
            equalsButton.click()
            break;
        case '=':
            equalsButton.click()
            break;
        case 'Backspace':
            backButton.click()
            break;
        case 'Delete':
            clearButton.click()
            break;
        case '.':
            decimalPoint.click()
            break;
    }

}