// Undefined is a very special keyword in javascript, and it is not there in other languages. It has a lot to do with how javascript engine works.
// We know how javascript engine works, it parses the code, it creates the global execution context and also sets up memory space for variables and functions.

// Even before executing a single line of code, javascript engine will allocate memory for the variables and functions, variables will be set to UNDEFINED.

// Let us try this in browser,
// var x = 10;

// Lets put a debugger on line number 1, and reload the page.
// Even before this line is executed, javascript engine has already allocated memory for x and set it to undefined.
// Lets console the value of x, we'll get undefined.

// Why does it happen?
// Even before executing a single line of code, javascript engine will allocate memory for the variables and functions, variables will be set to UNDEFINED.
// It is like a placeholder which is present in memory, but it has no value yet.

// Undefined is taking memory, it is very different from not defined.
// lets do this,
// console.log(a);
// Here, we have not defined a variable, so no memory is allocated for it, so it is not defined.
// It is not defined, so it is not taking any memory.

// now, lets do this,
// console.log(x);
// var x = 10;

// console.log(a);
// If we run this, we'll get undefined for x, and error for a.

// now lets do this,
// console.log(x);
// var x = 10;

// console.log(x);
// if we run this, we'll get undefined for x first and then 10.

// Not defined is something which is not yet allocated with memory, undefined is something which is allocated memory but has no value yet.

// So we can say that undefined is a special value in javascript, which is assigned to a variable which is not been assigned any value yet.

// now lets do this,
// var x;
// console.log(x);

// if we run this, we'll get undefined.
// here, we have not assigned any value to x, so it is undefined, which gets the same from even before executing a single line of code to the end of program.

// Now lets do this,
// var x;
// console.log(x);
// if (x === undefined) {
// console.log("x is undefined");
// } else {
// console.log("x is not undefined");
// }
// Here we'll get "x is undefined", because no value is assigned to x.

// Now let is change the value of x,
// console.log(x);
// var x;
// x = 10;
// if (x === undefined) {
// console.log("a is undefined");
// } else {
// console.log("a is not undefined");
// }
// Here, we'll get "a is not undefined", because we have assigned a value to x.


// JAVASCRIPT IS A LOOSELY TYPED LANGUAGE
// It means that we do not have to specify the type of variable while declaring it.
// If I create a variable a and assign a string to it, and then assign a number to it, it will not throw any error.
// Javascript will automatically change the type of variable from string to number.
// This is not the case with other languages like C, C++, Java, etc.
// In other languages, we have to specify the type of variable while declaring it, and we cannot change the type of variable later.
// But in javascript, we do not have to specify the type of variable while declaring it, and we can change the type of variable later.
// This is because javascript is a loosely typed language.
// Javascript is a very flexible language, it is very forgiving, it will not throw any error if we change the type of variable later.

// let us try this,
// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "Hello";
// console.log(a);
// This is a perfect js code, 
// Until and unless we do not have any value in it a is undefined, then we assign a number to it, and then we assign a string to it which is perfectly fine in javascript.
// This is why javascript is a loosely typed language.
// Loosely typed languages are also known as weakly typed languages.
// It does not mean it is weak in any way, it is just a terminology.
// It does not have any deficiency or anything. It is not weak in at all.
// In fact I feel that, it is more stronger, because it is handling lots of things behind the scenes, You give it a string, it handles automatically that it is a string, you give it a number, it handles automatically that it is a number.

// WE SHOULD NEVER DO THIS MISTAKE.
// a = undefined;

// undefined is a special value in javascript, which is assigned to a variable which is not been assigned any value yet, it is totally possible to assign undefined to a variable, but we should never do this. It is a bad practice, because it is a special value in javascript, which is assigned to a variable which is not been assigned any value yet and so it is not a good idea to assign it manually. It already has a specific purpose in javascript, and we should not change it. It can lead to lot of inconsistencies in our code.