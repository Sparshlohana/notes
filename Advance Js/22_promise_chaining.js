// Let us deep dive into promises.
// Let us again take an example of our e-commerce website.
// const cart = ["apple", "mango", "banana", "grapes"];

// Let us suppose we have to create an order and we have an createOrder(cart) api which takes cart as an argument and returns orderId.
// createOrder(cart)
// And with the help of this orderId we can proceed to payment.
// proceedToPayment(orderId)
// As this createOrder(cart) and proceedToPayment(orderId) are asynchronous operations, so they will surely return a promise.
// const promise = createOrder(cart);
// promise.then((orderId) => {
// console.log(orderId);
// //   proceedToPayment(orderId);
// });

// Let us now see, how does this createOrder(cart) api returns a promise.
// Lets write our own createOrder(cart) api which returns a promise.
// function createOrder(cart) {
//     const pr =

//     return pr;
// }
// How do we create a promise?
// We create a promise using new Promise() constructor.
// This promise constructor takes a callback function as an argument which takes two arguments resolve and reject.
// function createOrder(cart) {
//     const pr = new Promise((resolve, reject) => {
//     });
//     return pr;
// }
// Now you will say that what is this resolve, what is this reject? what is new Promise()?
// new Promise() is a constructor which creates a promise.
// resolve is a function which is used to resolve a promise.
// reject is a function which is used to reject a promise.
// These resolve and reject functions are provided by the javascript engine.
// It is not something that user has to create.
// Whatever we need to do in order to resolve a promise, we need to do it inside the callback function of new Promise() constructor.
// Here the whole logic of createOrder(cart) api will go inside the callback function of new Promise() constructor.
// function createOrder(cart) {
//     const pr = new Promise((resolve, reject) => {
//         // Let us dummy create order api.
//         // We need to validate the cart.
//         // If the cart is valid, then we will resolve the promise.
//         // If the cart is invalid, then we will reject the promise.
//         // We'll have a function called validateCart(cart) which will validate the cart.
//         if (!validateCart(cart)) {
//             // If the cart is not valid, then we will throw an error and reject the promise.
//             // How do you throw an error in javascript?
//             // You use Error keyword.
//             const error = new Error("Cart is invalid");
//             reject(error);
//         }
//         // Now if everything is fine, then we will resolve the promise.
//         const orderId = 1234;
//         if (orderId) {
//             resolve(orderId);
//         } else {
//             const error = new Error("Order not created");
//             reject(error);
//         }
//     });
//     return pr;
// }

// This is how we create a promise.
// Let us run the above code.
// What do you think will happen?
// Sadly we will get an error cause we have not defined validateCart(cart) function.

// Let us define validateCart(cart) function.
// function validateCart(cart) {
//     if (cart.length > 0) {
//         return true;
//     }
//     return false;
// }
// This can be a dummy validateCart(cart) function.

// For now our createOrder(cart) api returned orderId very quickly.
// Let us modify our code so that it takes a little bit of time to return orderId.
// function createOrder(cart) {
//     const pr = new Promise((resolve, reject) => {
//         if (!validateCart(cart)) {
//             const error = new Error("Cart is invalid");
//             reject(error);
//         }
//         setTimeout(() => {
//             const orderId = 1234;
//             if (orderId) {
//                 resolve(orderId);
//             } else {
//                 const error = new Error("Order not created");
//                 reject(error);
//             }
//         }, 2000);
//     });
//     return pr;
// }
// Now it will take 2 seconds to return orderId.

// This is how exactly we create a promise and use it.
// These createOrder(cart) will be created in backend side.

// What if we just console.log(promise) and see what it returns?
// console.log(promise);
// It returns a promise object.
// It will be in pending state, after 2 seconds it will be in resolved state.

// Let us now see what happens if we reject a promise.
// Let us reject a promise.
// For doing that we can just change the validateCart(cart) function.
// function validateCart(cart) {
//     if (cart.length > 0) {
//         return false;
//     }
//     return true;
// }
// Now for sure it will reject the promise.

// If we go in the browser and see the console, we will see an error called Uncaught (in promise) Error: Cart is invalid. This is a red colored error which means we have not handled the error.
// We need to handle the error.
// How do we handle the error?
// We use catch() method.

// Let us see how do we use catch() method.
// const promise = createOrder(cart);
// promise
//     .then((orderId) => {
//         console.log(orderId);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// Now we will not get any error in the console.
// We will just get an error but it will not be of red color.
// We should always handle error or our application will surely crash.
// We can use this error in popups or we can use it in any other way to display the error to the user, but if the error is not handled then we won't be able to display it to the user.

// Promise Chaining
// Let us now take our proceedToPayment(orderId) api in action.
// const promise = createOrder(cart);
// promise
//     .then((orderId) => {
//         console.log(orderId);
//     })
//     .then((orderId) => {
//         proceedToPayment(orderId);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// This is how we can chain our promises.

// Let us make our own proceedToPayment(orderId) api.

// function proceedToPayment(orderId) {
//     const pr = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const paymentId = 1234;
//             if (paymentId) {
//                 resolve(paymentId);
//             } else {
//                 const error = new Error("Payment not done");
//                 reject(error);
//             }
//         }, 2000);
//     });
//     return pr;
// }
// This is our dummy proceedToPayment(orderId) api.

// So we can chain our promises like this.
// const promise = createOrder(cart);
// promise
//     .then((orderId) => {
//         console.log(orderId);
//     })
//     .then((orderId) => {
//         proceedToPayment(orderId);
//     })
//     .then((paymentId) => {
//         console.log(paymentId);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// But this is not the correct way of chaining promises.
// This will now work because we are not returning anything from the second then() method.

// eLt us see the correct way of chaining promises.
// const promise = createOrder(cart);
// promise
//     .then((orderId) => {
//         console.log(orderId);
//         return proceedToPayment(orderId).then((paymentId) => {
//             console.log(paymentId);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// But here we are again falling in the same problem as callback hell.
// We are again nesting our code and its starting to look ugly.
// This will make promise hell

// To not falling in the same problem as callback hell, we can just return the promise from the then() method.
// const promise = createOrder(cart);
// promise
//     .then((orderId) => {
//         console.log(orderId);
//         return proceedToPayment(orderId);
//     })
//     .then((paymentId) => {
//         console.log(paymentId);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// This is the correct way of chaining promises.

// The catch() method will catch the error of both the promises.
// We don't need to chain catch() method.

// But what if we have to move to proceedToPayment(orderId) even if createOrder(cart) fails?
// You'll say why would we do that?
// What if we have more than 20 promises and we have to move to the next promise even if the previous promise fails?
// And if one promise fails, the whole chain will break.
// So we need to handle this situation.

// We can just change the catch() method usage.

// const promise = createOrder(cart);
// promise
//     .then((orderId) => {
//         console.log(orderId);
//         return proceedToPayment(orderId);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .then((paymentId) => {
//         console.log(paymentId);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// This is how we can handle this situation.
// The then will definitely run which is after the catch() method.