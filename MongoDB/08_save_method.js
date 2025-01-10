// We use save method to update an existing document in MongoDB or to save a new document.
// Basically, it is a combination of insert and update methods.

// db.users.save({name: "Saumya", age: 25});

// Here, if a document with name "Saumya" exists, it will update the document. If it does not exist, it will insert a new document.

// If we want to update a document, we can pass the _id of the document in the object.
// Example:
// db.users.save({_id: ObjectId("61f1f5b2f7e2b0b4f9f6c4f1"), name: "Saumya", age: 26});

// This will update the document with the specified _id.

// But, if you run the above commands, they will throw an error saying TypeError: db.users.save is not a function.

// This is because the save method is not available in the mongo shell. It is available in the MongoDB driver for Node.js.
// It got deprecated in MongoDB 4.2 and later removed in MongoDB 5.0. So, it is recommended to use insertOne() or updateOne() method.