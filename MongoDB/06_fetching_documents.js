// For retrieving data from a collection in MongoDB, we have several methods to use.

// 1. findOne() Method
// The findOne() method is used to retrieve a single document from a collection. It returns the first document that matches the query criteria. If no document matches the query criteria, it returns null.
// If no query criteria is passed to the findOne() method, it returns the first document in the collection.

// We are using users collection created in the previous chapters.
// Let's retrieve a single document from the users collection.
// db.users.findOne()
// This will return the first document in the users collection.

// Now I want to fetch the document with the name Sparsh.
// For this, I will pass the query criteria (filter) to the findOne() method.
// db.users.findOne({name: "Sparsh"})

// We will get first document with name Sparsh.

// 2. find() Method
// The find() method is used to retrieve multiple documents from a collection. It returns a cursor to the documents that match the query criteria.
// If no query criteria is passed to the find() method, it returns all the documents in the collection.

// Let's retrieve all the documents from the users collection.
// db.users.find()

// This will return all the documents in the users collection.
// Let's retrieve all the documents with the name Sparsh.
// db.users.find({name: "Sparsh"})

// Let's retrieve all the documents with the age greater than 25.
// db.users.find({age: {$gt: 25}})
// Here, $gt is a comparison operator that selects the documents where the value of the field is greater than the specified value.

// There are many comparison operators that can be used with the find() method. They are:
// $eq: equal
// $ne: not equal
// $gt: greater than
// $gte: greater than or equal
// $lt: less than
// $lte: less than or equal


// In both the findOne() and find() methods, we can pass a projection object as the second argument to specify which fields to include or exclude in the result.
// For example, to include only the name and age fields in the result, we can pass the projection object as {name: 1, age: 1}.
// To exclude the _id field, we can pass the projection object as {_id: 0}.
// We can event set the value of the field to 0 to exclude it from the result.
// This 0 and 1 can also be replaced by true and false respectively.

// Eg: db.users.find({name: "Sparsh"}, {name: 1, age: 1, _id: 0})
// This will return only the name and age fields of the documents with the name Sparsh.


// You can use pretty() method to format the output of the find() method.
// db.users.find().pretty()

// This will format the output of the find() method in a readable format.

// 3. count() Method
// The count() method is used to count the number of documents that match the query criteria.
// Let's count the number of documents in the users collection.
// db.users.count()

// This will return the total number of documents in the users collection.
// Let's count the number of documents with the name Sparsh.
// db.users.count({name: "Sparsh"})
// This will return the total number of documents with the name Sparsh.

// This count method is deprecated in MongoDB version 4.0 and above. Instead, we can use the countDocuments() method pr estimatedDocumentCount() method.

// 4. countDocuments() Method
// The countDocuments() method is used to count the number of documents that match the query criteria.
// Let's count the number of documents in the users collection.
// db.users.countDocuments()

// This will return the total number of documents in the users collection.
// Let's count the number of documents with the name Sparsh.

// db.users.countDocuments({name: "Sparsh"})
// This will return the total number of documents with the name Sparsh.

// 5. estimatedDocumentCount() Method
// The estimatedDocumentCount() method is used to count the number of documents in a collection.
// Let's count the number of documents in the users collection.
// db.users.estimatedDocumentCount()

// This will return the total number of documents in the users collection.

// Whats the difference between countDocuments() and estimatedDocumentCount()?
// The countDocuments() method returns the exact count of the documents that match the query criteria whereas the estimatedDocumentCount() method returns an estimate of the count of the documents in the collection.
// The estimatedDocumentCount() method is faster than the countDocuments() method as it does not scan all the documents in the collection.

// 6. limit() Method
// The limit() method is used to limit the number of documents that are returned by the find() method.
// Let's retrieve only the first two documents from the users collection.
// db.users.find().limit(2)

// This will return only the first two documents from the users collection.

// 7. skip() Method
// The skip() method is used to skip a specified number of documents in the result set.
// Let's skip the first two documents from the users collection.
// db.users.find().skip(2)

// This will return all the documents in the users collection except the first two documents.

// 8. sort() Method
// The sort() method is used to sort the documents in the result set.
// Let's sort the documents in the users collection by the age field in ascending order.
// db.users.find().sort({age: 1})

// This will return all the documents in the users collection sorted by the age field in ascending order.

// Let's sort the documents in the users collection by the age field in descending order.

// db.users.find().sort({age: -1})
// This will return all the documents in the users collection sorted by the age field in descending order.

// We can also sort the documents by multiple fields.
// Let's sort the documents in the users collection by the age field in ascending order and the name field in descending order.
// db.users.find().sort({age: 1, name: -1})

// This will return all the documents in the users collection sorted by the age field in ascending order and the name field in descending order.


// These are some of the methods that can be used to retrieve data from a collection in MongoDB. There are many other methods that can be used to retrieve data from a collection in MongoDB. You can refer to the MongoDB documentation for more information on these methods.