// Fat arrow functions

// Traditional function declarations
function sayHello() {
    console.log('hello world');
}

function displayTotal(num1, num2) {
    console.log(num1 + num2);
}

sayHello(); // hello world
displayTotal(20, 30); // 50

// ES6 arrow function style

sayHi = () => console.log('hi world');
calculateTotal = (num1, num2) => console.log(num1 + num2);

sayHi(); // hi world
calculateTotal(4, 6); // 10

// Patterns which can be used to declare arrow functions

showNumber = () => console.log('show number');

//Paranthesies are not required if we have only one argument
showOneNumber = number => console.log('show one number(' + number + ')');

showTwoNumbers = (number1, number2) => console.log('show two numbers(' + number1 + ',' + number2 + ')');

showCalculatedNumber = (number1, number2, number3) => number1 + number2 + number3;

getResult = () => {
    let a = 10;
    let b = 20;
    return a + b;
}

// return is not required here as this is one line statement without curly braces. if we use return keyword, then curly braces are mandatory
showMessage = () => 'This is the message';

// showMessage = () => return'This is the message'; // SyntaxError: Unexpected token return

showMessage3 = () => { return 'This is another message' }; // This is another message

showNumber(); // show number
showOneNumber(12); // show one number(12)
showTwoNumbers(14, 32); // show two numbers(14,32)
console.log(showCalculatedNumber(14, 32, 24)); // 70
console.log(getResult()); // 30
console.log(showMessage()); // This is the message
console.log(showMessage3()); // This is another message


// Usage examples

setTimeout(() => console.log('This is displayed after 1000ms delay'), 1000); // This is displayed after 1000ms delay
