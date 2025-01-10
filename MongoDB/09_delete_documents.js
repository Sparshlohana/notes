// Let's first check all the documents in the collection
// db.users.find()

// We can delete the documents using the deleteOne() method.
// The deleteOne() method deletes the first document that matches the filter.
// If no document matches the filter, the method does nothing.

// Syntax:
// db.collection.deleteOne(filter, options)

// The deleteOne() method takes two arguments:
// 1. A filter object to match the documents to delete.
// 2. An optional options object.


// Let's delete the document with the name "Sparsh"
// db.users.deleteOne({ name: "Sparsh" })

// Here, we have deleted the first document with the name "Sparsh"

// If we don't pass any filter, it will delete the first document in the collection.
// db.users.deleteOne({})

// If you want to delete all the documents that match the filter, you can use the deleteMany() method.
// The deleteMany() method deletes all the documents that match the filter.
// If no document matches the filter, the method does nothing.

// Syntax:
// db.collection.deleteMany(filter, options)

// Let's delete all the documents with the name "Sparsh"
// db.users.deleteMany({ name: "Sparsh" })

// Here, we have deleted all the documents with the name "Sparsh"

// If you want to delete all the documents in the collection, you can use the deleteMany() method without any filter.
// db.users.deleteMany({})


// We also have a method called remove() to delete the documents.
// The remove() method in MongoDB was deprecated in MongoDB 4.0 and eventually removed in MongoDB 4.2
// It can delete one or more documents that match the filter.

// It contains a flag called justOne, which is set to true by default.
// If justOne is set to true, it will delete only the first document that matches the filter.
// If justOne is set to false, it will delete all the documents that match the filter.

// Syntax:
// db.collection.remove(filter, options)

// Let's delete the document with the name "Sparsh"
// db.users.remove({ name: "Sparsh" })

// Here, we have deleted the first document with the name "Sparsh"

// If you want to delete all the documents that match the filter, you can use the remove() method with justOne set to false.
// db.users.remove({ name: "Sparsh" }, { justOne: false })

// Here, we have deleted all the documents with the name "Sparsh"
