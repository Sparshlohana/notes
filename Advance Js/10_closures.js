// Let us start with the most basic example of closure.
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();
// As you have learned lexical scope, you already know what will be output of this.
// According to lexical scope, when y() tries to run, it will try to find a inside y's scope. In this case, the value of y is not present in y's scope, so it will go to the outer scope, which is x's scope. In x's scope, it will find a and print it.
// So the output will be 7.

// SO LET ME TELL YOU, THIS IS WHAT CLOSURE IS.

// let us put a debugger inside y()'s console.log and reload the page and see what happens.
// You can see a is present in the closure of y. There is a separate area in memory called closure, which stores all the variables that are present in the outer scope of the function. So when y() tries to run, it will first try to find a in its own scope, if it is not present, it will go to the closure and find a there.

// So we can say that, closure is a function that binds together the lexical environment and the function in which the variable is defined.
// Function along with is lexical scope forms a closure.

// According to MDN, A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.
// This is what closure is.

// Let me tell you one thing, FUNCTIONS ARE LIKE HEART OF JAVASCRIPT. FUNCTIONS ARE VERY BEAUTIFUL IN JAVASCRIPT

// Let us understand closure with another example.
// Let us grab the function y() and assign it to var a.
// function x() {
//     var a = function y() {
//         console.log(a);
//     };
//     a();
// }
// x();
// This is called function expression. We are assigning a function to a variable.

// We can even pass a function as an parameter to another function.
// Example:
// function x() {
//     var a = 7;
// }
// x(function y() {
//     console.log(a);
// });
// This is a valid code in javascript. We are passing a function as an argument to another function.
// But in other programming languages, this will surely throw an error.

// Similarly, we can return a function from another function.
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// x();
// Guess the output of this code.
// Things get little complicated here in case of closures.
// When you say return y, what it is actually returning?
// So when the execution starts, y() will come in place of x().

// Let us see the output of this.

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// We can see that z is a function. So when we say return y, it is actually returning a function.
// So when we say var z = x(), it will return a function and assign it to z.
// So z is a function, which is nothing but y.
// So when we say console.log(z), it will print the function y.

// After running line var z = x(); 'x' is gone and 'y' has come in place of 'x'. X is not present in the memory anymore. Its no longer in the call stack.
// So now z contains the function y.
// Here things get more complicated

// As y has left his own lexical scope, and it is in some other scope, how will it behave?
// We can literally use y outside its scope.

// So what happens when we say z()?
// As y is actually outside its scope, and there is no x in the memory, how and where will it find a?

// Here comes the concept of closure.
// When we return a function, it still remembers its lexical scope, and it will try to find a in its lexical scope, if it is not present, it will go to the closure and find a there.
// Functions actually remembers where they were actually present

// Though, x is not present in the memory, y still remembers its lexical scope from where it came from. So, y will try to find a in its lexical scope, if it is not present, it will go to the closure and find a there.

// When you return a function, Not only the function is returned, but also the closure is returned.
// The function along with its lexical scope was returned.

// So when you execute z somewhere else in your program, it still remembers its lexical scope and it will try to find a in its lexical scope, if it is not present, it will go to the closure and find a there.
// And hence, the output will be 7.
// This is what closure is.

// This is a small thing that many senior developers don't understand.
// This is most important interview question in javascript.

// Now let us directly return the function y.
// function x() {
//     var a = 7;
//     return function y() {
//         console.log(a);
//     }
// }
// var z = x();
// console.log(z);
// z();
// Does this code work? Does it change anything?
// It does not change anything. It will still print 7.
// It is still returning a function along with its lexical scope.

// Let us understand some complex examples of closure.
// function x() {
//     var a = 7;
//     return function y() {
//         console.log(a);
//     }
//     a = 100;
// }
// var z = x();
// console.log(z);
// z();
// What do you think will be the output of this code?

// If you think it will print 100, you are wrong.
// It will still print 7.


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();
// Will this code print 100?
// Yes in this case it will print 100.
// Because, when we say return y, it will return the function y along with its lexical scope.
// This is because, the function y references towards a, it does not point to value of a, but it references towards a.
// So when we say return y, it will return the function y along with its lexical scope reference towards a.
// Hence, when we say z(), it will print 100.

// Let us see another example.
// function z() {
//     var b = 10;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();
// What will the output of this code?
// It will print 7, 10.

// Let us go to browser and see whats happening.
// Let us put a debugger in y() and see what happens.
// You can see, closure is present in y().
// That means y() forms the closure along with the scope of x() and scope of z().
// This it what closure is.
// Even if I have returned it, it will still form the closure.

// Uses of closure:
// 1. Module design pattern
// 2. Currying
// 3. Function like once
// 4. memoize
// 5. maintaining state in async world
// 6. setTimeouts
// 7. Iterators
// 8. and many more...
