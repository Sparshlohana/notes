# Recursion is a function which calls itself.

# It is used to directly use a mathematical formula as a function.

# Lets understand with a factorial example.
# Factorial of a number is the product of all positive integers less than or equal to that number.
# Factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120
# Factorial of 4 is 4 * 3 * 2 * 1 = 24
# Factorial of 3 is 3 * 2 * 1 = 6
# Factorial of 2 is 2 * 1 = 2
# Factorial of 1 is 1
# Factorial of 0 is also 1

# Factorial of a number can be calculated using recursion as follows:
# Factorial of n = n * (n-1) * (n-2) * (n-3) * .... * 1
# Factorial of n = n * Factorial of (n-1)

# def factorial(n):
#     if n == 0 or n == 1:
#         return 1
#     else:
#         return n * factorial(n-1)


# print(factorial(5))

# This works as follows:
# factorial(5)
# 5 * factorial(4)
# 5 * 4 * factorial(3)
# 5 * 4 * 3 * factorial(2)
# 5 * 4 * 3 * 2 * factorial(1)
# 5 * 4 * 3 * 2 * 1

# Recursion is a powerful concept but it is not recommended to use it for large numbers as it takes a lot of time and memory.

# Recursion can be used to solve problems like:
# 1. Factorial
# 2. Fibonacci series
# 3. Tower of Hanoi
# 4. Binary search
# 5. Merge sort
# 6. Quick sort
# 7. Graph problems
# 8. Tree problems
# 9. Backtracking problems
# 10. Dynamic programming problems
# 11. Divide and conquer problems
# 12. Greedy problems

# Task 1:
# Write a program using functions to find greatest of three numbers.
# Solution
# def greatest(a, b, c):
#     if a > b and a > c:
#         return a
#     elif b > a and b > c:
#         return b
#     else:
#         return c

# print(greatest(10, 20, 30))

# Task 2:
# Write a python program using function to convert Celsius to Fahrenheit.
# Solution
# def celsius_to_fahrenheit(c):
#     return (c * 9/5) + 32

# print(celsius_to_fahrenheit(0))

# Task 3:
# How do you prevent python print() function to print a new line at the end.
# Solution
# Use end parameter of print function.
# print("Hello", end="")
# print("World")

# Task 4:
# Write a recursive function to calculate the sum of first n natural numbers.
# Solution
# def sum_of_natural_numbers(n):
#     if n == 1:
#         return 1
#     else:
#         return n + sum_of_natural_numbers(n-1)


# print(sum_of_natural_numbers(5))

# Task 5:
# Write a python function which converts inches to cms.
# Solution
# def inches_to_cms(inches):
#     return inches * 2.54

# print(inches_to_cms(10))

# Task 6:
# Write a python function to remove a given word from a list and strip it at the same time.
# Solution
# def remove_word(words, word):
#     return [w.strip() for w in words if w.strip() != word]

# print(remove_word(["apple", "banana", "orange", "apple", "grapes"], "apple"))

# Task 7:
# Write a python function to print multiplication table of a given number.
# Solution
# def multiplication_table(n):
#     for i in range(1, 11):
#         print(n, "x", i, "=", n*i)

# multiplication_table(5)

# Task 8:
# Write a python function to calculate the power of a number.
# Solution
# def power(base, exp):
#     if exp == 0:
#         return 1
#     else:
#         return base * power(base, exp-1)

# print(power(2, 3))

# Task 9:
# Write a python function to calculate the sum of digits of a number.
# Solution
# def sum_of_digits(n):
#     if n == 0:
#         return 0
#     else:
#         return n % 10 + sum_of_digits(n // 10)

# print(sum_of_digits(123))

# Task 10:
# Write a python function to calculate the sum of first n even numbers.
# Solution
# def sum_of_even_numbers(n):
#     if n == 0:
#         return 0
#     else:
#         return 2*n + sum_of_even_numbers(n-1)

# print(sum_of_even_numbers(5))

# Task 11:
# Write a python function to perform fibonacci series using recursion.
# Solution
# def fibonacci(n):
#     if n == 0:
#         return 0
#     elif n == 1:
#         return 1
#     else:
#         return fibonacci(n-1) + fibonacci(n-2)

# print(fibonacci(5))
