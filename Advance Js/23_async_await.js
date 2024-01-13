// This is the most awaited topic and most important topic of this advanced javascript course.
// This is the thing which you will use in your day to day life.
// If you are a javascript developer, then you will use this thing a lot.
// This is called async await.

// So what is async await?
// But first lets change the question.
// What is async?
// Async is a keyword which is used to make a function asynchronous.
// It is a keyword used before the function to make it asynchronous.

// Let us see an example.
// This will let you know why async functions are different from normal functions.
// async function getData() {
// return "data";
// }

// Now this function is asynchronous and WILL ALWAYS RETURN A PROMISE.
// Here there can be two cases.
// Either you will return a promise from this function or you will return any other value like string, number, object, array, etc (non promise value).
// If you return a non promise value from this function, then javascript will automatically wrap it inside a promise and return it.

// let us call this function.
// const dataPromise = getData();
// What will we get in data?
// Can you guess?
// Yes, we will get a promise.
// We can just check it by logging it to the console.
// console.log(dataPromise);
// We can see in the output that we got a promise which was fulfilled with the value "data".

// How will we get the value "data" from this promise?
// As we have already studied, we can use then() method to get the value from the promise.
// dataPromise.then((data) => {
// console.log(data);
// });
// We can see in the output that we got the value "data" from the promise.

// Now let us return a promise from this function.
// const pr = new Promise((resolve, reject) => {
//     resolve("Promise resolved");
// });

// async function getData() {
//     return pr;
// }
// Now what will we get in data?
// Can you guess?
// Yes, we will get a promise.
// We can just check it by logging it to the console.
// const dataPromise = getData();
// console.log(dataPromise);
// We can see in the output that we got a promise which was fulfilled with the value "Promise resolved".

// How will we get the value "Promise resolved" from this promise?
// dataPromise.then((data) => {
//     console.log(data);
// });

// Let us now understand await.
// Let us use async and await together.
// Their combination is used to handle promises.

// But first lets see how do we use promises before async await.

// const pr = new Promise((resolve, reject) => {
//     resolve("Promise resolved");
// });

// function getData() {
//     pr.then((data) => {
//         console.log(data);
//     });
// }

// getData();
// Here our promise is resolved and we got the value "Promise resolved" in the console.

// now let me tell you how do we handle promises using async await.
// async function handlePromise() {
//     const data = await pr;
//     console.log(data);
// }
// Here we are using await keyword to handle the promise.
// We will use the keyword await in front of the promise.
// Now we can call this function.
// handlePromise();
// Here our promise is resolved and we got the value "Promise resolved" in the console.

// Please note that await will only used inside an async function. If you use await outside an async function, then you will get an error.

// Let us now see the difference between async await and promises.
// For now our promise is resolving very fast, let us modify it a little bit.
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 5000);
// });

// Let me play with your brain now.

// function getData() {
//     pr.then((data) => {
//         console.log(data);
//     });
//     console.log("Hello");
// }

// getData();
// What will be the output of this function?
// Will it be Hello, Promise resolved or Promise resolved, Hello?
// It will first print Hello and then 5 seconds later it will print Promise resolved. If you guessed it right, you know how event loop works.

// Javascript does not wait for anyone so our log is printed and then after 5 seconds our promise is resolved and we get the value "Promise resolved" in the console.

// Lets go back to async await.
// lets use the same promise in async await.

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 5000);
// });

// async function handlePromise() {
//     const data = await pr;
//     console.log("Hello");
//     console.log(data);
// }

// handlePromise();

// What do you think will be the output of this function?
// What will it print?
// Guess it.
// Nothing will be printed for 5 seconds and then after 5 seconds it will print Hello and then Promise resolved.
// Do you think js waited for 5 seconds?
// Idk, lets see.

// Let us modify the code a little bit.
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 5000);
// });

// async function handlePromise() {
//     const data = await pr;
//     console.log(data);
//     console.log("Hello");
// }

// handlePromise();
// What do you think will be the output of this function?
// What will it print?
// If you are saying, hello Promise resolved, then you are wrong.
// Here, JAVASCRIPT WAITS FOR 5 SECONDS and first prints Promise resolved and then prints Hello immediately.
// What happened to "Javascript does not wait for anyone"?
// It is still true, but here we are using await keyword which makes javascript wait for the promise to resolve.
// So here javascript waits for the promise to resolve and then prints the value "Promise resolved" and then prints Hello.
// This is the power of async await.

