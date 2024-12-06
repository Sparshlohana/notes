# What if I tell you to print the numbers from 1 to 5?
# You will write the following code:
# print(1)
# print(2)
# print(3)
# print(4)
# print(5)

# But what if I tell you to print the numbers from 1 to 10000?
# You can't really write 10000 print statements.

# To solve this problem, we use loops.
# A loop is a block of code that repeats a group of statements a specified number of times.

# The same task can be done using a loop.
# for i in range(1, 6):
#     print(i)

# The range() function generates a sequence of numbers.
# "i" is a variable that takes the value of each element in the sequence.
# The loop will run 5 times because the range() function generates a sequence of 5 numbers from 1 to 5.

# We have studied indexing, loops are also based on indexing.
# The range() function generates a sequence of numbers starting from 0 by default.
# for i in range(5):
#     print(i)
# The range() function can also take a starting value.

# Basically, the range() function generates a sequence of numbers from the starting value to the ending value - 1.
# Here, the starting value is 0 and the ending value is 5.
# So, the sequence will be 0, 1, 2, 3, 4.

# Make sure, you are using correct indentation or you will get an error.

# There are two types of loops in Python:
# 1. while loop
# 2. for loop

# While Loop
# The while loop is used to execute a block of statements repeatedly until a given condition is true.
# The syntax of the while loop is:
# while condition:
#     statement(s)

# The condition is evaluated before executing the statements inside the loop.
# If the condition is true, the statements inside the loop are executed.
# This process continues until the condition becomes false.

# Let's print the numbers from 1 to 5 using a while loop.
# i = 1
# while i < 6:
#     print(i)
#     i += 1

# i+=1 is equivalent to i = i + 1.
# The variable i is initialized to 1 and then incremented.
# The condition is checked before executing the statements inside the loop.
# If the condition is true, the statements inside the loop are executed.
# The value of i is incremented by 1.
# This process continues until the value of i becomes 6.
# The loop will run 5 times because the condition is i < 6.

# We can even do this:
# i = 1
# while i <= 5:
#     print(i)
#     i += 1
# The loop will run 5 times because the condition is i <= 5.

# While using a while loop, make sure the condition becomes false at some point.
# If the condition is always true, the loop will run infinitely.
# This is called an infinite loop.
# i = 1
# while i >= 1:
#     print(i)
#     i += 1

# This is an infinite loop because the condition i >= 1 is always true.
# The loop will run infinitely.
# To stop the loop, press Ctrl + C.

# To print a list using a while loop:
# l1 = [10, 20, 30, 40, 50]
# i = 0
# while i < len(l1):
#     print(l1[i])
#     i += 1

# For Loop
# The for loop is used to iterate over a sequence (list, tuple, string) or other iterable objects.
# l1 = [10, 20, 30, 40, 50]
# for i in l1:
#     print(i)

# This loop will run 5 times because the list l1 has 5 elements. It will print each element of the list.

# Range Function
# The range() function generates a sequence of numbers.
# The syntax of the range() function is:
# range(start, stop, step)
# start: The starting value of the sequence.
# stop: The ending value of the sequence.
# step: The difference between each number in the sequence.

# The range() function generates a sequence of numbers starting from 0 by default.
# for i in range(5):
#     print(i)
# The sequence will be 0, 1, 2, 3, 4.

# The range() function can also take a starting value.
# for i in range(1, 6):
#     print(i)
# The sequence will be 1, 2, 3, 4, 5.

# The range() function can also take a step value.
# for i in range(1, 6, 2):
#     print(i)
# The sequence will be 1, 3, 5.
# Here, the step value is 2 so 2 and 4 are skipped.

# String using for loop
# s = "Hello"
# for i in s:
#     print(i)
# The loop will run 5 times because the string s has 5 characters. It will print each character of the string.
# Output: H e l l o
# All the characters are printed on a new line.

# Tuple using for loop
# t1 = (10, 20, 30, 40, 50)
# for i in t1:
#     print(i)
# The loop will run 5 times because the tuple t1 has 5 elements. It will print each element of the tuple.

# For loop with else
# The else block is executed when the loop is finished.
# l1 = [10, 20, 30, 40, 50]
# for i in l1:
#     print(i)
# else:
#     print("Loop is finished")
# The loop will run 5 times because the list l1 has 5 elements. It will print each element of the list.
# After the loop is finished, the else block will be executed
# Output: 10 20 30 40 50 Loop is finished

# Break Statement
# The break statement is used to exit the loop.
# l1 = [10, 20, 30, 40, 50]
# for i in l1:
#     if i == 30:
#         break
#     print(i)
# The loop will run 3 times because the list l1 has 5 elements. It will print each element of the list.
# When the value of i becomes 30, the break statement is executed and the loop is exited.
# Output: 10 20

# Continue Statement
# The continue statement is used to skip the current iteration and continue with the next iteration.
# l1 = [10, 20, 30, 40, 50]
# for i in l1:
#     if i == 30:
#         continue
#     print(i)
# The loop will run 5 times because the list l1 has 5 elements. It will print each element of the list.
# When the value of i becomes 30, the continue statement is executed and the current iteration is skipped.
# Output: 10 20 40 50
# The value 30 is skipped.

