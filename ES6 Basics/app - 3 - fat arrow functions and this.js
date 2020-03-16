function func1() {
    console.log(this);
}
func1(); // Here, "this" refers to Object [global] / refers to global scope (window object if executed with a browser)

func2 = () => console.log(this);
func2(); // Here also, "this" refers to Object [global] / refers to global scope (window object if executed with a browser)

/*
    Considering following button click event binded with below HTML context
    .............................................................................................
    <!DOCTYPE html>
    <html>
        <body>
            <button id="btnTest">Test Button</button>
        </body>
    </html>
    .............................................................................................
*/

var button = document.querySelector('button');

/*
    Calling an ordinary function

    Here, in func2, "this" refers to the button elemet ("this" refers to what called func2 function)
    "this" refers to [object HTMLButtonElement] by which the function was called if we are calling an ordinary function

    So with ordinary functions, "this" will change to what it refers
*/
button.addEventListener('click', func1);

/* 
    Calling a fat arrow function

    But here with fat arrow functions, "this" always "this" refers to Object [global] / refers to global scope 
    (window object if executed with a browser)

    No matter how or where we call a fat arrow function, "this" will always refer to it's global scope
*/
button.addEventListener('click', func2); 
 
