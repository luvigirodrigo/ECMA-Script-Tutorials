// A simple object literal example 
let person = {
    name: 'Maxwell',
    age: 29
}

console.log(person); // { name: 'Maxwell', age: 29 }

// -----------------------------------------------------------------------------------------

let make = 'Toyota';
let model = 'Allion';
let price = 4600000;

/*
    Here, object car, will take the values from surrounding variables.
    Even if we are not specifying values to be initialize the object with,
    it automatically looks for the variables declared before the object declaration 
    which matches the property names

    This is a quick way to initialize object properties if existing variables are there.
    Also these values can be overriden by setting object parameters implicitly (ex :  price : 5600000)
*/

let car = {
    make,
    model,
    price: 5600000,
}


console.log(car); // { make: 'Toyota', model: 'Allion', price: 5600000 }

// ------------------------------------------------------------------------------------------------

// We can include functions to objects as well (Just like methods in a java class)

let newCar = {
    make,
    model: 'Yaris',
    price: 3500000,
    // Better to not to use arrow functions here as in arrow functions, "this" always refer to global scope
    displayData() { console.log(this.make + ' - ' + this.model + ' is ' + this.price + 'LKR '); },
    'getPrice'() { console.log('Price is ' + this.price + ' LKR'); }
}

console.log(newCar)
/*
    { make: 'Toyota',
    model: 'Yaris',
    price: 3500000,
    displayData: [Function: displayData] }
*/

newCar.displayData(); // Toyota - Yaris is 3500000LKR
newCar['getPrice'](); // Price is 3500000 LKR

// ------------------------------------------------------------------------------------------------

// Dynamic fields

let engineCapacity = 1200;
let bikeName = 'Yamaha R1';
let color = 'red';
let country = 'Italy';
let countryField = 'country';

let bike = {
    'id': 1,
    bikeName,
    engineCapacity,
    color: 'black',
    // [countryField], // SyntaxError: Unexpected token ,
    //  For dynamic fields we must explicitly assign values. Cannot be kept like [countryField], even above there is a variable called country with value of Italy
    [countryField]: 'Japan',
    getData() { console.log(this.id + ' - This ' + this.color + ' ' + this.bikeName + ' bike made in ' + this.country + ', has an engine capacity of ' + engineCapacity + 'cc'); }
}

bike.getData(); // 1 - This black Yamaha R1 bike made in Japan, has an engine capacity of 1200cc

// Ways to access a dynamic field
console.log(bike['country']); // Japan
console.log(bike.country); // Japan
console.log(bike[countryField]); // Japan

console.log(bike.id); // 1
console.log(bike['id']); // 1

console.log(bike['engineCapacity']); // 1200