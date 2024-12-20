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

const toggle_mode = document.getElementById('toggle');

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
        throw new Error('Invalid Operater')
    }
}

function containOperator(operation) {
    if (operation.includes('+') || operation.includes('-') || operation.includes('*') || operation.includes('/') || operation.includes('%') || operation.includes('^')) {
        return true;
    }
    return false;
}

function calculatePrefix(prefix_expression) {
    let operatorStack = [];
    for (let prefix = prefix_expression.length - 1; prefix >= 0; prefix--) {
        if (!containOperator(prefix_expression[prefix])) {
            operatorStack.push(Number(prefix_expression[prefix]));
        } else {
            let operand1 = Number(operatorStack.pop());
            let operand2 = Number(operatorStack.pop());
            let result = setOperator(prefix_expression[prefix], operand1, operand2);
            operatorStack.push(result);
            console.log(operatorStack);
        }
    }
    return operatorStack.pop();
}


function calculatePostfix(postfix_expression) {
    let operandStack = [];
    for (let postfix = 0; postfix < postfix_expression.length; postfix++) {
        if (!containOperator(postfix_expression[postfix])) {
            operandStack.push(postfix_expression[postfix]);
        } else {
            let operand1 = Number(operandStack.pop());
            let operand2 = Number(operandStack.pop());
            let result = setOperator(postfix_expression[postfix], operand1, operand2);
            operandStack.push(result);
        }
    }
    return operandStack.pop();
}

equal.addEventListener('click', () => {
    if(!isNaN(screen.value[0]))
        postfix.innerHTML = calculatePostfix(screen.value);
    else if(containOperator(screen.value[0]))
        prefix.innerHTML = calculatePrefix(screen.value);   
});

toggle_mode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const modeButton = document.getElementById('toggle');
    modeButton.classList.toggle('dark');
})