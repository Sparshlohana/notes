# Python was created by Guido van Rossum in the late 1991.
# He was searching was a name for this new programming language but he couldn't find a name.
# One day he was watching Monty Python's Flying Circus on TV. He wanted a short, unique and slightly mysterious name for his programming language. So he decided to name it Python.
# Guido van Rossum is a genius who first worked at Google then at Dropbox and now he is working at Microsoft.

# Now lets code:
# Lets create a simple python file named first.py
# .py is the extension of python files.
# print("Hello World")

# Now open the terminal and go to the directory where the first.py file is located.
# Run the following command:
# python first.py
# You will see the output "Hello World".

# Congratulations! You have successfully written and run your first python program.

# Now what is .py? why do we use it?
# When we create a python file we save it with .py extension. Just like you have seen in movies which are mp4, mkv, avi etc, if there is a game, its mostly .exe. In the same way python files are saved with .py extension.

# What are modules?
# A module is a file containing code which is written by somebody else (not always), which can be imported and used in our programs.
# We can use the code written in the module in our program by importing it.

# For example, we want to take out harmonic mean/arithmetic mean of five numbers. If, on our own we have to write the code for harmonic mean/arithmetic mean, it will take a lot of time. But we can use the code written by somebody else in a module and use it in our program.
# But what if we have some module which we can just use it to find the mean which is written by somebody else.

# You can use pip to install modules.
# pip stands for "Pip Installs Packages" or "Pip Installs Python".
# Using pip you can install any python module you want.
# Pip is the package installer for python just like npm for node.js, composer for php etc.

# There are thousands of modules available in python like some famous modules are, flask which helps python to create web applications, djongo which is a web framework, numpy which is used for numerical calculations, pandas which is used for data analysis etc.
# To install a module using pip, you have to run the following command:
# pip install module_name

# Lets use a funny module named pyjokes.
# Run the following command in administrator mode in the terminal/command prompt/powershell: 
# pip install pyjokes

# Now lets create another file named jokes.py
# To use the pyjokes module in our program we have to import it.
# import pyjokes

# Lets create a variable named joke and assign the joke to it.
# joke = pyjokes.get_joke()

# Now lets print the joke.
# print(joke)

# Here is the complete code:
# import pyjokes
# joke = pyjokes.get_joke()
# print(joke)

# Now run the jokes.py file using the following command:
# python jokes.py

# You will see a joke printed on the screen. Every time you run the program you will see a new joke.

# Did you notice that we didn't write the code for the joke, we just imported the pyjokes module and used it in our program.


# There are two types of modules:
# 1. Built-in modules: These modules are already installed in python. You can use them without installing them.
# 2. External modules: These modules are not installed in python. You have to install them using pip before using them.

# Now Lets see how can you use python as a calculator.
# Just open the terminal and write "python" and press enter.
# Now you can write any mathematical expression and press enter.
# For example, write 2+3 and press enter.
# You will see the output 5.
# You can do any mathematical operation using python.

# Basically, when you write python in the terminal, you are in the python shell. That python shell is also called REPL (Read, Evaluate, Print, Loop).
# What happens is, you write a python code, it reads it, evaluates it, prints the output and then loops back to read the next code.

# Comments
# Comments are used to explain the code. Comments are not executed by the python interpreter.
# The are ignored by the python interpreter.
# Comments are written using the hash symbol #.
# Comments are used to make the code more readable.
# Comments are used to explain the code to other programmers.

# Comments can be written in two ways:
# 1. Single line comments: These comments are written using the hash symbol #.
# 2. Multi-line comments: These comments are written using triple quotes ''' or """.

# Lets see an example of single line comments:
# This is a single line comment.
# print("Hello World")

# Lets see an example of multi-line comments:
# '''
# This is a multi-line comment.
# This is also a multi-line comment.
# '''

# In vs code, you can comment the code by selecting the code and pressing ctrl + /.
# You can uncomment the code by selecting the code and pressing ctrl + /.


# Task 1:
# Write a python program to print Tinkle Tinkle little star full poem.
# Solution:
# print("Tinkle, tinkle, little star,")
# print("How I wonder what you are!")
# print("Up above the world so high,")
# print("Like a diamond in the sky.")
# print("Tinkle, tinkle, little star,")
# print("How I wonder what you are!")

# Or you can use multi-line in print function:
# print('''Tinkle, tinkle, little star,
# How I wonder what you are!
# Up above the world so high,
# Like a diamond in the sky.
# Tinkle, tinkle, little star,
# How I wonder what you are!''') 

# Task 2:
# Use REPL and print table of 17.
# Solution:
# 17*1
# 17*2
# 17*3
# 17*4
# 17*5
# 17*6
# 17*7
# 17*8
# 17*9
# 17*10

# Task 3:
# Install an external module and use it in your program.
# Solution:
# pip install pyttx3
# This module is used to convert text to speech.
# Now create a file named text_to_speech.py

# import pyttsx3
# engine = pyttsx3.init()
# engine.say("Hello World")
# engine.runAndWait()

# Now run the text_to_speech.py file using the following command:
# python text_to_speech.py

# You will hear the text Hello World.

# Task 4:
# Write a python program to print the contents of directory using os module.
# Solution:
# import os
# print(os.listdir())

# Task 5:
# Add comments to the code you have written in task 1, 2, 3 and 4. 
# Solution:
# Do it yourself :)