// What is MongoDb?
// MongoDB is a document-oriented database solution, which we use for high volume data storage.
// MongoDB is fast and efficient database solution because of the way we store the data.

// Unlike traditional databases like SQL, mysql, oracle, etc. MongoDB does not store data in tables. Instead, it stores data in collections and documents.

// As mongoDB uses documents to store data, it is called a document-oriented database.

// MongoDB can be defined as a non-relational, noSQL database solution.

// To understand what is a non-relational/noSQL database, let's first understand what is a relational database.
// In the relational database, we store data in tables. Each table has rows and columns. Each row in the table is called a record and each column in the table is called a field.
// A relational database is a collection of tables and one table can be related to another table in some way.
// For example, in a library database, we can have a table called 'books' and another table called 'authors'. The 'books' table can have a column called 'author_id' which can be used to relate a book to an author.
// The data in relational databases is normalized, which means we store data in multiple tables and use relationships to bring the data together when needed, and each table as a predefined schema.

// Advantages of using relational databases:
// The main advantage of using a relational database is, you have less or no redundancy (repetition) of data. This makes the data consistent and easy to manage.

// Disadvantages of using relational databases:
// However, the main disadvantage of using a relational database is, in order to fetch data from multiple tables, we need to use joins. Joins are expensive operations and can slow down the performance of the database.

// Non-relational databases:
// Non-relational databases or noSQL databases are databases that do not store data in tables. Instead, they store data in collections and documents.
// In a non-relational database like mongoDB, we still have database at the top.

// Collections and Documents:
// A collection is a collection of one or more documents. A document is a set of key-value pairs. Each document in a collection can have a different structure.
// You can think of collections as tables and documents as rows in a table. However, unlike tables, documents in a collection can have different structures.

// Non-relational databases vs Relational databases:
// In both relational and non-relational databases world, we have database at the top.
// In relational databases, we have tables and in non-relational databases, we have collections.
// Table rows are equivalent to documents in collections.
// Table columns are equivalent to fields in documents.
// Relational databases has a predefined schema and non-relational databases do not have a predefined schema (schema-less).
// Relational databases are normalized and non-relational databases are denormalized.

// Documents in MongoDB:
// A document stores the data in the form of JSON (JavaScript Object Notation) format.
// If we have to store some user data in mongoDB, it will be stored something like this:
// [
//     {
//         "_id": ObjectId("64a7db56c13e32c15e54d1a2"),
//         "username": "john_doe",
//         "email": "john.doe@example.com",
//         "profile": {
//             "firstName": "John",
//             "lastName": "Doe"
//         },
//         "preferences": {
//             "theme": "dark",
//             "language": "en"
//         },
//         "createdAt": ISODate("2024-11-01T15:00:00Z")
//     },
//     {
//         "_id": ObjectId("64a7db56c13e32c15e54d1a3"),
//         "username": "emily_smith",
//         "email": "emily.smith@example.com",
//         "preferences": {
//             "theme": "light",
//             "language": "en"
//         },
//         "createdAt": ISODate("2024-11-05T10:30:00Z")
//     },
//     {
//         "_id": ObjectId("64a7db56c13e32c15e54d1a4"),
//         "username": "user123",
//         "email": "user123@example.com",
//         "profile": {
//             "firstName": "User",
//             "lastName": "Test"
//         },
//         "createdAt": ISODate("2024-11-07T09:45:00Z")
//     }
// ]


// In the above example, we have three documents in a collection. Each document has a different structure. The first document has a field called 'username', 'email', 'profile', 'preferences', and 'createdAt'. The second document has a field called 'username', 'email', 'profile', 'preferences', and 'createdAt'. The third document has a field called 'username', 'email', 'profile', 'preferences', and 'createdAt'.

// A non-relational database like mongoDB is schema-less, which means each document in a collection can have a different structure. This is one of the main advantages of using a non-relational database.

// Since we can store documents with different structures in a same collection with mongoDB, your database can grow with your application needs. With mongoDB, you can get started with a simple document structure and as your application grows, you can add more fields to the document without affecting the existing database.

// Since we can store nested documents in mongoDB, it allows us to create complex relations between data and store them in one of the same documents, which makes working with it and fetching it super efficient. Because here, we do not have to create complex joins to fetch data from multiple tables.

// We are using JSON to store data in mongoDB, but behind the scenes, mongoDB stores data in BSON (Binary JSON) format. BSON is a binary representation of JSON-like documents. BSON is designed to be lightweight, traversable, and efficient.

