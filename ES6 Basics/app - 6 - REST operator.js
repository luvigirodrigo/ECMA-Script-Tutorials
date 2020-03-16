let numbers = [1, 2, 3, 4, 5];

function sumUp(numbersArray) {
    let total = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        total += numbersArray[i];
    }
    return total;
}

console.log(sumUp(numbers)); // 15

// ----------------------------------------------------------------------------------------------------------

/*
    REST Operator/paramter

    When we do not know how many argumets/ parameter are to be passed in order
    to calculate sum in the beginning. Therefore,we can go for REST operator.
    REST parameter is defined with three leading dots

    REST parameter simply takes a list of arguments, and then just packs them together in an array. 
    Parameter types may be different (ex : calculateSum(2,3,true,"Test");)

    Each parameter is considered as a separate content even if we provide an array as one parameter
*/

calculateSum = (...toAdd) => {
    console.log(toAdd);
    let total = 0;
    for (let i = 0; i < toAdd.length; i++) {
        total += toAdd[i];
    }
    return total;
};

// There provided parameters are considered as an array 
console.log(calculateSum(4, 5, 6, 7, 8, 10, 10));
/*
    [ 4, 5, 6, 7, 8, 10, 10 ]
    50
*/

console.log(calculateSum(1, 2, 3, 4, false, 'my String'));
/*
    [ 1, 2, 3, 4, false, 'my String' ]
    10my String
*/

console.log(calculateSum(10, 6, 89, 7, false, 'your String', [22, 33, 44, 55]));
/*
    [ 10, 6, 89, 7, false, 'your String', [ 22, 33, 44, 55 ] ]
    112your String22,33,44,55
*/

// ----------------------------------------------------------------------------------------------------------

showInfo = (firstName, lastName, ...values) => {
    console.log('Hi ' + firstName + ' ' + lastName + '!. Your values are , ' + values);
    console.log(values);
}

showInfo('Roman', 'Regins', 12, 324, 'Test Value', false, 1200.99);
/*
    Roman Regins!. Your values are , 12,324,Test Value,false,1200.99
    [ 12, 324, 'Test Value', false, 1200.99 ]
*/