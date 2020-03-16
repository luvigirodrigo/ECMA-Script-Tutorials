/* 
    let

    let allows us to use block scoping and does not get hoisted.
    let us scoped to the nearest block and cannot be accessed from outside 
    the nearest block. Which means hoisting is not applicable for let.

    It is mandatory to declare the variable (with let) before used
    COUNT=23;
    let COUNT; // ReferenceError: COUNT is not defined
*/
displayMessage = (message = 'Default message') => {
    let prefix = 'displayMessage() function :'
    console.log(prefix + ' ' + message);
}

displayMessage('Hello world by ES6');

// console.log(prefix); // ReferenceError: prefix is not defined

/* 
    Valid approach
    Here we have included the price variable and assiged 399.99 in the function before it is declared with let.
    Then the value is declared with let keyword.

    This is valid because, we have called the function which contains the value price,
    AFTER THE DECLATATION with let 

    vairables declated with let must be decalred before used
*/

generatePrice = () => {
    price = 399.99;
}

// console.log(price); // ReferenceError: price is not defined
let price;
generatePrice();
console.log(price); // 399.99

/* 
    const

    Once a reference/pointer is assigned to a constant declared with the keyword "const",
    then it cannot be reassigned to another pointer/object reference.
    Hoisting is not applicable for const as well. const scope definition is the same as let

    It is mandatory to both declare and initialize the variable with const before used
    COUNT=23;
    const COUNT; // SyntaxError: Missing initializer in const declaration
*/

const NAME = 'John Doe';
console.log(NAME);

// NAME='Morrison'; // TypeError: Assignment to constant variable.

/*
    Here the constant AGES holds a pointer to the assigned array but not to the values of the array
    Here we are not pointing to a new pointer, object reference . We are just changing the values 
    to which the pointer points 
*/
const AGES = [23, 23, 25, 26, 12, 56];
console.log(AGES); // [ 23, 23, 25, 26, 12, 56 ]
AGES.push(43);
console.log(AGES); // [ 23, 23, 25, 26, 12, 56, 43 ]

// AGES=[22,33,44,55,66,77,88]; // TypeError: Assignment to constant variable.

/* 
    Here also we are not changing the object reference but the values of the object properties.
    first the constatnt OBJECT is assigned and then, only the value of age property is changed 
*/
const OBJECT = {
    age: 20
}
console.log(OBJECT); // { age: 20 }
OBJECT.age = 36;
console.log(OBJECT); // { age: 36 }

// OBJECT = { name: 'Martin' } // TypeError: Assignment to constant variable.

printData = () => {
    const POSTFIX = 'The end';
    console.log('printing data... ' + POSTFIX);
}

printData(); // printing data... The end

// console.log(POSTFIX); // ReferenceError: POSTFIX is not defined

/*
    var

    A value can be first assigned to a variable before initialized with var
    Variables, arrays, objects defined with var are getting hoisted
*/

myNumber = 333;
console.log(myNumber); // 333

getData = () => {
    myNumber = 34;
    console.log('getData() - ' + myNumber);
}

getData(); // getData() - 34
console.log(myNumber); //34
var myNumber = 777;
console.log(myNumber); // 777