# Pass Statement
# The pass statement is used to do nothing.
# l1 = [10, 20, 30, 40, 50]
# for i in l1:
#     if i == 30:
#         pass
#     print(i)
# The loop will run 5 times because the list l1 has 5 elements. It will print each element of the list.
# When the value of i becomes 30, the pass statement is executed and nothing happens.
# Output: 10 20 30 40 50
# The value 30 is printed. The pass statement does nothing.

# Why is the pass statement used?
# The pass statement is used when a statement is required syntactically but you do not want any command or code to execute.
# It is used as a placeholder.
# The pass statement is a null operation; nothing happens when it executes.

# lets see where can we use pass statement
# for i in range(5):

# a = 10
# print(a)

# If we run this code, we will get an error because the for loop is empty.
# The pass statement can be used to avoid this error.
# for i in range(5):
#     pass

# a = 10
# print(a)

# Now no error will occur because the pass statement is used in the for loop.


# Task 1
# Write a python program to print multiplication table of a given number using for loop.
# Solution
# num = int(input("Enter a number: "))
# for i in range(1, 11):
#     print(num, "x", i, "=", num*i)

# Task 2
# Write a python program to greet all the persons in a list using for loop.
# l1 = ["John", "Alice", "Bob", "David"]
# Solution
# for i in l1:
#     print("Hello ", i)

# Task 3
# Attempt task 1 using while loop.
# Solution
# num = int(input("Enter a number: "))
# i = 1
# while i < 11:
#     print(num, "x", i, "=", num*i)
#     i += 1

# Task 4
# Write a program to find whether a number is prime or not.
# Solution
# num = int(input("Enter a number: "))
# if num > 1:
#     for i in range(2, num):
#         if num % i == 0:
#             print(num, "is not a prime number.")
#             break
#     else:
#         print(num, "is a prime number.")

# Task 5
# Write a program to find the sum of first n natural numbers using while loop.
# Solution
# n = int(input("Enter a number: "))
# sum = 0
# i = 1
# while i <= n:
#     sum += i
#     i += 1
# print("Sum of first", n, "natural numbers is", sum)

# Task 6
# Write a program to find the factorial of a number.
# Solution
# num = int(input("Enter a number: "))
# fact = 1
# for i in range(1, num + 1):
#     fact *= i
# print("Factorial of", num, "is", fact)

# Task 7
# Write a program to print the following star pattern.
# *
# **
# ***
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(1, n+1):
#     print("*" * i)

# Task 8
# Write a program to print the following star pattern.
# *
# ***
# *****
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(1, n+1):
#     print("*" * (2*i-1))

# Task 9
# Write a program to print the following star pattern.
#     *
#    ***
#   *****
#  *******
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(1, n+1):
#     print(" " * (n-i) + "*" * (2*i-1))

# Task 10
# Write a program to print the following star pattern.
# *******
#  *****
#   ***
#    *
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(n, 0, -1):
#     print(" " * (n-i) + "*" * (2*i-1))

# Task 11
# Write a program to print the following star pattern.
#     *
#    ***
#   *****
#  *******
#   *****
#    ***
#     *
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(1, n+1):
#     print(" " * (n-i) + "*" * (2*i-1))
# for i in range(n-1, 0, -1):
#     print(" " * (n-i) + "*" * (2*i-1))

# In this program, we have used two for loops.
# The first for loop is used to print the upper half of the pattern.
# The second for loop is used to print the lower half of the pattern.
# The first for loop runs from 1 to n.
# The second for loop runs from n-1 to 1.
# The first for loop prints the upper half of the pattern.
# The second for loop prints the lower half of the pattern.

# Task 12
# Write a program to print the following star pattern.
#     *
#    * *
#   * * *
#  * * * *
# * * * * *
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(1, n+1):
#     print(" " * (n-i) + "* " * i)

# Task 13
# Write a program to print the following star pattern.
# * * * * *
#  * * * *
#   * * *
#    * *
#     *
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(n, 0, -1):
#     print(" " * (n-i) + "* " * i)

# Task 14
# Write a program to print the following star pattern.
# ***
# * *
# ***
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(1, n+1):
#     if i == 1 or i == n:
#         print("*" * 3)
#     else:
#         print("* *")

# Task 15
# Write a program to print the following star pattern.
# * * * * *
# *       *
# *       *
# *       *
# * * * * *
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(1, n + 1):
#     if i == 1 or i == n:
#         print("* " * n)
#     else:
#         print("* " + "  " * (n - 2) + "*")

# Task 16
# Write a program to print the following star pattern.
# * * * * *
# * * * *
# * * *
# * *
# *
# For n = input from user.
# Solution
# n = int(input("Enter a number: "))
# for i in range(n, 0, -1):
#     print("* " * i)

# Task 17
# Write a program to print multiplication table of n using for loops in reversed order.
# Solution
# num = int(input("Enter a number: "))
# for i in range(10, 0, -1):
#     print(num, "x", i, "=", num*i)
