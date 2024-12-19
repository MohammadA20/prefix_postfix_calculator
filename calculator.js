const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const del = document.querySelector('.delete');
const clear = document.querySelector('.clear');

const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const multiply = document.querySelector('.multiply');
const division = document.querySelector('.division');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

const zero = document.querySelector('.zero');
const point = document.querySelector('.dot');
const percent = document.querySelector('.percent');
const power = document.querySelector('.power');
const equal = document.querySelector('.result');

const screen = document.getElementById(`screen`);
const screen2 = document.getElementById(`screen2`);
const postfix = document.getElementById('postfix');
const prefix = document.getElementById('prefix');

seven.addEventListener('click', () => {
    screen.value += '7';
});
eight.addEventListener('click', () => {
    screen.value += '8';
});
nine.addEventListener('click', () => {
    screen.value += '9';
});
del.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1);
});
clear.addEventListener('click', () => {
    screen.value = '';
});

four.addEventListener('click', () => {
    screen.value += '4';
});
five.addEventListener('click', () => {
    screen.value += '5';
});
six.addEventListener('click', () => {
    screen.value += '6';
});
multiply.addEventListener('click', () => {
    screen.value += '*';
});
division.addEventListener('click', () => {
    screen.value += '/';
});

one.addEventListener('click', () => {    
    screen.value += '1';
});
two.addEventListener('click', () => {
    screen.value += '2';
});
three.addEventListener('click', () => {
    screen.value += '3';
});
plus.addEventListener('click', () => {
    screen.value += '+';
});
minus.addEventListener('click', () => {
    screen.value += '-';
}); 

zero.addEventListener('click', () => {
    screen.value += '0';
});
point.addEventListener('click', () => {
    screen.value += '.';
});
percent.addEventListener('click', () => {
    screen.value += '%';
});
power.addEventListener('click', () => {
    screen.value += '^';
});
equal.addEventListener('click', () => {
    screen.value = eval(screen.value);
});

seven.addEventListener('click', () => {
    screen2.value += '7';
});
eight.addEventListener('click', () => {
    screen2.value += '8';
});
nine.addEventListener('click', () => {
    screen2.value += '9';
});
del.addEventListener('click', () => {
    screen2.value = screen2.value.slice(0, -1);
});
clear.addEventListener('click', () => {
    screen2.value = '';
});

four.addEventListener('click', () => {
    screen2.value += '4';
});
five.addEventListener('click', () => {
    screen2.value += '5';
});
six.addEventListener('click', () => {
    screen2.value += '6';
});
multiply.addEventListener('click', () => {
    screen2.value += '*';
});
division.addEventListener('click', () => {
    screen2.value += '/';
});

one.addEventListener('click', () => {    
    screen2.value += '1';
});
two.addEventListener('click', () => {
    screen2.value += '2';
});
three.addEventListener('click', () => {
    screen2.value += '3';
});
plus.addEventListener('click', () => {
    screen2.value += '+';
});
minus.addEventListener('click', () => {
    screen2.value += '-';
}); 

zero.addEventListener('click', () => {
    screen2.value += '0';
});
point.addEventListener('click', () => {
    screen2.value += '.';
});
percent.addEventListener('click', () => {
    screen2.value += '%';
});
power.addEventListener('click', () => {
    screen2.value += '^';
});
equal.addEventListener('click', () => {
    screen2.value = eval(screen2.value);
});

function setOperator(operator, operand1, operand2) {
    if  (operator === '+') {
        return operand1 + operand2;
    } else if (operator === '-') {
        return operand1 - operand2;
    } else if (operator === '*') {
        return operand1 * operand2;
    } else if (operator === '/') {
        return operand1 / operand2;
    }
    else if (operator === '%') {
        return operand1 % operand2;
    }
    else if (operator === '^') {
        return operand1 ** operand2;
    }
    else {
        Promise.reject('Invalid operator');
    }
}

function containOperator(operation) {
    if (operation.includes('+') || operation.includes('-') || operation.includes('*') || operation.includes('/') || operation.includes('%') || operation.includes('^')) {
        return true;
    }
    return false;
}

function calculatePrefix(prefix_expression) {
    
}

function calculatePostfix(postfix_expression) {
    let operandStack = [];
    for (let postfix = 0; postfix < postfix_expression.length - 1; postfix++) {
        if (!containOperator(postfix_expression[postfix])) {
            operandStack.push(postfix_expression[postfix]);
        } else {
            let operand1 = operandStack.pop();
            let operand2 = operandStack.pop();
            let result = setOperator(postfix_expression[postfix], operand1, operand2);
            operandStack.push(result);
        }
    }
    return operandStack.pop();
}

equal.addEventListener('click', () => {
    postfix.innerHTML = calculatePostfix(screen.value);
});