function isEqualTo(number, compare) {
    return number == compare;
}

console.log(isEqualTo(10, 10)); // true

/*
    Providing a default values

    If we are not passing a parameter value explicitly, then default value will be refered

    In below case if we are not passing compare parameter 
        ex : isEqual(10);
    Then automatically compare will be assigned and used as 0

    Also the order we are providing values is important
*/
function isEqual(number, compare = 0) {
    return number == compare;
}

console.log(isEqual(3)); // false
console.log(isEqual(0)); // true

/*
    Also if we are not specifying any parameter value, if the default values are set alreay, 
    then the default values will be refered
*/

checkEquality = (number = 10, compare = 10) => number == compare;
console.log(checkEquality()); // true

console.log(checkEquality(2, 3)); // false
console.log(checkEquality(12, 12)); // true

// ----------------------------------------------------------------------------------------------

checkValues = (number = 10, compare) => {
    console.log('number = ' + number);
    console.log('compare = ' + compare);
    console.log('number == compare is : ' + (number == compare));
};

checkValues(22);
/*
    number = 22
    compare = undefined
    number == compare is : false
*/
checkValues(12, 20);
/*
    number = 12
    compare = 20
    number == compare is : false
*/

checkValues(8, 8);
/*
    number = 8
    compare = 8
    number == compare is : true
*/

// ----------------------------------------------------------------------------------------------

check = (number = 10, compare = number) => {
    console.log(number == compare);
}

check(5); // true
check(2, 3); // false
check(6, 6); // true
check(); // true

// ----------------------------------------------------------------------------------------------

checkValues = (number, compare = 10 / 2) => {
    console.log(number == compare);
}

checkValues(5); // true
checkValues(2, 6); // false
checkValues(8, 8); // true

// ----------------------------------------------------------------------------------------------

let myValue = 20;
testValues = (number, compare = myValue) => {
    console.log(number == compare);
}

testValues(20); // true
testValues(12, 12); // true
testValues(15); // false
testValues(20, 7); // false

// ----------------------------------------------------------------------------------------------

/* 
    Here we are trying to use a vaiable (compare) before it is been set. We cannot 
    set equal comething which does not exist yet to another variable
*/
test = (number = compare, compare = 20) => {
    console.log(number == compare);
}

// test(); // ReferenceError: compare is not defined
