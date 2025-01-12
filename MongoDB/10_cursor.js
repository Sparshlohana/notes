// In the last chapter we deleted everything from our users collection. So let's insert some data into it.
// db.users.insertMany([
//     {_id: 1, name: 'Sparsh', age: 20},
//     {_id: 2, name: 'Saumya', age: 21},
//     {_id: 3, name: 'Vatsal', age: 22},
//     {_id: 4, name: 'Rahul', age: 23},
//     {_id: 5, name: 'Rohit', age: 24},
//     {_id: 6, name: 'Joshua', age: 25},
//     {_id: 7, name: 'Shubham', age: 26},
//     {_id: 8, name: 'Rishabh', age: 27},
//     {_id: 9, name: 'Aman', age: 28},
//     {_id: 10, name: 'Ankit', age: 29},
//     {_id: 11, name: 'Rajat', age: 30},
//     {_id: 12, name: 'Rohit', age: 31},
//     {_id: 13, name: 'Rahul', age: 32},
//     {_id: 14, name: 'Rohit', age: 33},
//     {_id: 15, name: 'Rahul', age: 34},
//     {_id: 16, name: 'Rohit', age: 35},
//     {_id: 17, name: 'Rahul', age: 36},
//     {_id: 18, name: 'Rohit', age: 37},
//     {_id: 19, name: 'Rahul', age: 38},
//     {_id: 20, name: 'Rohit', age: 39},
//     {_id: 21, name: 'Rahul', age: 40},
//     {_id: 22, name: 'Rohit', age: 41},
//     {_id: 23, name: 'Rahul', age: 42},
//     {_id: 24, name: 'Rohit', age: 43},
//     {_id: 25, name: 'Rahul', age: 44},
// ]);

// Let's retrieve all the documents from the user collection.
// db.users.find();

// The find() method returns a cursor. A cursor is a pointer to the result set of a query. By default, the cursor will display the first 20 documents that match the query. If you want to see more documents, you can use the it command to iterate over the cursor.
// Even in the terminal, you can see "Type "it" for more"
// The "it" command stands for iterate. It will display the next 5 documents that match the query.

// When we use find() method, mongo shell does not return all the documents at once. It returns the documents in batches of 20. This batch is called a cursor.

// In simple words, cursor is nothing but an object that points to the result set of a query. It is used to iterate over the result set.


// "it" command is provided by the mongo shell to iterate over the cursor. It will display the next 20 documents that match the query.
// But this command is allowed only in the mongo shell. It is not allowed in other languages drivers like Python, Java, Node.js, etc.

// There are many methods available on the cursor object. Some of the most commonly used methods are:
// 1. cursor.toArray() - This method returns an array that contains all the documents from the cursor.
// If I do db.users.find().toArray(), it will return an array of all the documents in the users collection.
// Internally, find() method returns a cursor of first 20 documents. And toArray() method requests to return another cursor of the documents.

// 2. forEach() - This method is used to iterate over the cursor. It takes a function as an argument. This function will be called for each document in the cursor.
// db.users.find().forEach(function(doc) {
//     print(doc.name);
// });
// We can even use arrow function in forEach() method.
// db.users.find().forEach(doc => print(doc.name));
// We can even transform the documents in the cursor using forEach() method.
// db.users.find().forEach(doc => {
//     doc.age += 10;
// });

// 3. cursor.next() - This method returns the next document in the cursor. If there are no more documents, it returns null.
// You will only get one single document at a time.
// db.users.find().next();

// 4. cursor.hasNext() - This method returns true if the cursor has more documents to return. Otherwise, it returns false.
// db.users.find().hasNext();