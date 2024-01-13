// What are closures in javascript?
// Ans. Closures are one of the most powerful features of javascript. A function along with its reference to its outer environment together forms a closure.
// In other words, closure is a combination of its function and its lexical scope bundled together.

// Can you explain a little bit more about it?
// Each and every function in js has an access to its outer lexical environment like it has access to variables and functions present in outer scope.
// Even if this function is executed in some other scope, It still remembers its outer lexical environment where it was originally written.

// Can you give an example?
// function outer() {
//     var a = 10;
//     var inner = function () {
//         console.log(a);
//     };
//     return inner;
// }
// Suppose you have nested function inside outer called inner. In js, the inner function has access to its outer function variables and functions. So if I create a variable in outer function's environment called a and assign it a value of 10 and then create a function called inner which just logs the value of a. Now if I call outer function, it will return inner function. Now if I call inner function, it will log the value of a which is 10. This is because inner function has access to its outer lexical environment where it was originally written.
// here, inner function has formed a closure with its outer lexical environment (outer function).
// Even if I return inner function and call it in some other scope, it will still remember its outer lexical environment where it was originally written.
// If I want to run this code, I could just do outer()() and it will log 10 like this.
// function outer() {
//     var a = 10;
//     var inner = function () {
//         console.log(a);
//     };
//     return inner;
// }
// outer()();

// What did you just do while calling outer()()? Like what do you mean by outer()()? What are these two parentheses for?
// These parentheses are used to invoke the function. So when I do outer()(), it will invoke outer function and return inner function. Now this inner function is invoked again using the second parentheses. So it will log 10.
// If i want to modify this, i can do this
// function outer() {
//     var a = 10;
//     var inner = function () {
//         console.log(a);
//     };
//     return inner;
// }
// const close = outer();
// close();
// this works the same as outer()().

// If you move this var a = 10; just after inner function ends. Will it still form a closure? Like this
// function outer() {
//     var inner = function () {
//         console.log(a);
//     };
//     var a = 10;
//     return inner;
// }
// const close = outer();
// close();
// Yes, it will still form a closure. It will still remember its outer lexical environment where it was originally written.

// So if I change this var a = 10; to let a = 10; Will it make a difference? Considering that let is block scoped, What difference will it make? Like this:
// function outer() {
//     var inner = function () {
//         console.log(a);
//     };
//     let a = 10;
//     return inner;
// }
// const close = outer();
// close();
// This a variable do have a block scope here, we cannot access this let a = 10; outside this block. But it will still form a closure. It will still remember its outer lexical environment where it was originally written.

// In function outer() from line number 1, What if you pass an extra parameter in this outer(), what will happen? Suppose lets assume that this outer function takes a parameter called b? How will that work in this case? What will closure do in this case?
// Lets modify our code a little bit. Lets add a parameter called b in outer function and lets pass a value of "hello world" to it. Like this:
// function outer(b) {
//     var inner = function () {
//         console.log(a, b);
//     };
//     let a = 10;
//     return inner;
// }
// const close = outer("hello world");
// close();
// Yes it will still form a closure. It will still remember its outer lexical environment where it was originally written. It will still remember the value of b which is "hello world". It will still form a closure with its outer lexical environment (outer function).

// So what if your outer function is nested inside some other function? What will happen in that case? Will inner function has access to that function also? Is it the case?
// Yes it can still access that function also.

// Can you give an example?
// function outest() {
//     var c = 20;
//     function outer(b) {
//         var inner = function () {
//             console.log(a, b, c);
//         };
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// const close = outest()("hello world");
// close();
// Yes it will print 10, "hello world", 20. It will still form a closure with its outer lexical environment (outer function) and its outer lexical environment (outest function).

// What does this: const close = outest()("hello world"); line doing?
// When this outest is called, it will return outer function. Now this outer function is invoked again using the second parentheses. So it will print 10, "hello world", 20.

// What if we have a global variable with a conflicting name? Like let a = 100; is declared globally. What will happen in that case?
// function outest() {
//     var c = 20;
//     function outer(b) {
//         var inner = function () {
//             console.log(a, b, c);
//         };
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// const close = outest()("hello world");
// close();
// In this case, my inner function forms a closure with a. The a present in console.log(a, b, c); is the a present in inner function. So it will print 10, "hello world", 20. The a present in global won't matter here. But if we did not have this let a = 10; in outer function, then it will print 100, "hello world", 20. Because in that case, my inner function forms a closure with a. The a present in console.log(a, b, c); is the a present in global. So it will print 100, "hello world", 20.
// And if we remove the global a, this it will lead out to an error called as reference error. Because in that case, my inner function forms a closure with a. The a present in console.log(a, b, c); is the a present in global. But there is no a present in global. So it will lead out to an error called as reference error. It tries to access a variable in scope chain but it does not find it anywhere.

// Can you know tell me a few advantages of closures?
// Closures are very useful
// It is the most beautiful feature of javascript.
// It is used in many design patterns like module pattern, factory pattern, etc.
// It is used in function currying.
// They are also used in higher order functions like memoize, once, etc.
// It also helps us in data hiding and encapsulation.

