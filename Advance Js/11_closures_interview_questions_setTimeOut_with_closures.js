// function x() {
//     var i = 5;
//     setTimeout(function () {
//         console.log(i);
//     }, 2000);
// }
// x();
// What do you think will be the output of this code?
// It will print 5 after 2 seconds, because of 2 second delay in setTimeout.
// Nothing complicated here.
// NO!

// Many people thinks that setTimeout runs in line number 3, but lets see what it is!

// function x() {
//     var i = 5;
//     setTimeout(function () {
//         console.log(i);
//     }, 2000);
//     console.log("Hello World");
// }
// x();
// What do you think will be the output of this code?
// We already know that js executes one line of code at a time, so you can think that it will print 5 after 2 seconds and then Hello World.
// Well, if you think like this, you are absolutely wrong.
// Many people thinks that setTimeout will wait at line number 3 and then execute after 2 seconds, but it is not the case.
// Javascript does not wait for anyone.
// Just like we say, "Time and Tide waits for none", similarly, "Javascript waits for none". 😂

// What will be the output of this code?
// It will be hello world first and then 5 after 2 seconds.

// So what is happening here...?
// The function inside the setTimeout forms a closure. So this function remembers the reference to i variable.
// So wherever this function goes, it takes its reference of i along with it.

// What does this setTimeout do?
// It takes the function and puts it somewhere, attaches 2000 milliseconds timer to it and Javascript proceeds to the next line.
// Once the timer expires, it takes that function, puts it again to the call stack and executes it.
// This is how setTimeout works.
// We will study more about where this function is put until it is executed in upcoming chapters.

// This was a easy question.


// The next question is a lot more interesting.

// Suppose you are given a task to print 1,2,3,4,5 with a delay of 1 second between each number.
// How will you do it?
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello World");
// }
// x();

// What will it do?
// If you think it will work as expected, you are wrong.
// It will print 6 five times after 1 second.

// Let us see why it is happening like this.
// This is all happening because of closures.
// If you understand closures properly, you will understand why it is happening like this.
// So remember, what happens when a closure is formed?
// A closure is a function along with its lexical environment.
// So even when a function is taken out and put somewhere else, it still remembers its lexical environment. It can access its variable and its scope chain.

// So what is happening here?
// This setTimeout function is taking the function and putting it somewhere else but it still remembers the reference to i and not the value of i.
// So when the loop runs the first time, it makes the copy of this function, attaches the timer and puts it somewhere else and it also remembers the reference to i.
// All of them are pointing to the same reference of i because environment of all of the functions are same. They are referring to the same memory location.
// This was the first thing.

// The second thing is.. Remember, javascript does not wait for anyone.
// It will not wait for anything, it will just quickly store that function somewhere and move to the next line.
// When the timer expires, it will be too late. The loop will be finished by then and the value of i will be 6.
// And when the timer gets completed, setTimeout will take that function, put it in the call stack and execute it. But by then, the value of i will be 6.
// If we reverse engineer this, we can find that every setTimeout "i" is referring to the same "i" in the memory which has now become 6.

// How to fix this?
// A very quick fix is to use let instead of var.
// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello World");
// }
// x();
// As we know, let has a block scope. So every time the loop runs, it will create a new variable i and store it in the memory. Each time setTimeout will run, setTimeout function will always have a new copy of i in it. This function forms a closure with a new variable i every time it runs. That means every time setTimeout runs, it will have a new copy of i in it.


// Well now if you know the difference, how will you be able to do it with var?
// What will you do now?
// Here also closures will help us.
// As we already know, that it was not working with var because every time setTimeout runs, it is referring to the same i in the memory. So somehow we have to give new copy of i to every setTimeout function.
// We can form a closure and pass i to it.
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i);
//     }
//     console.log("Hello World");
// }
// x();

// Here every time setTimeout runs, it is referring to the new copy of i in the memory because of the closure formed by close function.
// Using this close function, we created a new copy of i and passed it to setTimeout function.