# You can take input from the user in python, just like other programming languages.
# Like c has scanf() function, c++ has cin, java has Scanner class, python has input() function.

# Example
# a = input("Enter a number: ")
# b = input("Enter second number: ")
# print("Number a is: ", a)
# print("Number b is: ", b)

# Now if you run this code, it will ask you to enter a number and then second number.
# After entering the numbers, it will print the numbers you entered.
# If you enter 5 and 10, it will print:
# Number a is: 5
# Number b is: 10

# Lets get the sum of two numbers entered by the user.
# a = input("Enter a number: ")
# b = input("Enter second number: ")
# print("Sum of two numbers is: ", a + b)

# If you thing that it will print the sum of two numbers, you are wrong.
# It will print the two numbers as a string.
# If you enter 5 and 10, it will print:
# Sum of two numbers is: 510

# This is because input() function takes the input as a string.

# To fix this, you can convert the input to integer.
# a = int(input("Enter a number: "))
# b = int(input("Enter second number: "))
# print("Sum of two numbers is: ", a + b)

# or

# a = input("Enter a number: ")
# b = input("Enter second number: ")
# print("Sum of two numbers is: ", int(a) + int(b))

# In the first code, the strings got concatenated and in the second code, the strings got converted to integers and then added.


# Task 1
# Write a python program to add two numbers.
# Solution
# a = int(input("Enter a number: "))
# b = int(input("Enter second number: "))
# print("Sum of two numbers is: ", a + b)

# Task 2
# Write a python program to find remainder when a number is divided by z.
# Solution
# a = float(input("Enter a number: "))
# z = float(input("Enter a number to divide by: "))
# print("Remainder when a is divided by z is: ", a % z)

# Task 3
# Check the type of variable assigned using input() function.
# Solution
# a = input("Enter a number: ")
# print("Type of a is: ", type(a))

# Task 4
# Use comparison operator to find out whether a given variable "a" is greater than 'b' or not. Take a = 34 and b = 80.
# Solution
# a = 34
# b = 80
# print("Is a greater than b: ", a > b)

# Task 5
# Write a python program to find an average of two numbers entered by the user.
# Solution
# a = int(input("Enter a number: "))
# b = int(input("Enter second number: "))
# print("Average of two numbers is: ", (a + b) / 2)

# Task 6
# Write a python program to calculate the square of a number entered by the user.
# Solution
# a = int(input("Enter a number: "))
# print("Square of a is: ", a ** 2)
