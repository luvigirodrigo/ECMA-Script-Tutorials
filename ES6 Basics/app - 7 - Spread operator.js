/*
    Spread operator

    This is kind of the opposite of the REST operator.

    It looks excatly the same but it is used in different places. Depending on the way it is used it becomes
    either Spread or REST operator 
*/

/*
let values = [5, 6, 7, 8, 9, 10];
console.log(...values);

5
6
7
8
9
10
*/

/* 
    Consider Math.max() function.

    It expects a list of arguments in order to return the maximum value.
        ex : Math.max(12,34,65,78,89,9,2,4,7,9);

    It does not expect an array. With Spread operator we can spread the array elements as 
    individual values just like above (Takes the array and splits it up into individual elements)

    Before in REST operator we had our own function with the arguments list and
    now we have it in a function call

    Spread operator parameter name should be the same as the variable ame of the array that we are passing
*/

let numbers = [1, 2, 3, 4, 5, 6, 7];
let maxNumber = Math.max(...numbers) // The same as Math.max(1,2,3,4,5,6,7)
console.log(maxNumber); // 7


/*
    REST vs Spread

    These look exactly the same with syntax and they differ by the place where we use them

    REST is used if we write our own function in the list of arguments that our function expects

    Spread is used in our code to basically split up an array into a list of individual values
*/