// Let us modify the code a little bit.
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 5000);
// });

// async function handlePromise() {
//     console.log("I am waiting");
//     const data = await pr;
//     console.log(data);
//     console.log("Hello");
// }

// handlePromise();
// What will be the output of this function?
// This will immediately print I am waiting and then after 5 seconds it will print Promise resolved and then Hello.
// This is because we have used await keyword in front of the promise.

// Let us resolve this promise two times.
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 5000);
// });

// async function handlePromise() {
//     console.log("I am waiting");
//     const data = await pr;
//     console.log(data);
//     console.log("Hello");

//     const data2 = await pr;
//     console.log("Hello again");
//     console.log(data2);
// }

// handlePromise();
// How will this whole thing work?
// First it wil print I am waiting and then 5 seconds later it will print Promise resolved and then Hello, and then hello again and then Promise resolved.
// It wont go like, it won't first wait for 5 seconds and then print Promise resolved and then Hello and then wait for 5 seconds and then print Hello again and then Promise resolved.
// It will only wait for first 5 seconds and then print Promise resolved and then Hello and then Hello again and then Promise resolved.

// Let us create 2 promises.
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 10000);
// });

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved");
//     }, 5000);
// });

// async function handlePromise() {
//     console.log("I am waiting");
//     const data = await pr;
//     console.log(data);
//     console.log("Hello");

//     const data2 = await pr2;
//     console.log("Hello again");
//     console.log(data2);
// }

// handlePromise();
// What do you think will be the output of this function?
// Here it will first wait for 10 seconds and then print Promise resolved and then Hello and then directly print Promise 2 resolved and then Hello again.
// It won't wait for more 5 seconds to print Promise 2 resolved.

// Let us change the time of the promises.

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 5000);
// });

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved");
//     }, 10000);
// });

// async function handlePromise() {
//     console.log("I am waiting");
//     const data = await pr;
//     console.log(data);
//     console.log("Hello");

//     const data2 = await pr2;
//     console.log("Hello again");
//     console.log(data2);
// }

// handlePromise();
// What do you think will happen here.
// It will first wait for 5 seconds and then print Promise resolved and then Hello and then wait for more 5 seconds and then print Promise 2 resolved and then Hello again.
// This is because the data of first promise is awaited first and then the data of second promise is awaited as the second promise takes more time to resolve.
// Interesting right?

// As I have already told you "time, tide and javascript waits for none".
// This is 100% true.
// Our js is not waiting for anyone.
// It is just that we are using await keyword which makes us feel like js is waiting for us.
// But in reality, js is not waiting for us.
// The call stack is not at all frozen, if that would be the case, our browser would have crashed.
// It does not wait at all.

// If it does not wait then how does it work behind the scenes?
// I'll tell you.
// Let us go back to our handlePromise function.
// async function handlePromise() {
//     console.log("I am waiting");
//     const data = await pr;
//     console.log(data);
//     console.log("Hello");

//     const data2 = await pr2;
//     console.log("Hello again");
//     console.log(data2);
// }
// When the execution starts, it will go line by line because js is single threaded synchronous language.
// So it will first print I am waiting and then it will go to the next line.

// Let us understand what is happening behind the scenes.
// When we call the handlePromise function, it will go to the call stack.
// It will first print I am waiting and then it will go to the next line.
// Now it will see that we are using await keyword in front of the promise.
// The handlePromise function will be suspended and the promise will be sent to the web api.
// This handlePromise function will not be in the call stack anymore.
// When the first promise is resolved, then only it will move ahead
// So after 5 seconds, our first promise is resolved and then it will again come to the call stack for its execution.
// But this time it will start executing from where it left.
// Now the first promise is resolved and it will print Promise resolved and then Hello.
// Now it will again see that we are using await keyword in front of the second promise.
// It will see if it is resolved or not.
// In our case it is still not resolved, so it will again suspend the handlePromise function and send the second promise to the web api.
// The function will again be removed from the call stack.
// Now after 5 seconds, our second promise is resolved and then it will again come to the call stack for its execution.
// It will start the execution from where it left.
// Then it will print Promise 2 resolved and then Hello again.

