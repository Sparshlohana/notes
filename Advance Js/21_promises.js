// Promises is also one of the most important concepts in JavaScript.

// If you are giving an interview, you are definitely going to be asked about promises.
// Promises will not only help you in interviews but also in your real life projects.

// Lets dive deep into promises.
// Promises are used to handle asynchronous operations in JavaScript.
// As we already know, before promises were invented, callbacks were used to handle asynchronous operations.
// But callbacks had some problems.
// To solve those problems, promises were invented.
// So promises are the better way to handle asynchronous operations in JavaScript.

// What is a promise?
// Let us understand promises with an example.
// Suppose we are creating an e-commerce website like Amazon and we have cart in it.
// const cart = ["apple", "mango", "banana", "grapes"];

// Again let us assume we have two apis, one for creating an order and one for payment.
// createOrder(cart); // it will create an order and returns an order id.

// Now we have to proceed to payment.
// proceedToPayment(orderId); // it will proceed to payment and returns a promise.

// These two apis are asynchronous. We don't know how much time they will take to execute and they are dependent on each other.
// We can't proceed to payment until the order is created.

// Let us see how can we solve this problem using callbacks.
// We can just create a callback function and pass it to the createOrder api.

// createOrder(cart, () => {
//     proceedToPayment(orderId);
// }
// );
// This callback function will be executed when the createOrder api is done with its execution.
// And then we can proceed to payment.
// Now it is responsibility of the createOrder api to call this callback function when it is done with it is being executed.
// But there is an issue with this approach.
// As we have already studied inversion of control, we know that we should not give the control to the createOrder api.
// But here we are giving the control to the createOrder api.
// This can cause some issues.
// So to solve this problem, promises were invented.

// Now let us see how we can handle this type of situation using promises.
// So what will happen is, while defining the createOrder api, We will make sure that it no longer takes a callback function as an argument and only take cart as an argument.
// Instead it will return a promise.
// like this:
// const promise = createOrder(cart);
// Here we have not passed any callback function to the createOrder api.
// Instead it has returned a promise and we have stored that promise in a variable called promise.
// Promise is nothing but you can think of it as an empty object. {}. with some {data: value} in it. And this {data: value} will hold whatever data is returned by the createOrder api.
// So this promise object will have some data in it.
// And this data will be the data that is returned by the createOrder api.
// As we know, this createOrder api is asynchronous. So it will take some time to execute. And we don't know how much time it will take to execute.
// As the execution starts, this promise object will be returned immediately with {data: undefined} in it.
// And then the createOrder api will start executing.
// And when it is done with its execution, it will return some data. {data: value}.
// The empty object will be replaced by {data: value} automatically.
// And this {data: value} will be stored in the promise variable.
// This is how promises work.

// Now you can ask, what will we do after we have the orderDetails in the promise variable? How will we continue the execution? What will happen to the proceedToPayment api?
// Now we can attach a callback function to this promise variable.
// We will use the function then() to attach a callback function to this promise variable.
// Like this:
// promise.then((orderDetails) => {
//     proceedToPayment(orderDetails);
// }
// );
// This .then() is provided by the promise object.
// It will take a callback function as an argument.
// And this callback function will be executed when the promise object is done with its execution.

// As soon as the promise object is done with its execution, it will call this callback function and pass the data to it. And this data will be the data that is returned by the createOrder api.
// So now proceedToPayment() will be called with the orderDetails as an argument.
// And then we can proceed to payment.

// This is how we write code using promises.

// You can just tell, what are you saying? This promise is looking more complicated than the callback function and we are still using callback function in the .then() method. So whats the point of using promises? What improvement have we made?
// I'll tell you this, the code written using promises is lot-lot-lot more improved than the code written using callbacks.
// The main advantage is, in case of call backs we were blindly giving the control to the createOrder api.
// But in case of promises, we are not giving the control to the createOrder api.
// We can see what data is returned by the createOrder api. And when it is returned. And what to do after it is returned.
// Another difference is, in case of callbacks, we were passing the callback function to another function. But in case of promises, we are attaching the callback function to the promise object.
// There is a difference between passing a function and attaching a function.
// When we pass a function to another function, we are giving the control to that function.
// But when we attach a function to an object, we are not giving the control to that object.
// We are just attaching the function to that object.
// So these are the two main differences between callbacks and promises.

// In case of promises, we are having the control over the createOrder api.
// How?
// Here create order api is only doing its job. It is just creating the order and returning the orderDetails. It will fill the promise object with the data, i.e, orderDetails. And as soon as the data is filled in the promise object, it will automatically call the callback function that is attached to the promise object. So here it will automatically call the proceedToPayment() function with the orderDetails as an argument and we will have the control over the proceedToPayment() function.

// In case of callbacks, there was an uncertainty that callback function will be called or not. But in case of promises, there is no uncertainty. The callback function will be called for sure. Thats the guarantee that promises provide and it will call it just once and we'll have the control over the program.

// As I told you that promise object is an empty object with some {data: value} in it, but no, it is bigger and much more advanced than that.

// Let me show you the real promise object.
// Let see how exactly the promise object looks like.
// If you want to see the promise object, we have to use a function fetch() provided by the browser.
// If you are writing js code in a while, you must be familiar with fetch. It is an api given by browser to us to make external api calls.

// Let us make an API call to github servers to get the details of a user.

// const GITHUB_API_URL = "https://api.github.com/users/Sparshlohana";

// fetch();
// What are we doing here is, we are making an api call to the github servers to get the details of a user.
// This GITHUB_API_URL is the url of the api. And yes it will work for all the github users.
// By design, this fetch() function will return a promise object.
// Let us store this promise object in a variable called user.

// Lets update our code.
// const GITHUB_API_URL = "https://api.github.com/users/Sparshlohana";

