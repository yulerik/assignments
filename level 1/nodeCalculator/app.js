var readlineSync = require('readline-sync');

function add(num1, num2) {
    if (num1 === NaN || num2 === NaN) {
        return 'Input is not a number'
    } else {
        var sum = num1 + num2;
        return 'The result is: ' + sum
    }
}
function subtract(num1, num2) {
    if (num1 === NaN || num2 === NaN) {
        return 'Input is not a number'
    } else {
        var minus = num1 - num2;
        return 'The result is: ' + minus
    }
}
function multiply(num1, num2) {
    if (num1 === NaN || num2 === NaN) {
        return 'Input is not a number'
    } else {
        var times = num1 * num2;
        return 'The result is: ' + times
    }   
}
function divide(num1, num2) {
    if (num1 === NaN || num2 === NaN) {
        return 'Input is not a number'
    } else {
        var divided = num1 / num2;
        return 'The result is: ' + divided
    } 
}
var firstNumber = readlineSync.question('Please enter your first number: ');
var secondNumber = readlineSync.question('Please enter your second number: ');
var operation = readlineSync.question('Please enter the operation to perform: ');
console.log(Number(firstNumber));

if (operation === '+' || operation === 'addition' || operation === 'add' || operation === 'plus') {
    console.log(add(Number(firstNumber),Number(secondNumber)))
} else if (operation === '-' || operation === 'subtraction' || operation === 'subtract' || operation === 'minus') {
    console.log(subtract(Number(firstNumber), Number(secondNumber)))
} else if (operation === '*' || operation === 'multiplication' || operation === 'multiply' || operation === 'times') {
    console.log(multiply(Number(firstNumber), Number(secondNumber)))
} else if (operation === '/' || operation === 'division' || operation === 'divide') {
    console.log(divide(Number(firstNumber), Number(secondNumber)))
} else {
    console.log('INVALID INPUT');
    console.log('First Number Inputted: ', secondNumber);
    console.log('Second Number Inputted: ', secondNumber);
    console.log('Operation to be completed inputted: ', operation);
}
