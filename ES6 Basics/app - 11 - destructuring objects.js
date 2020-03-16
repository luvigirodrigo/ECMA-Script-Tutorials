/* 
    Destructuring objects

    We should use curly braces for destructuring declaration of objects 
    but not square brackets just like in array destructuring

    We identify and map the properties by the name when destructuring

    Destructured property names and object property names must match

    We can specify a different name for the required destructured property with 'alias' mechanism
*/

let obj = {
    name: 'Roman',
    age: 32,
    greet: function () {
        console.log(`Hi there! welcome`);
    }
}

// Pulling out name and age variable values of obj and storing in explicit variables - name and age
let { name, age, greet } = obj;
console.log(name, age); // Roman 32
greet(); // Hi there! welcome

/* 
    With object it is not possible to skip values like in arrays
    Because we are not having order properties here. Order does not matter

    In order to destructure, we are identifying the properties with the name
    Because we are already referencing object properties by name 

    // Cannot skip
    let { name, , greet } = obj; // SyntaxError: Unexpected token , 

    // Cannot use different names other than the object property name
    let { name, age, greetFunc } = obj;
    greetFunc(); // TypeError: greetFunc is not a function
*/

let car = {
    id: 1,
    make: 'Toyota',
    model: 'Corolla_121',
    start: () => { console.log('Engine started .... !') }
};

let { model, start } = car;

console.log(model); // Corolla_121
start(); // Engine started .... ! 

/*
    IMPORTANT
    Using alias mechanism to specify different property reference names for destructured properties
*/

let person = {
    pid: '931628339v',
    firstName: 'Goldberg',
    address: 'New York',
    speak: function () { console.log('Person is speaking ! '); }
};

let { pid: NIC, firstName, address = city, speak: talk } = person;

console.log(NIC); // 931628339v
console.log(firstName); // Goldberg
talk(); // Person is speaking !

// Once alias is defined, original property name does not work
// speak(); // ReferenceError: speak is not defined



