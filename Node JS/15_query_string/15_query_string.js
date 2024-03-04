// What is a query string?
// A query string is a part of a URL that contains data to be passed to web servers. It is a set of key-value pairs, where each key is associated with a value.
// The query string is usually used to pass data to web servers.
// It is a part of the URL after the question mark(?). The query string is separated from the URL using a question mark (?), and the key - value pairs are separated from each other using an ampersand (&).

// Lets take an example, in the previous chapter, we have created a server that sends fruits data to the client. We were using http://localhost:8000/fruits to get the data. Now, we will use query string to get the data.

// Let us assume we want the fruits with id 2, then we can use the following URL to get the data.
// http://localhost:8000/fruits?id=2

// Now let us assume we want the fruits with color as yellow, then we can use the following URL to get the data.
// http://localhost:8000/fruits?color=yellow

// In the above examples, the query string is id=2 and color=yellow. The key is id and color, and the value is 2 and yellow. The key-value pairs are separated from each other using an ampersand (&). The url will be:
// http://localhost:8000/fruits?id=2&color=yellow

// We already know how to get the url from the request object by using req.url.
// Now we want to pass the query string to the server. We can use the url module to parse the url and get the query string and its values. To do that we need to import the url module which is a built-in/core module in Node.js.

// const url = require('url');

// As we already know that require function returns an object, and we can use the object to access the properties and methods of the module.
// Here we will be using the parse method of the url module to parse the url and get the query string and its values.
// We can get the url using req.url and pass it to the parse method of the url module.

// The parse method takes the url as an argument and returns an object. The object has the following properties:
// href: The complete url
// path: The complete url
// pathname: The path of the url
// query: The query string
// The query property is an object that contains the query string and its values.

// Let us see an example to understand how to use the url module to parse the url and get the query string and its values.

// Example
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     url.parse(req.url);
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// The url.parse also takes a second argument which is a boolean. If the second argument is true, then the query property will be an object. If the second argument is false, then the query property will be a string.

// Example
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     console.log(parsedUrl);
//     res.end('Hello World');
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// Lets see what we get in the console when we run the above code.
// let us type this url in the browser: http://localhost:8000/fruits?id=2
// We will get the Url object in the console.
// In the url object, we can see the query property which is an object. The query property contains the query string and its values.
// Here the query object is { id: '2' }.
// This is how we can access the query string and its values using the url module.

// We also have a property called pathname in the url object. The pathname property contains the path of the url. It tells the resource to which the request is made.

// let us destructure the query object and pathname from the url object and use it in the server.

// Example
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     const { query, pathname } = parsedUrl;
//     console.log(query);
//     console.log(pathname);
//     res.end('Hello World');
// });

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// We can see that we got the query object and pathname from the url object using destructuring.
// We can use the query object and pathname in the server to get the data from the client.

// Let us create an html file and use the query string to get the data from the server.

// You can notice that we have id in the fruits.json for each fruit. We will use the id to get the data.

// We'll be continuing from the example in the previous chapter.
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const fruits = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
//     const fruitsData = JSON.parse(fruits);
//     let fruitsPage = fs.readFileSync(`${__dirname}/fruits.html`, 'utf-8');

//     const fruitsDataMapped = fruitsData.map((item, index) => {
//         let output = fruitsPage.replace('{{%TITLE%}}', item.name);
//         output = output.replace('{{%COLOR%}}', item.color);
//         output = output.replace('{{%TASTE%}}', item.taste);
//         output = output.replace('{{%ID%}}', item.id);
//         return output;
//     })

//     if (req.url === '/fruits') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(fruitsDataMapped.join(','));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');

//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Now you have noticed that when I click on view details, it takes me to the url http://localhost:8000/fruits?id=1. We will use this url to get the data from the server.
// We have used query and changed the route to /fruits?id=1  in the href attribute of the anchor tag.
// Here id could be anything.

// Now we can use the query from the url to get the data from the server.
// What we can do is, we can check if the pathname is /fruits and the query is id, then we can get the data from the server.
// So if the url contains any query string, we will show them the data of the fruit with that id or if the url does not contain any query string, we will show them all the fruits.

// Example
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const fruits = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
//     const fruitsData = JSON.parse(fruits);
//     let fruitsPage = fs.readFileSync(`${__dirname}/fruits.html`, 'utf-8');

//     const fruitsDataMapped = fruitsData.map((item, index) => {
//         let output = fruitsPage.replace('{{%TITLE%}}', item.name);
//         output = output.replace('{{%COLOR%}}', item.color);
//         output = output.replace('{{%TASTE%}}', item.taste);
//         output = output.replace('{{%ID%}}', item.id);
//         return output;
//     })

//     const parsedUrl = url.parse(req.url, true);
//     const { query, pathname } = parsedUrl;

//     if (pathname === '/fruits') {
//         if (query.id) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(`The fruit with id ${query.id} is ${fruitsData[query.id - 1].name}`);
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(fruitsDataMapped.join(''));
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// This is how we can get the data from the server using the query string.


