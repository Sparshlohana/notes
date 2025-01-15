# Learning python architecture begins with writing python code (also known as source code).

# Interpreter vs Compiler
# Interpreter:
# It reads the code line by line and executes.
# If there is any error, then it stops the execution and shows the error.
# The code above the error will be executed and the output of the above code will be displayed in the terminal before the error part.
# Example:

# Compiler:
# It reads the entire code and converts it into machine code.
# If there is any error, then it stops the execution and shows the error.
# No output will be displayed, only the error will be displayed.


# Understanding Python Syntax and Semantics
# The term semantics means the meaning of the code. The syntax is the structure of the code.
# Python is a high-level language, which means it is easy to read and write. It is also an interpreted language, which means that the code is executed line by line.

# Syntax
# Syntax refers to the structure of the code and the rules that define it.
# Python has a clean and readable syntax that uses indentation to define code blocks rather than curly braces or keywords.
# Example:
# if 5 > 2:
#   print("Five is greater than two!")

# Semantics
# It means understanding the meaning of the code and how it behaves during execution
# For example, Variables in python do not need to be declared with any particular type and can even change type after they have been set.
# As python is dynamically typed, the type of a variable is determined by the value assigned to it.
# Basically, you can change the type: x = 5, x = "Hello". This will work fine without any error.


# Writing Scripts and Modules
# What is Script?
# A script is a file containing a sequence of commands that are executed by a program.
# A python script is a python file containing python code which is meant to get executed.

# Example of a simple script
# print("This is a Python script!")


# What is a Python Module?
# A module is a python file that contains python code. It can define using functions, classes, and variables.
# It is designed to be imported and used in other python scripts.
# Example:
# # my_module.py
# def greet(name):
#   return f"Hello, {name}!"

# Using the module:
# # main.py
# import my_module

# print(my_module.greet("Alice"))  # Output: Hello, Alice!


# Python can be used in two modes: interactive mode and script mode.
# Interactive mode:
# Launch the python shell by typing "python" in the terminal.
# It is useful for testing small pieces of code and for learning python.
# Example:
# x = 5
# print(x+10)
# 15

# Script mode:
# Write code in a file and execute it using the python interpreter.
# The file is saved with a .py extension.
# Example:
# example_script.py
# name = input("Enter your name: ")
# print(f"Hello, {name}!")

# To run the script, type "python example_script.py" in the terminal.


# By mastering Python’s syntax, semantics, and modes of operation, you can confidently write robust Python programs and modules. We have already learned all these concepts in the previous sections.
