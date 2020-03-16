/* 
    Template literals 

    These are basically Strings with extra features. 
    Template literals can be defined inside backticks ( ` ` ) not single quotations.
    So we can write multiline Strings

    With that we can use variables inside template literals within ${ } also.
    It is usedful for reducing multiple concatinations with + sign in a traditional String

    Within ${ }, concatination is possible with +' ' or +" " also
*/

let name = 'Mark';
let description = `
    This is a description about ${name}.
    This is the name of ${name + ' Anthony !!!'}
    this was obtained from \${name}
`;

console.log(description);

/*

    This is a description about Mark.
    This is the name of Mark Anthony !!!
    this was obtained from ${name}

*/