// Task 1
// Create a server that sends the data of the fruit with the color passed in the query string. If the query string does not contain any color, then send all the fruits data.
// Solution
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const fruits = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
//     const fruitsData = JSON.parse(fruits);
//     let fruitsPage = fs.readFileSync(`${__dirname}/fruits.html`, 'utf-8');

//     const fruitsDataMapped = fruitsData.map((item, index) => {
//         let output = fruitsPage.replace('{{%TITLE%}}', item.name);
//         output = output.replace('{{%COLOR%}}', item.color);
//         output = output.replace('{{%TASTE%}}', item.taste);
//         output = output.replace('{{%COLOR%}}', item.color);
//         return output;
//     })

//     const parsedUrl = url.parse(req.url, true);
//     const { query, pathname } = parsedUrl;

//     if (pathname === '/fruits') {
//         if (query.color) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             const filteredFruits = fruitsData.filter((item) => {
//                 return item.color === query.color;
//             });
//             res.end(`${filteredFruits.map((item) => item.name).join(', ')}`);
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(fruitsDataMapped.join(','));
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Task 2
// Create a server that sends the data of the product just like an e-commerce website. When the user clicks on the product, it should take the user to the product page with the product id in the query string. The server should send the data of the product with that id. In the product description, you have to show the details of the product.
// Solution
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const products = fs.readFileSync(`${__dirname}/products.json`, 'utf-8');
//     const productsData = JSON.parse(products);
//     let productsPage = fs.readFileSync(`${__dirname}/products.html`, 'utf-8');

//     const productsDataMapped = productsData.map((item, index) => {
//         let output = productsPage.replace('{{%NAME%}}', item.name);
//         output = output.replace('{{%PRICE%}}', item.price);
//         output = output.replace('{{%ID%}}', item.id);
//         return output;
//     })

//     const parsedUrl = url.parse(req.url, true);
//     const { query, pathname } = parsedUrl;

//     if (pathname === '/products') {
//         if (query.id) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(`The product with id ${query.id} is ${productsData[query.id - 1].name} and the price is ${productsData[query.id - 1].price}`);
//         }
//         else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(productsDataMapped.join(','));
//         }
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Task 3
// Create a server that sends the data of the product with the color passed in the query string. If the query string does not contain any color, then send all the products data.
// Solution
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const products = fs.readFileSync(`${__dirname}/products.json`, 'utf-8');
//     const productsData = JSON.parse(products);
//     let productsPage = fs.readFileSync(`${__dirname}/products.html`, 'utf-8');

//     const productsDataMapped = productsData.map((item, index) => {
//         let output = productsPage.replace('{{%NAME%}}', item.name);
//         output = output.replace('{{%PRICE%}}', item.price);
//         output = output.replace('{{%ID%}}', item.id);
//         return output;
//     })

//     const parsedUrl = url.parse(req.url, true);
//     const { query, pathname } = parsedUrl;

//     if (pathname === '/products') {
//         if (query.color) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             const filteredProducts = productsData.filter((item) => {
//                 return item.color === query.color;
//             });
//             res.end(`${filteredProducts.map((item) => item.name).join(', ')}`);
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(productsDataMapped.join(','));
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Task 4
// Create a server that sends the data of the product with the prices passed in the query string. The price should be minimum and maximum. You have to filter the products with the price between the minimum and maximum price. If the query string does not contain any price, then send all the products data.
// Solution
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const products = fs.readFileSync(`${__dirname}/products.json`, 'utf-8');
//     const productsData = JSON.parse(products);
//     let productsPage = fs.readFileSync(`${__dirname}/products.html`, 'utf-8');

//     const productsDataMapped = productsData.map((item, index) => {
//         let output = productsPage.replace('{{%NAME%}}', item.name);
//         output = output.replace('{{%PRICE%}}', item.price);
//         output = output.replace('{{%ID%}}', item.id);
//         return output;
//     })

//     const parsedUrl = url.parse(req.url, true);
//     const { query, pathname } = parsedUrl;

//     if (pathname === '/products') {
//         if (query.min && query.max) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             const filteredProducts = productsData.filter((item) => {
//                 return item.price >= query.min && item.price <= query.max;
//             });
//             res.end(`${filteredProducts.map((item) => item.name).join(', ')}`);
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(productsDataMapped.join(','));
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Task 5
// Create a server that sends the data of the product with the name passed in the query string. If the query string does not contain any name, then send all the products data.
// Solution
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const products = fs.readFileSync(`${__dirname}/products.json`, 'utf-8');
//     const productsData = JSON.parse(products);
//     let productsPage = fs.readFileSync(`${__dirname}/products.html`, 'utf-8');

//     const productsDataMapped = productsData.map((item, index) => {
//         let output = productsPage.replace('{{%NAME%}}', item.name);
//         output = output.replace('{{%PRICE%}}', item.price);
//         output = output.replace('{{%ID%}}', item.id);
//         return output;
//     })

//     const parsedUrl = url.parse(req.url, true);
//     const { query, pathname } = parsedUrl;

//     if (pathname === '/products') {
//         if (query.name) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             const filteredProducts = productsData.filter((item) => {
//                 return item.name === query.name;
//             });
//             res.end(`${filteredProducts.map((item) => item.name).join(', ')}`);
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(productsDataMapped.join(','));
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });