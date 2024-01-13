// Promise.all();
// Why this Promise.all is used and what is the use case of this Promise.all
// Promise.all() takes an array(can say - "iterable") of promises and returns a single promise.
// It is used when you have to parallelly execute multiple promises and wait for all of them to complete.
// Let us suppose you have 10 userIds and you want to fetch the user details of all the users at the same time.
// This is very common when you are building an application.
// It is used to handle multiple promises together.
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise one resolved");
//     }, 3000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise two resolved");
//     }, 1000)
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise three resolved");
//     }, 2000)
// });

// Promise.all([p1, p2, p3]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// It takes an array of promises as an input and returns a single promise.
// Lets assume that we have 3 promises/ we have to make 3 api calls named as p1, p2, p3.
// Promise.all([p1, p2, p3])
// This will make all the 3 api calls at the same time and will wait for all of them to complete.
// Lets assume that p1 takes 3 seconds to complete, p2 takes 1 second and p3 takes 2 seconds to complete.
// Suppose all of then are successful, then Promise.all() will return an array of results of all the promises.
// Promise.all([p1, p2, p3]) will return an array [result1, result2, result3]
// How much time will Promise.all() take to complete?
// It will take the maximum time of all the promises to complete.
// In this case, it will take 3 seconds to complete.
// It will wait for all of them to finish, it will collect the results and then it will return the results.

// What if any of the promises fails?
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise one resolved");
//     }, 3000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise two resolved");
//     }, 1000)
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise three rejected");
//     }, 2000)
// });

// Promise.all([p1, p2, p3]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });
// As soon as any of the promises fails, Promise.all() will fail and it will return the error.
// The output will be error and the error will be the same which is returned by the promise which failed.
// It won't wait for the other promises to complete, if there is any error in any of the promises, it will immediately return the error.


// Promise.allSettled();
// It works similar to Promise.all() in case of successful promises.
// Let us again assume that we have 3 promises/ we have to make 3 api calls named as p1, p2, p3.
// Promise.allSettled([p1, p2, p3])
// This will make all the 3 api calls at the same time and will wait for all of them to complete.
// Lets assume that p1 takes 3 seconds to complete, p2 takes 1 second and p3 takes 2 seconds to complete.
// Now, what if p2 gets rejected in one second?
// It will still wait for all promises to complete.
// After 3 seconds, it will return an array of results of all the promises.
// In our case the array will be [result1, error2, result3]
// It will return an array of objects.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise one resolved");
//     }, 3000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise two resolved");
//     }, 1000)
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise three rejected");
//     }, 2000)
// });

// Promise.allSettled([p1, p2, p3]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// Promise.race();
// It takes an array of promises as an input and returns a single promise.
// As the name suggests, it race, which means the person who reaches first wins.
// So in this case, the promise which completes first will win.
// Suppose you have 3 promises p1, p2, p3.
// Lets assume that p1 takes 3 seconds to complete, p2 takes 1 second and p3 takes 2 seconds to complete.
// After one second, it will give the result of p2 as value2.
// Basically, it will give the result of the promise which completes first.
// But what if first promise fails?
// In that case, it will return the error of the first promise which fails.
// Now the response will be error2.
// We can say that it will return result of the first settled promise.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise one resolved");
//     }, 3000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise two resolved");
//     }, 1000)
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise three rejected");
//     }, 2000)
// });

// Promise.race([p1, p2, p3]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// Promise.any();
// It is similar to Promise.race().
// The only difference is that it will return the result of the first fulfilled promise.
// It will ignore the rejected promises.
// If the first promise is rejected then it will return the result of the second fulfilled promise.
// It will wait for first successful promise.
// If everything fails, then it will return Aggregate Error which means error of all the promises.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise one resolved");
//     }, 3000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise two resolved");
//     }, 1000)
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise three rejected");
//     }, 2000)
// });

// Promise.any([p1, p2, p3]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// What does the term settled means:
// It means the promise is settled irrespective of it being a success or a failure.
