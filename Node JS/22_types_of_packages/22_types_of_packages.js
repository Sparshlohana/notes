// Lets understand what are the different categories in which we can divide a package.
// When we install a package, it can be classified into a Regular dependency or a Development dependency.

// Regular dependency
// A package is called as a simple or regular dependency if the working of our application or the code which we are writing, depends on that package.
// From the regular dependency, we can use apis, methods, and functions that are available in the package.
// Example: express package is a regular dependency. We can use the methods and functions that are available in the express package.

// Development dependency
// A package is called as development dependency, if that package is only required for the development purpose and on which, the working of our application does not depend.
// Example: nodemon package is a development dependency. It is used to restart the server automatically when the code changes. It is not required for the working of our application. It is only required for the development purpose.
// Another example: tailwindcss package is a development dependency. It is used to create a responsive web design. It is not required for the working of our application. It is only required for the development purpose.


// Let us install a regular dependency
// We'll be installing express package as a regular dependency.
// For that, we'll go to the terminal and type the command npm install express
// Here, npm install is the command to install a package. And express is the package name.
// If you want to specify the version of the package, you can do that by typing npm install package@version
// Example: npm install express@4
// If you want to install the latest version of the package, you can do that by typing npm install express

// After the installation, we can see the express package in the node_modules folder.
// We can see the package.json file and package-lock.json file in the project folder.
// We can see the dependencies section in the package.json file. We can see the express package here.

// What is node_modules folder?
// When we install a package, the package is installed in the node_modules folder.
// The node_modules folder is created in the project folder.
// The node_modules folder contains all the packages that are installed in the project.
// This folder contains all the packages that are installed in the project. It is a huge folder. It is not required to be uploaded to the server or pushed to the git repository. We can ignore this folder while uploading the project to the server or pushing the project to the git repository.

// Development dependency are optional. They are not required for the working of our application. They are only required for the development purpose.
// Example: nodemon package is a development dependency.
// We can install a development dependency by typing the command npm install package_name --save-dev
// Example: npm install nodemon --save-dev

// Now you can see that the nodemon package is installed in the node_modules folder.
// We can see the package.json which is updated with the nodemon package in the devDependencies section.
// We can see the package-lock.json file which is updated with the nodemon package.

// How to use nodemon package?
// We can use nodemon package by typing the command nodemon file_name
// Example: nodemon index.js
// Here, index.js is the file which we want to run using nodemon package.
// When we run the command nodemon index.js, the server will start and the server will restart automatically when the code changes.
// It comes in handy when we are developing the application. We don't have to restart the server manually when the code changes. It will restart automatically when the code changes.


// There are two types of package installation.
// 1. Local installation
// 2. Global installation

// Local installation
// The package is only available in that project folder, where the package is installed.
// It cannot be used outside that project folder.
// Here we have install express package and nodemon package as local installation.
// If I try to use the express package or nodemon package in another project, it will not work. Because the package is only available in the project folder where the package is installed.


// Global installation
// There might be some packages which we want to use in all the projects.
// We can install those packages globally.
// The package is installed globally in the system.
// The package we want globally can be nodemon
// As we want the handfullness of nodemon, we can install it globally.

// To install a package globally.
// Open you command prompt or terminal as an administrator(recommended).
// We can install a package globally by typing the command npm install package_name -g
// Example: npm install nodemon -g

// Now we do not have to install nodemon package in every project. We can use nodemon package in all the projects.
// We can use nodemon package by typing the command nodemon file_name

// Ton uninstall our nodemon package, which we installed locally, we can use the command npm uninstall package_name
// Example: npm uninstall nodemon

// To use nodemon package globally, we can use the command nodemon file_name
// Example: nodemon index.js
// Whenever I do any change in index.js, the server will restart automatically.


// Task
// Install nodemon package globally.
// Use nodemon package to run the server.
// Create a file index.js and write a simple server code.
// Run the server using nodemon package.

// To install nodemon package globally, type the command npm install nodemon -g