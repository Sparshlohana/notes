# In this chapter, we will learn about f-string in Python.
# f-string is a new way to format strings in Python 3.6 and above.
# It is faster than other string formatting methods in Python.

# f-string is a string prefixed with 'f' or 'F'.

# It is enclosed in curly braces {}.

# f-string is used to embed expressions inside string literals.
# f-string is used to evaluate expressions at runtime.

# print(f"Hello, World!")  # Hello, World!

# Whats the difference between f-string and other string formatting methods?
# f-string is faster than other string formatting methods.
# f-string is more readable and easy to use.
#  You can directly embed expressions inside f-string, i.e, you can directly write and use variables inside f-string.

# Example 1: f-string with variables
# name = "John"
# age = 25
# print(f"Hello, {name}. You are {age} years old.") # Hello, John. You are 25 years old.

# Example 2: f-string with expressions
# a = 10
# b = 20
# print(f"The sum of {a} and {b} is {a+b}.") # The sum of 10 and 20 is 30.

# Example 3: f-string with functions
# def greet(name):
#     return f"Hello, {name}."
# print(greet("John"))  # Hello, John.

# Example 4: f-string with dictionary
# person = {"name": "John", "age": 25}
# print(f"Hello, {person['name']}. You are {person['age']} years old.")  # Hello, John. You are 25 years old.

# Example 5: f-string with list
# fruits = ["apple", "banana", "cherry"]
# print(f"I like {fruits[0]}, {fruits[1]} and {fruits[2]}.")  # I like apple, banana and cherry.

# Example 6: f-string inside a loop
# for i in range(1, 6):
#     print(f"The square of {i} is {i**2}.")
# The square of 1 is 1.
# The square of 2 is 4.
# The square of 3 is 9.
# The square of 4 is 16.
# The square of 5 is 25.

# In javascript, it is known as template literals.
# In C#, it is known as string interpolation.
# In PHP, it is known as complex (curly) syntax.
# In Java, it is known as string formatting.
# In Ruby, it is known as string interpolation.

# Task 1:
# Create a program that asks the user to enter their name and age. Then, print a message that says "Hello, name. You are age years old."
# Solution:
# name = input("Enter your name: ")
# age = int(input("Enter your age: "))
# print(f"Hello, {name}. You are {age} years old.")

# Task 2:
# Create a program that asks the user to enter two numbers. Then, print the sum of those numbers.
# Solution:
# num1 = int(input("Enter first number: "))
# num2 = int(input("Enter second number: "))
# print(f"The sum of {num1} and {num2} is {num1+num2}.")

# Task 3:
# Create a program that asks the user to enter a number. Then, print the square of that number.
# Solution:
# num = int(input("Enter a number: "))
# print(f"The square of {num} is {num**2}.")
