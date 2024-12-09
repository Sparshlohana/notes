// For now, we are working with sampleDB database.

// As we deleted the database in the previous chapter, if we run "show collections" command, it will return nothing.

// We have already learned that a collection is like a table but instead of rows, it has documents and instead of columns, it has fields.

// The simplest way to create a collection is to insert a document into it. If the collection does not exist, MongoDB will create it for you.

// Lets create a users collection and insert a document into it:
// db.users.insertOne({name: "John", age: 25, status: "A"})
// Output: { "acknowledged" : true, "insertedId" : ObjectId("##########") }

// Now, if we run "show collections" command, it will return users collection.

// Here, we have inserted a document into the users collection. If the collection does not exist, MongoDB will create it for you.

// We can also create a collection using the createCollection() method. The method takes the name of the collection as an argument.
// db.createCollection("products")

// Now, if we run "show collections" command, it will return users and products collections.

// This create collection method also takes an optional second argument that is a document that contains options for the collection.

// Lets create a collection named orders with some options:
// db.createCollection("orders", { capped: true, size: 10000, max: 5 })
// capped: true option creates a capped collection. Capped collections are fixed-size collections that automatically remove the oldest documents to make space for new documents.
// size: 10000 option specifies the maximum size of the collection in bytes. If the capped collection reaches this size, MongoDB will remove the oldest documents to make space for new documents.
// max: 5 option specifies the maximum number of documents in the collection. If the capped collection reaches this number of documents, MongoDB will remove the oldest documents to make space for new documents.

// Now, if we run "show collections" command, it will return users, products and orders collections.

// We can also use autoIndexId option to create an index on the _id field. By default, MongoDB creates an index on the _id field of the collection. We can disable this behavior by setting autoIndexId option to false.

// We can use drop method to drop a collection.
// db.orders.drop()

// Now, if we run "show collections" command, it will return products and orders collections.

// To find all the documents in a collection, we can use find() method.
// db.users.find()
// Output: { "_id" : ObjectId("##########"), "name" : "John", "age" : 25, "status" : "A" }