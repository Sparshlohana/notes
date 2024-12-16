// Let's learn about different ways to insert a document in MongoDB.

// Let's first check what are the collections available in the database.
// "show collections" in our sampleDB database.

// We have products and users collections.
// Let's insert a document in the users collection.
// To insert a document in a collection, we have two methods:
// 1. insertOne() method
// 2. insertMany() method

// Let's insert a document in the users collection using insertOne() method.
// db.users.insertOne({name: "John", age: 25, status: "A"})
// If I press enter, it will insert the document in the users collection.
// The output will be:
// {
//   "acknowledged" : true,
//   "insertedId" : ObjectId("5f0e6b4f4f6d7a7b5f2b6c9c")
// }

// To check the inserted document, we can use the find() method.
// db.users.find()

// Let's insert a document in the users collection using insertMany() method.
// db.users.insertMany([{name: "Jane", age: 30, status: "A"}, {name: "Doe", age: 35, status: "A"}])
// If I press enter, it will insert the documents in the users collection.
// The output will be:
// {
//   "acknowledged" : true,
//   "insertedIds" : [
//     ObjectId("5f0e6c0d4f6d7a7b5f2b6c9d"),
//     ObjectId("5f0e6c0d4f6d7a7b5f2b6c9e")
//   ]


// As we have already studied that mongodb is schema-less, so we can insert documents with different fields.
// Let's insert a document with different fields.
// db.users.insertMany([{name: "John", age: 25, status: "A"}, {name: "Jane", age: 30, status: "A", city: "New York", country: "USA"}, {name: "Doe", age: 35, status: "A", city: "Los Angeles"}])

// Here, we have inserted three documents with different fields.

// To check the inserted documents, we can use the find() method.
// db.users.find()


// We also have another method to insert a document in the collection.
// insert() method
// It can be used to insert a document like both insertOne() and insertMany() methods.
// It is deprecated in the latest version of MongoDB.

// Let's insert a document in the users collection using the insert() method.
// db.users.insert({name: "John", age: 25, status: "A"})
// If I press enter, it will insert the document in the users collection.
// The output will be:
// WriteResult({ "nInserted" : 1 })

// To insert multiple documents, we can use the insert() method like this:
// db.users.insert([{name: "Jane", age: 30, status: "A"}, {name: "Doe", age: 35, status: "A"}])
// If I press enter, it will insert the documents in the users collection.
// The output will be:
// BulkWriteResult({
//   "writeErrors" : [ ],
//   "writeConcernErrors" : [ ],
//   "nInserted" : 2,
//   "nUpserted" : 0,
//   "nMatched" : 0,
//   "nModified" : 0,
//   "nRemoved" : 0,
//   "upserted" : [ ]
// })

// To check the inserted documents, we can use the find() method.
// db.users.find()

// Please do not use insert() method to insert documents in the collection. It is deprecated in the latest version of MongoDB. The drivers does not support this method.
// Use insertOne() or insertMany() method to insert documents in the collection.