// Noticed how call stack did not wait for anyone?
// It just suspended the function and sent the promise to the web api.

// This is how async await works behind the scenes.

// I know it is confusing, but let us try to understand with the example we studied before.
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 10000);
// });

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved");
//     }, 5000);
// });

// async function handlePromise() {
//     console.log("I am waiting");
//     const data = await pr;
//     console.log(data);
//     console.log("Hello");

//     const data2 = await pr2;
//     console.log("Hello again");
//     console.log(data2);
// }

// handlePromise();

// Let us talk about how it will get executed in call stack.
// When we call the handlePromise function, it will go to the call stack.
// It will first print I am waiting and then it will go to the next line.
// Now it will see that we are using await keyword in front of the promise.
// The handlePromise function will be suspended and the promise will be sent to the web api.
// This handlePromise function will not be in the call stack anymore.
// When the first promise is resolved, then only it will move ahead
// So after 10 seconds, our first promise is resolved and then it will again come to the call stack for its execution.
// But this time it will start executing from where it left.
// Now the first promise is resolved and it will print Promise resolved and then Hello.
// Now it will again see that we are using await keyword in front of the second promise.
// It will see if it is resolved or not.
// In our case it is already resolved, cause it was resolved 5 seconds ago, so it will not suspend the handlePromise function and it will directly print Promise 2 resolved and then Hello again.
// And now the handlePromise function is completed and is popped out of the call stack.

// This is how async await works behind the scenes.

// let us go back to our old example.
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 20000);
// });

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved");
//     }, 400000);
// });

// async function handlePromise() {
//     console.log("I am waiting");
//     const data = await pr;
//     console.log(data);
//     console.log("Hello");

//     const data2 = await pr2;
//     console.log("Hello again");
//     console.log(data2);
// }

// handlePromise();

// Let us go in the browser and see what is happening.
// Let us put debugger on console.log("I am waiting");, console.log("Hello");, console.log("Hello again");
// We can see that When I reload the page, it first prints I am waiting.
// When I hit the next button, we can see that the handlePromise function is suspended and it is not in the call stack anymore.
// But after 20 seconds, we can see that the handlePromise function is back in the call stack and it is printing Promise resolved and then Hello.
// Now again when i click the run button, we can see that the handlePromise function is suspended and it is not in the call stack anymore.
// But after total of 40 seconds, we can see that the handlePromise function is back in the call stack and it is printing Promise 2 resolved and then Hello again.
// This is how async await works behind the scenes.

// Real world example of async await.
// In real life we does not create promises like this.
// We make api calls and we get promises by using fetch or axios.
// Let us fetch the user data from github api.
// const url = "https://api.github.com/users/Sparshlohana";

// const handlePromise = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }
// handlePromise();
// Can you see how simple it became to make api calls using async await?
// We can see in the output that we got the user data from github api.
// This is how we make api calls using async await.
// As we already know that fetch returns a promise, so we can use await keyword in front of it.
// As we already know fetch gives us a readable stream, so we have to use json() method to get the data from the readable stream.
// This json method is also a promise, so we can use await keyword in front of it.
// So we can see that we are using await keyword in front of fetch and json method.

// Error handling in async await.
// Let us see how we handle errors in async await.
// While we are using normal promises we were using .catch() method to handle errors.
// But in async await we use try catch block to handle errors.
// It is very simple.
// Just put all your code in the try block, if the promise is rejected, or if there is some error, then it will go to the catch block.
// Example.

// const url = "https://api.github.com/users/Sparshlohana";

// const handlePromise = async () => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// This is how we handle errors in async await.

// Did you notice that our code looks so simple when we use async await?
// It is very simple to make api calls using async await.
// There is no chaining or anything in this.

// You can also handle errors like this
// const url = "https://api.github.com/users/Sparshlohana";

// const handlePromise = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }
// handlePromise().catch((error) => {
//     console.log(error);
// });

// As our handlePromise function is returning a promise, we can use catch method to handle errors.
// But it is not recommended to use this method.
// It is better to use try catch block to handle errors while using async await.