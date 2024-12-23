// To update a document in mongoDB, you can use the updateOne() method.
// The updateOne() method requires two parameters. The first parameter is a query object defining which document to update. The second parameter is an object defining the new values of the document.
// Example:
// db.users.updateOne({name: "Saumya"}, {$set: {age: 25, gender: "female"}});

// If if you fetch the document after updating it, you will see the updated document.
// db.users.find({name: "Saumya"});

// What if you have multiple documents with same name? And you use updateOne() method to update the document. In this case, the updateOne() method will update the first document that matches the query.

// What if we want to update a field which does not exist in the document? In this case, the updateOne() method will add the field to the document.
// Example:
// db.users.updateOne({name: "Saumya"}, {$set: {isMarried: false}});

// To update multiple documents, you can use the updateMany() method.
// Example:
// db.users.updateMany({name: "Sparsh"}, {$set: {isMarried: true}});
// db.users.find({name: "Sparsh"});

// Here, all the documents with name "Sparsh" will be updated.

// What if you try to update a document that does not exist? In this case, the updateOne() method will not update any document. It will not throw any error.

// What if you want to update a document and also return the updated document? In this case, you can use the findOneAndUpdate() method.
// Example:
// db.users.findOneAndUpdate({name: "Saumya"}, {$set: {isMarried: true}});
// db.users.find({name: "Saumya"});
// Here, the findOneAndUpdate() method will return the document before updating it.

// We also have an update() method in mongoDB.
// It can be used to update a single document or multiple documents.
// Example:
// db.users.update({name: "Saumya"}, {$set: {isMarried: false}});
// db.users.find({name: "Saumya"});

// If you want to update multiple documents, you can pass the third parameter as an object with multi set to true.
// Example:
// db.users.update({name: "Sparsh"}, {$set: {isMarried: false}}, {multi: true});

// The update() method is deprecated in mongoDB version 4.2. So, it is recommended to use updateOne() or updateMany() method.

 
// What is the difference between updateOne() and update() method?
// The updateOne() method updates the first document that matches the query. The update() method updates all the documents that match the query.
// The updateOne() method is recommended to use as it is more specific and clear.
// If $set is not used in the update() method, it will "replace" the entire document with the new document. But in the updateOne() method, it will only update the fields that are specified in the second parameter.
// But after mongoDB version 6.0, if you don't pass $set in the update() method, it will throw an error. So, it is recommended to use $set in the update() method also.

// If you want to replace the entire document with a new document, you can use the replaceOne() method.
// Example:
// db.users.replaceOne({name: "Saumya"}, {name: "Spa", age: 25});

// This will replace the entire document with the new document.