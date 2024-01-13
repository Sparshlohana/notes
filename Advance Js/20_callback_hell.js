// In this chapter, we will see two parts of callbacks.
// First is the good part, and second is the bad part.

// In good part we will see how callbacks are super important in javascript.
// And in the bad part we will see that using callbacks can lead to lots of issues.

// So let's start with the good part.

// As we know, javascript is a synchronous single threaded language.

// Let us see an example of synchronous code.
// console.log("Before");
// console.log("After");
// Here, the first console.log will be executed first, and then the second one.

// Now, let us see an example of asynchronous code.
// console.log("Before");
// setTimeout(() => {
//   console.log("Reading a user from a database...");
// }, 2000);
// console.log("After");
// Here, the first console.log will be executed first, then the third one, then the second one.
// This is the most basic example of callbacks.

// Now, let us see another example of callbacks.
// Suppose we have an e-commerce website, and it will surely have a cart.
// Let us assume that cart is an array.
// let cart = ["apple", "mango", "banana", "grapes"];
// Now we have these items in our cart.

// How an e-commerce website works?
// First we create an order and then we proceed to payment.

// How can we write this in code?
// Let us assume we have two apis, one for creating an order and one for payment.
// api.createOrder()
// api.proceedToPayment()

// We can now create order using createOrder api and then only proceed to payment.
// There is a dependency between these two apis.
// How do we manage this dependency?
// As it is an Async operation, We can use callbacks.

// We can just create a callback function and pass it to the createOrder api.
// api.createOrder(cart, () => {
//     api.proceedToPayment();
// });
// Here, we are passing a callback function to the createOrder api.
// This callback function will be executed when the createOrder api is done with its execution.
// And then we can proceed to payment.

// Now let us assume that we have to show order summary after the order is created.
// Let us assume that we have an api for showing order summary.
// api.showOrderSummary()

// We can just pass this api to proceedToPayment api.

// api.createOrder(cart, () => {
//     api.proceedToPayment(() => {
//         api.showOrderSummary();
//     });
// });
// See now, we are passing a callback function to the proceedToPayment api.
// We are handling the dependency between these two apis using callbacks.

// Do you see the problem here?
// Let us assume that we have to add a new api for sending an email to the user.
// api.sendEmail()

// Now, we have to send an email to the user after the order is created.
// We can just pass this api to the createOrder api.

// api.createOrder(cart, () => {
//     api.proceedToPayment(() => {
//         api.showOrderSummary(() => {
//             api.sendEmail();
//         });
//     });
// });
// See now, we are passing a callback function to the showOrderSummary api.

// Do you see the problem here?
// We are nesting the callbacks.
// When we have a large code base, we have so many apis here and there.
// And we have to handle the dependency between them.
// So we have to nest the callbacks.
// THIS IS CALLED CALLBACK HELL.

// What is a callback hell?
// One callback inside another callback inside another callback and so on.
// This is called callback hell.

// How can we solve this problem?
// We can use promises to solve this problem.
// We will see promises in the next chapter.

// We'll have lots of if statements and lots of nested callbacks.
// In place of vertical code, we will have horizontal growing code.
// Which is very difficult to read and understand.
// This type of code structure is not maintainable.

// This horizontal growing code is called callback hell which is also called pyramid of doom.

// This was the first problem with callbacks.

// The second problem is inversion of control.
// What is inversion of control?
// It means that you lose the control of your code while using callbacks. Now it might sound complicated that how can we lose control of our code.

// Let us see an example.
// We can use the same example.
// api.createOrder(cart, () => {
//     api.proceedToPayment();
// });
// What we did here is we passed a callback function to the createOrder api.
// Now we as a developer are sitting back and relaxed and giving our 100% trust and control to the createOrder api.
// We are trusting that the createOrder api will call our callback function when it is done with its execution.
// It will do it automatically.
// We are not in control of our code.

// Isn't it scary/risky?
// Yes, it is. It is very very risky.
// We are trusting the createOrder api blindly.
// This proceed to payment api is an important part of our code and we are trusting it blindly.
// What if this create order api is written by some intern and the api fails to call our callback function.
// The payment will not happen but the order will be created.
// This is a very big problem, right?
// What if the callback function is called multiple times?
// This is also a problem.
// All these is because we are trusting the createOrder api blindly.
// This is called inversion of control.

// We will see in the upcoming chapters how we can solve these problems using promises.