// Can you tell me more about data hiding and encapsulation?
// Suppose we have a variable, We want to have some data privacy, Like other functions cannot access that variable. So we can use closures to achieve that.
// We can encapsulate the variable so that it cannot be accessed outside the function.

// Can you tell me an example of it?
// Suppose we have a variable called counter. We want to have some data privacy, Like other functions cannot access that variable. So we can use closures to achieve that.
// var counter = 0;
// function incrementCounter() {
//     counter++;
// }
// Suppose we want to increment this counter variable. We can do this by calling incrementCounter function. But the problem is that this counter variable is accessible outside this function. We want that it should not be accessible outside this function.
// Here comes data hiding and encapsulation. We can encapsulate this counter variable inside this function. So that it cannot be accessed outside this function.
// It can be achieved by:
// function counter() {
//     var count = 0;
//     function incrementCounter() {
//         count++;
//     }
//     return incrementCounter;
// }
// Here, we have a variable called count. It is not accessible outside this function. It is only accessible inside this function. So we have achieved data hiding and encapsulation.
// function counter() {
//     var count = 0;
//     function incrementCounter() {
//         count++;
//         console.log(count);
//     }
//     return incrementCounter;
// }

// var counter1 = counter();
// counter1();
// Now we can say that we have achieved data hiding and encapsulation. We have encapsulated this count variable inside this function. So that it cannot be accessed outside this function. It is only accessible inside this function.

// If we call this counter function again, like, if you do var counter2 = counter(); What will happen in that case?
// Yes, this is one more advantage of closures. It will create a fresh counter. It will not affect the previous counter. It will create a fresh counter for you. It will not touch the previous counter, it will again create a closure, It will start from 0 again. So it will print 1.
// function counter() {
//     var count = 0;
//     function incrementCounter() {
//         count++;
//         console.log(count);
//     }
//     return incrementCounter;
// }

// var counter1 = counter();
// counter1();

// var counter2 = counter();
// counter2();

// Is it a good way to create a counter? Is your code scalable? If you want to create a decrement counter also, how will you add that?
// It is actually not a good way, what we can do in that case is, we can use a constructor function and then we can have separate functions for increment and decrement

// Can you please show me in the code?
// function Counter() {
//     var count = 0;
//     this.incrementCounter = function () {
//         count++;
//         console.log(count);
//     }
//     this.decrementCount = function () {
//         count--;
//         console.log(count);
//     }
// }
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCount();
// counter1.decrementCount();
// var counter2 = new Counter();
// counter2.incrementCounter();
// counter2.incrementCounter();
// counter2.decrementCount();

// Can you tell me disadvantages of closures?
// Closures can lead to performance issues.
// Closures can lead to security issues.
// As variables are not garbage collected, it can lead to memory leaks.

// What is a garbage collector?
// It is a program in the browser or in the javascript engine which is responsible for memory management. It is responsible for allocating memory to variables and deallocating memory from variables. It frees up the memory which is not used by any variable. As js is a high level language, we do not have to worry about memory management. It is taken care by the garbage collector.
// In languages like c, c++, we have to manually allocate memory to variables and deallocate memory from variables. We have to manually free up the memory which is not used by any variable. But in js, we do not have to worry about memory management. It is taken care by the garbage collector.

// how are closures related to garbage collector?
// Let me show you an example:
// function a() {
//     var x = 0;
//     return function b() {
//         console.log(x);
//     }
// }
// a()();
// When this program is run, it will create a closure.
// When the function a is run, it will create a variable called x and assign it a value of 0. Now it will return a function called b. Now this function b is invoked. So it will print 0.
// When this function b is invoked, it will create a closure. It will remember its outer lexical environment where it was originally written. It will remember the value of x which is 0. It will remember the function a.
// function a() {
//     var x = 0;
//     return function b() {
//         console.log(x);
//     }
// }
// let c = a();
// Now this c is a copy b function, b has a closure with x memory. It remembers the value of x.
// now if we do let d = a(); and much more, the memory will keep on increasing. As it is inside of a closure, it will not be garbage collected. It will not be freed up. It will keep on increasing. It may lead out to memory leaks.
// But nowadays, smart garbage collectors are used. They are smart enough to know that this variable is not used anywhere. So they will free up the memory. They will free up the memory which is not used by any variable. So it will not lead out to memory leaks.

// Can you tell about smart garbage collectors?
// lets take an example:
// function a() {
//     var x = 0, z = 10;
//     return function b() {
//         console.log(x);
//     }
// }
// let c = a();
// here z is not being used, so it is garbage collected. It is freed up.
// Though it is inside of a closure, it is not being used anywhere. So it is garbage collected. It is freed up.
// So it will not lead out to memory leaks.
// We can even see it in source tab of chrome dev tools. We can see that z is not being used anywhere. So it won't be seeing us in memory tab.
// Even in the console, if we do console.log(x); it will print 0. But if we do console.log(z); it will lead out to an error called as reference error. It will say that z is not defined. It is because z is not being used anywhere. So it is garbage collected. It is freed up.