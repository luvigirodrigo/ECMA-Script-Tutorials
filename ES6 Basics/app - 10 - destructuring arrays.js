/* 
    Destructuring arrays

    Useful for destructuring a complex array into a simple one
*/

let numbers = [1, 2, 3];

// Traditional approach
let n1 = numbers[0];
let n2 = numbers[1];
let n3 = numbers[2];

console.log(`n1 is ${n1}, n2 is ${n2} and n3 is ${n3}`); // n1 is 1, n2 is 2 and n3 is 3

/* 
    New approach
    
    This is a more quick way to extract values of an array. 
    We are copying the values of an array to the variables defined based on their declared order

    If we try to pull out more values than an array contains , values which are out of the range will be 
    set as undefined (ex :  consider d variable below.  numbersArray has only 3 elements but d is in the 
    position 4 (numbersArray[3] so there is no relevant value for d. Therefore, it will be undefined) 

    Like wise we can pull as much as values we want, but all the values out of the array scope will be undefined
*/

let numbersArray = [4, 7, 5];

let [a, b, c, d] = numbersArray;
console.log(`a = ${a} and b = ${b}`); // a = 4 and b = 7

console.log(numbersArray); // [ 4, 7, 5 ]

// d is out of the array scope
console.log(`c = ${c} and d = ${d}`); // c = 5 and d = undefined

/*
    Using REST parameter when destructuring an array

    Below v3 is the rest parameter and all the remaining  elements except v1 and v2 
    are assigned as a new array to v3

    This is a quickway to retrieve a part of an array
*/

let valuesArray = [12, 32, 34, 54, 56, 67, 78];

let [v1, v2, ...v3] = valuesArray;

console.log(v1); // 12
console.log(v2); // 32
console.log(v3); // [ 34, 54, 56, 67, 78 ]

/*
    Default values when destructuring an array

    We can assign default values also when destructuring an array in case the corresponding array elements are
    not available
*/

let persons = ['Adolf', 'Gudolf', 'Budolf'];

let [p1 = 'Default Value', p2, p3, p4 = 'Default Name', p5 = 'Unknown Name'] = persons;

console.log(p1); // Adolf
console.log(p2); // Gudolf
console.log(p3); // Budolf
console.log(p4); // Default Name
console.log(p5); // Unknown Name

/*
    Swapping values with destructuring

    Destructuring can also be used to quickly swap the values as well
*/
let s1 = 1;
let s2 = 2;
console.log(`Before  = s1 is ${s1} adn s2 is ${s2}`); // Before  = s1 is 1 adn s2 is 2

// Should not use let keyword as s1 and s2 have already been defined
[s2, s1] = [s1, s2];
console.log(`After  = s1 is ${s1} adn s2 is ${s2}`); // After  = s1 is 2 adn s2 is 1


/*
    Skipping the values which are not required

    We can keep the destruccturing definitions empty to skip the values
*/

let superMarkets = ['Keels', 'Arpico', 'Cargills', 'Sathosa'];

let [sm1, , , sm4] = superMarkets; //  Arpico and Cargills are left out
console.log(sm1); // Keels
console.log(sm4); // Sathosa

/*
    Immidiately destructuring elements 

    Destructuring without explicit declartion of an array variable
*/

let [mov1, mov2, mov3] = ['Mission Impossible 3', 'Iron Man 2', 'Avengers'];
console.log(mov1); // Mission Impossible 3
console.log(mov2); // Iron Man 2
console.log(mov3); // Avengers