// Map, reduce and filters are higher order functions in javascript.

// Most of the people understand the concept of map, reduce and filter but they don't know how and where to use it in real world.

// Let us start with map function
// Map function is basically used to transform an array into another array.
// Let us take an example of an array of numbers and we want to transform it into an array of doubles of those numbers.
// let arr = [1, 2, 3, 4, 5];

// What do you understand by transforming an array into another array?
// It means that we want to perform some operation on each element of the array and then store the result of that operation in another array.

// Lets double each element of the array
// let arr = [1, 2, 3, 4, 5];
// let doubleArr = arr.map((item) => item * 2);
// console.log(doubleArr);
// Here we are transforming the array arr into another array doubleArr by doubling each element of the array arr.
// How does this work?
// First of all we need to know that map function returns a new array.
// So we need to store the result of map function in a new array.
// Here, we are storing the result of map function in a new array doubleArr.
// Now, we need to pass a callback function to the map function.
// This callback function will be called for each element of the array arr.
// The callback function will (can) take three arguments.
// The first argument is the current element of the array arr.
// The second argument is the index of the current element of the array arr.
// The third argument is the array arr itself.
// The callback function will return the transformed element.
// This transformed element will be stored in the new array.
// Here, we are doubling each element of the array arr.
// So the transformed element will be the double of the current element.
// The map function will return the new array doubleArr.
// The new array doubleArr will contain the transformed elements.

// Suppose we want to triple each element of the array arr.
// let arr = [1, 2, 3, 4, 5];
// let tripleArr = arr.map((item) => item * 3);
// console.log(tripleArr);
// Here, we are tripling each element of the array arr.

// Let us now see how to convert these array of numbers to array of binary numbers.
// let arr = [1, 2, 3, 4, 5];
// let binaryArr = arr.map((item) => item.toString(2));
// console.log(binaryArr);

// Let us see how the filter function works.
// The filter function is used to filter out some elements from the array.
// Let us take an example of an array of numbers and we want to filter out all the even numbers from the array.
// It also returns a new array.

// Filter out all the even numbers from the array
// let arr = [1, 2, 3, 4, 5];
// let evenArr = arr.filter((item) => item % 2 === 0);
// console.log(evenArr);

// Filter out all the odd numbers from the array
// let arr = [1, 2, 3, 4, 5];
// let oddArr = arr.filter((item) => item % 2 !== 0);
// console.log(oddArr);

// Filter out all the numbers greater than 3 from the array
// let arr = [1, 2, 3, 4, 5];
// let greaterThan3Arr = arr.filter((item) => item > 3);
// console.log(greaterThan3Arr);

// Let us see how the reduce function works.
// As the name suggests, reduce means to reduce, but it does not reduce anything.
// If I was given an option, I would never name it reduce.
// Because it is so confusing, we don't know what it is reducing or what does that reduce mean.
// Filter makes sense, it filters out some elements from the array.
// Map makes sense, it transforms the array into another array.
// But reduce does not make any sense.

// Reduce is used when you take an array and then come up with a single value out of that array.

// If you need to find the sum of all the elements of the array, you can use reduce function.

// First let us write normal function to find the sum of all the elements of the array.
// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
// }
// console.log(sum([1, 2, 3, 4, 5]));

// Now we can write the same function using reduce function.

// The reduce function takes two arguments, accumulator and current element.
// The accumulator is the value that is returned by the reduce function.
// The current element is the current element of the array.
// The reduce function also takes an initial value of the accumulator.

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, item) => acc + item, 0);
// console.log(sum);

// Find out the maximum element of the array
// Let us first create a normal function to find out the maximum element of the array.

// function max(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (max < arr[i]) max = arr[i];
//     }
//     return max;
// }
// console.log(max([1, 2, 3, 4, 5]));

// And now we can write the same function using reduce function.

// let arr = [1, 2, 3, 4, 5];
// let max = arr.reduce((acc, item) => (acc > item ? acc : item), 0);
// console.log(max);
// You can see that the reduce function reduces the complexity of the code.

// Find out the minimum element of the array
// let arr = [1, 2, 3, 4, 5];
// let min = arr.reduce((acc, item) => (acc < item ? acc : item), Infinity);
// console.log(min);

// Let us make things tricky.
// let users = [
//     { firstName: "John", lastName: "Doe", age: 20 },
//     { firstName: "Jane", lastName: "Watson", age: 21 },
//     { firstName: "Jack", lastName: "Indiana", age: 22 },
//     { firstName: "Jill", lastName: "Ego", age: 23 },
//     { firstName: "James", lastName: "Shelton", age: 24 },
// ];
// Suppose we have array of objects and the objects have there things, like firstName, lastName and age.
// You know what, this is the exact copy of data we get from an api.
// Now we have a task to find out the list of full name of all the users.
// We can do that using map function.
// let fullNames = users.map((user) => user.firstName + " " + user.lastName);
// console.log(fullNames);
// This will give us the list of full names of all the users.

// Now we have a task to find out the list of full name of all the users whose age is greater than 21.
// We can do that using filter function.
// let fullNames = users.filter((user) => user.age > 21)

// Suppose we have a task to find out the sum of all the ages of all the users.
// We can do that using reduce function.
// let sumOfAges = users.reduce((acc, user) => acc + user.age, 0);
// console.log(sumOfAges);
// This will give us the sum of all the ages of all the users.

// Suppose we want to get the number of count of ages of users of same age.
// Example {25:2, 26:3, 27:1}
// We can do that using reduce function.
// let countOfAges = users.reduce((acc, user) => {
//     if (acc[user.age]) acc[user.age]++;
//     else acc[user.age] = 1;
//     return acc;
// }, {});
// console.log(countOfAges);
// This was a tricky one right?
// But you can see that the reduce function is very powerful.

// Let us see how to use map, filter and reduce together.
// Suppose we have a task to find out the sum of ages of all the users whose age is greater than 21.
// We can do that using map, filter and reduce together.
// let sumOfAges = users
//     .filter((user) => user.age > 21)
//     .map((user) => user.age)
//     .reduce((acc, age) => acc + age, 0);
// console.log(sumOfAges);
// Here first we are filtering out all the users whose age is greater than 21.
// Then we are mapping the filtered users to their ages.
// Then we are reducing the ages to their sum.
// This is how we can use map, filter and reduce together.
// This is the power of chaining map, filter and reduce together.
// This is how powerful these functions are.
// This is why functional programming is so powerful.

// Let us have an last example to filter the fist name of all the users whose age is less than 22.
// let firstNames = users
//     .filter((user) => user.age < 22)
//     .map((user) => user.firstName);
// console.log(firstNames);

// In place of using map and filter together, we can use reduce function.
// let firstNames = users.reduce((acc, user) => {
//     if (user.age < 22) acc.push(user.firstName);
//     return acc;
// }, []);
// console.log(firstNames);

// This is how simple it becomes to use reduce function.