// const user = fetch(GITHUB_API_URL);

// console.log(user);

// Now we have stored the promise object in the user variable.
// As soon as the fetch() function is called, it will return a promise object which is stored in the user variable.

// Lets go to the browser and then sources tab and then put a debugger in the "const user = fetch(GITHUB_API_URL);" line.
// We can see that for now, user is undefined.
// As we go to next line, we can see the promise object in the user variable.
// We can see three properties in the promise object.
// 1. Prototype: It is the prototype of the promise object.
// 2. PromiseStatus: It is the status of the promise object. It can be pending, fulfilled or rejected.. In our case it is still in pending state.
// 3. PromiseResult: It is the value of the promise object. In our case it is undefined.

// Whatever I was telling you { data: undefined } is actually the PromiseResult property of the promise object, which is undefined for now.
// Initially, the promise will be in pending state and once we have got the data back from the api, it will be in fulfilled state and the PromiseResult property will be updated with the data that we have got from the api.
// We don't know the time here, it can take upto 4-5 seconds to get the data back from the api.

// Let us go to console tab and see the output of the user variable.
// What do you think will the output?
// Will it be pending or fulfilled?
// The result is kind of funny and surprising. 😂
// Cause in the console it shows that promise is pending and if we expand it, it shows us that it is fulfilled. 😂
// What is this behavior!! Damn! 😂
// And this thing only happens in chrome browser.

// When this console.log() is executed, At this point of time the promise is still in pending state because we already know that js engine does not wait fot anyone. It quickly executes whatever is there.
// It takes some time to get the data back from the api, but the console.log() is executed before that, so thats why it is showing pending.
// But after some time, the data will come to the promise object and it will be fulfilled.
// So by the time we expand the promise object, it is already fulfilled.
// Thats why it is showing pending and fulfilled at the same time. 😂

// If we open the fulfilled promise object, we can see the data inside the body property.
// But we still can't see the data cause it says something like readableStream.
// To get this readableStream, we have to convert it into json.
// To convert it into json, we have to call the .json() method on the promise object.

// Now what if we have a callback attach to this promise object?
// We can attach a callback function to this promise object using the .then() method.

// user.then(function (data) {
//     console.log(data);
// })
// In the above callback, the data which we are seeing in the parameter is the data which is returned by fetch.
// So, we can see the data in the console now.
// We can do whatever we want with this data.
// But this is still not the actual data we needed.

// This is how we generally handle promises.
// This is how the special promise object looks like in javascript.
// The special promise object brings lot of trust in the code, because promise object can only be resolved once, either it can be resolved or it can be a failure (rejected). In our case it is fulfilled, but it can also be rejected.

// Promise can have only three states, either it can be pending, fulfilled or rejected.
// And it can only be resolved once.

// Please let me tell you that promise objects are immutable. We can't change the value of the promise object once it is resolved. We can just pass it to here and there in our code but we cannot modify the original promise object.

// What if we want to get the actual data we wanted from the above api.
// Let us write our code again.
// const GITHUB_API_URL = "https://api.github.com/users/Sparshlohana";

// const user = fetch(GITHUB_API_URL).then(function (response) {
//     return response.json();
// });
// console.log(user);

// Here we are getting the actual data we wanted in the response object. But we are still not getting the data in the user variable.
// const GITHUB_API_URL = "https://api.github.com/users/Sparshlohana";

// const user = fetch(GITHUB_API_URL).then(function (response) {
//     return response.json();
// }).then(function (data) {
//     console.log(data);
//     console.log(data.id);
// });

// This is how we can get the actual data we wanted from the api.

// Now what if an interviewer asks you, what is a promise?
// Just tell him that, the promise object is a placeholder for a certain period of time, until we receive a value from an asynchronous operation.
// It is a container for a future value.
// According to mdn, The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise chaining
// We have already solved the problem of callback hell, so you might remember the problem it caused.
// Let us go back to the cart example.
// const cart = ["apple", "mango", "banana", "grapes"];
// Again let us assume we have two apis, one for creating an order and one for payment.
// createOrder(cart); // it will create an order and returns an order id.
// proceedToPayment(orderId); // it will proceed to payment and returns a promise.
// Now we have our third api, which is showOrderSummary() api.
// Suppose there is another api which shows the updatedBalance of the user and we call it showUpdatedBalance() api.
// These all are dependent on each other.
// These all happens one after another in a sequence.
// We used to use callbacks to solve this problem.
// It can go like this:
// createOrder(cart, () => {
//     proceedToPayment(orderId, () => {
//         showOrderSummary(orderId, () => {
//             showUpdatedBalance(() => {
//                 console.log("Everything is done");
//             });
//         });
//     });
// });
// This was a mess. (this is callback hell/pyramid of doom)
// We can handle this problem using promise chaining.

// The term sounds complicated but it is not.
// Suppose these api's were returning promises, let us see how we can handle this problem using promise chaining.
// const promise = createOrder(cart);
// promise.then((orderId) => {
//     return proceedToPayment(orderId);
// }).then(() => {
//     return showOrderSummary(orderId);
// }).then(() => {
//     return showUpdatedBalance();
// }).then(() => {
//     console.log("Everything is done");
// });
 

// Common mistakes in promise chaining
// There is one important thing to remember while using promise chaining.
// There is a bug in lot of codes, is when you are using lots of .then() methods and lot of callbacks. What happens is, we use to pipe the data from one .then() method to another .then() method. And for taking care of this, it is mandatory to return the data from the .then() method. We always return the  promise when we have to pipe the data from one .then() method to another .then() method.
// We cab remove return if we are using arrow functions with single line of code.

// Now our code which was horizontally growing is now vertically growing which is much more readable and understandable.