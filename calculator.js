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
const postfix = document.getElementById('postfix');

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

function calculatePrefix(prefix) {
    let stk = [];

    for(let reverse = prefix.length - 1; reverse >= 0; reverse--) {
        const operate = prefix[reverse];
        
    if  (containOperator(operate)) {
        const operant1 = stk.pop();
        const operant2 = stk.pop();

        const result = setOperator(operate, operant1, operant2);
        stk.push(result);
    }
    else {
        stk.push(operate);
    }
}
    return stk[0];
}

function calculatePostfix(postfix) {
    let stk = [];

    for(let i = 0; i < postfix.length; i++) {
        const operate = postfix[i];

        if (containOperator(operate)) {
            const operant1 = stk.pop();
            const operant2 = stk.pop();

            const result = setOperator(operate, operant1, operant2);
            stk.push(result);
        }
        else {
            stk.push(operate);
        }
    }
    return stk[0];
}

equal.addEventListener('click', calculatePrefix);