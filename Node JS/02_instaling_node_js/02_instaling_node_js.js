// Installing node js'
// To install node js, go to https://nodejs.org and download the installer.
// There are two versions of node js available for download.
// The LTS version and the current version.
// LTS stands for long term support.
// This is the version that is recommended for most users.
// It is the stable version.

// The current version is the latest version of node js.
// It contains the latest features.
// But it is not stable.
// It is still under development.

// If you are a beginner, I recommend you to download the LTS version.
// Once the download is complete, run the installer.
// Accept the license agreement.
// Click next.
// Click next again.
// Click next again.
// Click install.
// Click finish.

// Now, let's verify the installation.
// Open the command prompt.
// Type node -v.
// This will print the version of node js.
// This means that node js is installed successfully.

// To use node, you can just type node in terminal and press enter.
// This will open the node js REPL.
// REPL stands for read, evaluate, print and loop.
// This is a command line tool that takes your commands, evaluates them, prints the result and then loops back to take the next command.
// You can use this tool to experiment with node js.
// For example, you can type 10 + 20 and press enter.
// This will print the result.
// You can also type console.log('Hello World') and press enter.
// This will print the message.
// You can do all sorts of experiments here. Go ahead and try it out!!
// To exit the REPL, press Ctrl + C twice.

// If you exit the REPL, and then again enter and REPL, you won't be able to access previously defined variables when you exit the REPL, all the variables are destroyed.

// Here we learned and saw that node js allows us to execute JavaScript code outside the browser.

// There is a thing called REPL, which we discussed above, now let's discuss it in detail.
// REPL stands for read, evaluate, print and loop.
// Here, read means reading the user input, evaluate means evaluating the user input, print means printing the result and loop means looping back to the start.

// Lets understand this with an example.
// Open the command prompt.
// Type node and press enter.
// lets create a user object.
// Type let user = {name: 'John', age: 30} and press enter.
// This will create a user object.
// Now, if you want to access the name property of this object, you can type user.name and press enter.
// This will print the name property.
// Now, if you want to access the age property, you can type user.age and press enter.
// This will print the age property.
// Now, if you want to access the non existing property, you can type user.address and press enter.
// This will print undefined.
// This is because the address property does not exist in the user object.

// Now, if you want to add a new property to the user object, you can type user.address = 'New York' and press enter.
// This will add the address property to the user object.
// Now, if you want to access the address property, you can type user.address and press enter.
// This will print the address property.

// Now, if you want to delete the address property, you can type delete user.address and press enter.
// This will delete the address property.
// Now, if you want to access the address property, you can type user.address and press enter.
// This will print undefined.

// Now, if you want to exit the REPL, you can press Ctrl + C twice.

// We use REPL to experiment with node js and we do not use it in our day to day development.
// It will work on all types of terminals.

// Node js supports all versions of javascript and it also supports some features of ES6.

// There is a special variable "_" which stores the result of the last operation.
// For example, if you type 10 + 20 and press enter, this will print 30.
// Now, if you type _ and press enter, this will print 30.
// Now, if you type _ + 100 and press enter, this will print 130.
// This is because the "_" variable stores the result of the last operation.

