# Walrus operator
# The walrus operator ":=" is a new operator in Python 3.8.
# It is also called the assignment expression.

# The walrus operator is used to assign values to variables as part of a larger expression.
# This operator as its name suggests, looks like the eyes and tusks of a walrus.

# Example:
# if (n := 1 > 2):
#     print(f"n is greater than 2 and n = {n}")
# else:
#     print(f"n is less than 2 and n = {n}")

# Output:
# n is less than 2 and n = False

# How it works:
# 1. n := 1 > 2
# The expression 1 > 2 evaluates to False because 1 is not greater than 2.
# The walrus operator (:=) assigns the result (False) to the variable n.
# So, n gets the value False.

# 2. The condition if (n := 1 > 2):
# This condition checks the truthiness (True or False) of the variable n.
# Since n is False, the if block does not execute. Instead, the else block runs.

# 3. The else block prints the message "n is less than 2 and n = False".


# We can even take input from the user and assign it to a variable using the walrus operator.

# Example:
# if (n := int(input("Enter a number: ")) > 2):
#     print(f"n is greater than 2 and n = {n}")
# else:
#     print(f"n is less than 2 and n = {n}")

#  Output:
# Enter a number: 5
# n is greater than 2 and n = True

# How it works:
# input("Enter a number: ") prompts the user to enter a number as a string.
# int(...) converts the input string into an integer.
# The expression int(...) > 2 evaluates whether the entered number is greater than 2:
# If the number is greater than 2, the result is True.
# Otherwise, the result is False.
# The walrus operator ( :=) assigns the result (True or False) to the variable n.

# The walrus operator is also used to assign values to variables in list, while loops, and other expressions.

# Example:
# if (n := len([1, 2, 3, 4, 5])) > 3:
#     print(f"List is too long and has {n} elements")

# Output:
# List is too long and has 5 elements
# How it works:
# len([1, 2, 3, 4, 5]) calculates the length of the list [1, 2, 3, 4, 5] which is 5.
# The walrus operator (:=) assigns the result (5) to the variable n.
# The condition if (n > 3) checks whether the length of the list is greater than 3.
# Since the length is 5, the if block executes and prints the message "List is too long and has 5 elements".

# Did you notice that when we first used the walrus operator, we got the assigned value as true/false. But now in the last example, we got the assigned value as the length of the list. Why so?

# The walrus operator assigns the value of the expression to the variable. In the first example, the expression was a comparison (1 > 2) which resulted in a boolean value (True or False). In the last example, the expression was a function call (len([1, 2, 3, 4, 5])) which resulted in an integer value (5).


# Task 1
# Write a program that takes a number from the user and checks whether it is an even number or not.
# Solution:
# if (n := int(input("Enter a number: "))) % 2 == 0:
#     print(f"{n} is an even number")
# else:
#     print(f"{n} is an odd number")


# Task 2
# Write a program that takes a string from the user and checks whether it is a palindrome or not.
# Solution:
# if (s := input("Enter a string: ")) == s[::-1]:
#     print(f"{s} is a palindrome")
# else:
#     print(f"{s} is not a palindrome")


# Task 3
# Write a program that takes a list of numbers from the user and prints the sum of the list.
# Solution:
# if (lst := list(map(int, input("Enter a list of numbers: ").split()))):
#     print(f"Sum of the list is {sum(lst)}")
# else:
#     print("Empty list")


# Task 4
# Write a program that takes a list of numbers from the user and prints the maximum number in the list.
# Solution:
# if (lst := list(map(int, input("Enter a list of numbers: ").split()))):
#     print(f"Maximum number in the list is {max(lst)}")
# else:
#     print("Empty list")


# Task 5
# Find the First Positive Number in a List
# Solution:
# lst = [-20, 10, 30, -40, 50]
# if (n := next((x for x in lst if x > 0), None)):
#     print(f"The first positive number is {n}")


# Task 6
# Write a program that takes a number from the user and checks whether it is positive, negative, or zero.
# Solution:
# if (n := int(input("Enter a number: "))) > 0:
#     print(f"{n} is positive")
# elif n < 0:
#     print(f"{n} is negative")
# else:
#     print(f"{n} is zero")


# Task 7
# Find the Length of a String
# Solution:
# if (s := input("Enter a string: ")):
#     print(f"The length of the string is {len(s)}")
# else:
#     print("Empty string entered")


# Task 8
# Check if a List is Empty or Not
# Solution:
# if (lst := list(map(int, input("Enter a list of numbers: ").split()))):
#     print(f"The list is not empty and has {len(lst)} elements")
# else:
#     print("Empty list")


# Task 9
# Write a program that takes a string from the user and counts the number of vowels(a, e, i, o, u) in the string.
# Solution:
# if (s := input("Enter a string: ")):
#     vowels = "aeiou"
#     count = sum(1 for char in s if char in vowels)
#     print(f"The string has {count} vowels")
# else:
#     print("Empty string entered")


# Task 10
# Write a program that takes a list of numbers from the user and finds the first repeated element (an element that appears more than once). If no repeated elements are found, print a message.
# Solution:
# lst = list(map(int, input("Enter a list of numbers: ").split())
# if (n := next((x for x in lst if lst.count(x) > 1), None)):
#     print(f"The first repeated element is {n}")
# else:
#     print("No repeated elements found")
