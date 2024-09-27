// What are static files?
// These files are stored in the server and are served as it is to the client.
// But currently, we cannot excess those files from our routes.

// Lets create a folder called public in the root directory of the project.
// Inside public folder, Create another folder called templates.
// Inside this template folder, create a new file called demo.html.

// Lets try to access this file from the browser.
// Open the browser and type the following URL.
// http://localhost:8000/templates/demo.html
// You will get an error message saying "Cannot GET /templates/demo.html"

// Here, demo.html is a static file, and by default in express, we cannot access static files.
// Same is true for other types of static files as well, like images, css, js, etc.

// This is because we have not defined any route to this file.

// To serve static files in express, we need to use the express.static() middleware function.
// We go in our express file, we just need to add the following line of code.
// app.use(express.static());

// In the static() function, we can pass the path of the folder where our static files are stored.
// app.use(express.static('./public'));

// Now what will happen is, whatever static files we have saved inside this public folder, we can access them directly from the browser.

// If we write the following URL in the browser.
// http://localhost:8000/public/templates/demo.html
// We will still get an error message saying "Cannot GET /public/templates/demo.html"
// This is because, now, we don't need to mention the public folder in the URL.
// We can directly access the file.
// http://localhost:8000/templates/demo.html

// Now, we can access the static files directly from the browser.

// Why don't we need the public folder in the URL?
// When we open a URL, express will try to find the route for this URL, if the path is not found, in that case it will go to public folder and try to find the file with the same name as the URL.

// Is it mandatory to name the folder public?
// No, we can name the folder anything we want. But it is a good practice to name it public.
// You can name it anything you want, but you need to pass the path of the folder in the static() function.

// Lets create another folder called css in which we will be keeping our css files.
// Let's create a new file named style.css inside the css folder.

// Link the css file to the demo.html file.
// <link rel="stylesheet" href="/your/path/style.css">

// If you want to access the css file from the browser, you can write the following URL.
// http://localhost:8000/css/style.css

// If you want to access the demo.html file, you can write the following URL.
// http://localhost:8000/templates/demo.html

// Now you can see css is applied to the demo.html file.

// If you remember, when we were learning node, we used to read the html file and send it as a response.
// In that case we were not able to apply css to the html file.

// But now, we can directly access the html file from the browser and apply css to it.