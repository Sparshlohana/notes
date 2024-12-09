// A database is a storage in a mongodb server which is going to store collections which are going to store documents.
// The first step is to create a database, then create a collection and then insert documents into the collection.

// In this chapter, lets learn how to create a database in mongodb server.

// Let's go to mongodb shell and create a database. We installed mongodb server and shell in our previous chapter.

// To check all the databases in the mongodb server, use the below command.
// show dbs

// If you want to check the current database you are using, use the below command.
// db
// By default, mongodb server uses test database.

// But you may noticed that, test database is not listed in the show dbs command. This is because, mongodb server creates a database when you insert a document into a collection in the database. Test database is not listed in the show dbs command because we haven't inserted any document into the test database. Its just a placeholder.

// To show the collections in the current database, use the below command.
// show collections
// Here, we don't have any collections in the test database.

// To use a database, use the below command.
// use dbName

// For now lets just use local database.
// use local

// If we use, use dbName command, then the database is created if it doesn't exist. If the database already exists, then it is used.
// Lets create a sampleDB database.
// use sampleDB

// We have now created a sampleDB database. But the database is not listed in the show dbs command. This is because, the database is not created until we insert a document into a collection in the database.

// To make sampleDB database to be listed in the show dbs command, we need to insert a document into a collection in the sampleDB database.

// We can directly insert a document into a collection in the sampleDB database without even creating a collection. If the collection doesn't exist, then mongodb server creates a collection and inserts the document into the collection.
// This can be done using the below command.
// db.collectionName.insert({key:value})

// Here, db means the current database we are using. collectionName is the name of the collection in which we are going to insert the document. key is the field name and value is the field value.

// Lets insert a document into a collection in the sampleDB database.
// db.sampleCollection.insertOne({name:"sampleName"})

// Here first we are inserting a document into a collection named sampleCollection in the sampleDB database. If the collection doesn't exist, then mongodb server creates a collection named sampleCollection and inserts the document into the collection.

// insertOne() method is used to insert a document into a collection. If the collection doesn't exist, then mongodb server creates a collection and inserts the document into the collection.

// To check the collections in the sampleDB database, use the below command.
// show collections

// To retrieve the documents in the sampleCollection collection, use the below command.
// db.sampleCollection.find()

// find() method is used to retrieve the documents in a collection. If you don't pass any arguments to the find() method, then it retrieves all the documents in the collection.

// Now we have inserted a document into a collection in the sampleDB database. Now the sampleDB database is listed in the show dbs command.

// To delete a database, use the below command.
// db.dropDatabase()

// This will delete the current database. 