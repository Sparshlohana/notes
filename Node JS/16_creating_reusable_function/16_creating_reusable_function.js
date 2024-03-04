// This is the continuation of previous chapter

// Reusable function
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

// Here, what if we have to create another page for another product? We have to copy the same code and change the product name and price. This is not a good practice. We can create a function to do this. Let's see how we can do this.

// Reusable function
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const replaceTemplate = (temp, product) => {
//     let output = temp.replace('{{%NAME%}}', product.name);
//     output = output.replace('{{%PRICE%}}', product.price);
//     output = output.replace('{{%ID%}}', product.id);
//     return output;
// }

// const server = http.createServer((req, res) => {
//     const products = fs.readFileSync(`${__dirname}/products.json`, 'utf-8');
//     const productsData = JSON.parse(products);
//     let productsPage = fs.readFileSync(`${__dirname}/products.html`, 'utf-8');

//     const productsDataMapped = productsData.map((item, index) => replaceTemplate(productsPage, item));

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

// This is the reusable function. We have created a function called replaceTemplate. This function takes two parameters. The first parameter is the template and the second parameter is the product. We have used this function in the map function. We have passed the productsPage and item as the parameters. This function replaces the {{%NAME%}}, {{%PRICE%}}, and {{%ID%}} with the product name, price, and id. This is the reusable function. We can use this function in any other place where we need to replace the template.
// You can replace as many as you want by using this function.
// Just add what you want to display and replace the template with the data you want to display. This is the best practice to create a reusable function.


// Using the reusable function again with different data
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const replaceTemplate = (temp, product) => {
//     let output = temp.replace('{{%NAME%}}', product.name);
//     output = output.replace('{{%PRICE%}}', product.price);
//     output = output.replace('{{%ID%}}', product.id);
//     return output;
// }

// const server = http.createServer((req, res) => {
//     const products = fs.readFileSync(`${__dirname}/products.json`, 'utf-8');
//     const productsData = JSON.parse(products);
//     let productsPage = fs.readFileSync(`${__dirname}/products.html`, 'utf-8');

//     const productsDataMapped = productsData.map((item, index) => replaceTemplate(productsPage, item));

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

//     else if (pathname === '/laptop') {
//         const laptop = fs.readFileSync(`${__dirname}/laptop.json`, 'utf-8');
//         const laptopData = JSON.parse(laptop);
//         let laptopPage = fs.readFileSync(`${__dirname}/laptop.html`, 'utf-8');

//         const laptopDataMapped = laptopData.map((item, index) => replaceTemplate(laptopPage, item));

//         if (query.id) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(`The laptop with id ${query.id} is ${laptopData[query.id - 1].name} and the price is ${laptopData[query.id - 1].price}`);
//         }
//         else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(laptopDataMapped.join(','));
//         }
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// }
// );

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });

// Task.
// Create a reuseable function for all the tasks of previous chapters.