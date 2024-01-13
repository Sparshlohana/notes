// One of the most important part of js is functional programming.
// Functional programming is not possible without higher order functions.
// Functional programming is huge, but we will touch small part of it.

// Higher order functions
// A function which takes another function as an argument or returns a function as a result is called a higher order function.
// function x() {
//     console.log('x');
// }
// function y(x) {
//     x()
// };
// y(x);
// Here y is a higher order function because it takes x as an argument.

// What is x then?
// x is a callback function.
// A callback function is a function which is passed as an argument to another function.

// Let us see another example.
// const radius = [3, 1, 2, 4];
// Now we have to calculate the area of each circle.

// Traditional way
// const area = function (radius) {
//     const output = [];
//     for (let i in radius) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     console.log(output);
// }
// area(radius);

// This code is fine but as thr code grows, it will be difficult to maintain.
// This time it is calculating the area of circle, but what if we have to calculate the circumference of circle?
// We would have to create another function.
// const circumference = function (radius) {
//     const output = [];
//     for (let i in radius) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     console.log(output);
// };
// circumference(radius);
// This is how generally we write code.

// And to complicate things little more, what if we have to calculate the diameter of circle?
// const diameter = function (radius) {
//     const output = [];
//     for (let i in radius) {
//         output.push(2 * radius[i]);
//     }
//     console.log(output);
// }
// diameter(radius);

// This is not a good way to write code.
// Can you see a problem here?

// We are repeating the same code again and again. You don't have to repeat the same code again and again.

// Let us see how we can solve this problem using higher order functions.
// const area = function (radius) {
//     return Math.PI * radius * radius;
// }
// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// }
// const diameter = function (radius) {
//     return 2 * radius;
// }
// const calculate = function (radius, logic) {
//     const output = [];
//     for (let i in radius) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// console.log(calculate([3, 1, 2, 4], area));
// console.log(calculate([3, 1, 2, 4], circumference));
// console.log(calculate([3, 1, 2, 4], diameter));

// Here calculate is a higher order function because it takes another function as an parameter.
// We removed the repeated code and made it more readable.
// This is how we can use higher order functions to make our code more readable and maintainable.

// This is the power of higher order functions.
// This is the beauty of functional programming.

// Though functional programming is huge, there are things to keep in mind like reusability, readability, modularity, etc, just like our calculate example.

// Functional programming is huge, but small part of it says that, you should think/ make logic in your head according to the function.
// So whenever you are in an interview, you should always consider the next approach.
// We can see that we have extracted our function into chunks, which is a good practice.
// Every function is doing his own job now and none of the thing is repeated.

// Now let me tell you something interesting.
// This calculate function
// const calculate = function (radius, logic) {
//     const output = [];
//     for (let i in radius) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// is exactly same as map function.
// So people who are doing js in a while or who knows react will be familiar with map function.
// Map is a very common higher order function.
// How it works here?
// console.log(radius.map(area));
// This map function maps the whole array and applies the logic to each element of the array.
// This logic is what we pass.
// console.log(radius.map(area)); is same as our calculate function.
// So we can say that we kind of wrote our implementation of map function.
// This is known as polyfill.
// One map is provided by js and we wrote another map function.
// This is how polyfill works.

// We can rename our calculate function to look some generic
// const calculate = function (array, logic) {
//     const output = [];
//     for (let i in array) {
//         output.push(logic(array[i]));
//     }
//     return output;
// }
// In a nutshell, It will do little more close to map but for now it is fine.

// So we can say that, Map function also creates a new array with the results of calling a provided function on every element in the calling array.

// What if the difference between our map function and js map function?
// You can say that we are calling js map function as radius.map(area) and our map does not call it like this, it is taking radius as an argument.
// Lets try to make our map function exact same as js map function.
// What can we do to exactly call our function as map function? like it has a dot operator.
// For achieving this, we have to use prototype.
// Array.prototype.calculate = function (array, logic) {
//     const output = [];
//     for (let i in array) {
//         output.push(logic(array[i]));
//     }
//     return output;
// }
// now this function calculate is available to all the arrays.
// When we put a function in prototype, it is available to all the arrays.
// So just like map function, we can call our calculate function as radius.calculate(radius, area);

// Lets make it more similar to map function.
// Array.prototype.calculate = function (logic) {
//     const output = [];
//     for (let i in this) {
//         output.push(logic(this[i]));
//     }
//     return output;
// }
// Here, this points to the array.
// Now we can call our calculate function as radius.calculate(area);

// Now we can say that our map and js map are exactly same.