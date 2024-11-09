# Sometimes we want to execute a block of code only if a certain condition is met.
# Like if today is sunday and you want to order pizza, you will order pizza only if it is sunday.
# If it is not sunday, you will not order pizza.

# Another condition can be, if you have a balance of more than 50000 in your bank account, you will buy a new phone. If you have less than 50000, you will not buy a new phone.

# Sometimes, we want to play a game only if it is raining outside. If it is not raining, we will not play the game.

# All these are decisions which depend on a condition being met.
# In python programming too, we must be able to execute instructions based on conditions being met.

# If, else and elif
# If, else and elif statements are multiway decision-making statements.
# If statement is used to execute a block of code only if a certain condition is met.
# If the condition is not met, the block of code will not be executed.
# The syntax of the if statement is:
# if condition:
#     block of code
# If the condition is true, the block of code will be executed
# If the condition is false, the block of code will not be executed
# Eg.
# if 5 > 2:
#     print("5 is greater than 2")
# If we run this code, we will get "5 is greater than 2" as output

# If Else
# If else statement is used to execute a block of code if the condition is true and another block of code if the condition is false.
# The syntax of the if else statement is:
# if condition:
#     block of code
# else:
#     block of code
# If the condition is true, the first block of code will be executed
# If the condition is false, the second block of code will be executed
# Eg.
# if 5 > 2:
#     print("5 is greater than 2")
# else:
#     print("5 is not greater than 2")
# If we run this code, we will get "5 is greater than 2" as output.
# if 5 < 2:
#     print("5 is greater than 2")
# else:
#     print("5 is not greater than 2")
# If we run this code, we will get "5 is not greater than 2" as output.

# Elif
# Elif statement is used to check multiple conditions.
# The syntax of the elif statement is:
# if condition1:
#     block of code
# elif condition2:
#     block of code
# else:
#     block of code
# If condition1 is true, the first block of code will be executed
# If condition1 is false and condition2 is true, the second block of code will be executed
# If condition1 and condition2 are false, the third block of code will be executed
# Eg.
# a = 10
# b = 20
# if a > b:
#     print("a is greater than b")
# elif a < b:
#     print("a is less than b")
# else:
#     print("a is equal to b")
# If we run this code, we will get "a is less than b" as output.

# In python, indentation is very important. Indentation is used to define a block of code.
# In the above examples, the block of code is defined by indentation.
# If the condition is true, the block of code will be executed
# If the condition is false, the block of code will not be executed
# Indentation is very important in python. If the indentation is not correct, it will throw an error.
# Eg.
# if 5 > 2:
# print("5 is greater than 2")
# If we run this code, it will throw an error because the indentation is not correct.

# Relational Operators
# Relational operators are used to compare two values.
# In python, we have the following relational operators:
# 1. == : Equal to
# 2. != : Not equal to
# 3. > : Greater than
# 4. < : Less than
# 5. >= : Greater than or equal to
# 6. <= : Less than or equal to
# Eg.
# a = 10
# b = 20
# print(a == b) # False
# print(a != b) # True
# print(a > b) # False
# print(a < b) # True
# print(a >= b) # False
# print(a <= b) # True

# Logical Operators
# Logical operators are used to combine conditional statements.
# In python, we have the following logical operators:
# 1. and : Returns True if both statements are true
# 2. or : Returns True if one of the statements is true
# 3. not : Reverse the result, returns False if the result is true
# Eg.
# a = 10
# b = 20
# c = 30
# print(a < b and a < c) # True
# print(a < b and a > c) # False
# print(a < b or a > c) # True
# print(not(a < b and a < c)) # False

# Task 1
# Take input from user, if the age is greater than 18, print "You are eligible to vote", else print "You are not eligible to vote"
# Solution
# age = int(input("Enter your age: "))
# if age > 18:
#     print("You are eligible to vote")
# else:
#     print("You are not eligible to vote")

# Task 2
# Write a protocol to check if a number is even or odd
# Solution
# num = int(input("Enter a number: "))
# if num % 2 == 0:
#     print("The number is even")
# else:
#     print("The number is odd")

# Task 3
# Write a program to find the greatest of four numbers entered by the user.
# Solution
# a = int(input("Enter the first number: "))
# b = int(input("Enter the second number: "))
# c = int(input("Enter the third number: "))
# d = int(input("Enter the fourth number: "))
# if a > b and a > c and a > d:
#     print("The greatest number is: ", a)
# elif b > a and b > c and b > d:
#     print("The greatest number is: ", b)
# elif c > a and c > b and c > d:
#     print("The greatest number is: ", c)
# else:
#     print("The greatest number is: ", d)

# Task 4
# Write a program to find out whether a student has passed or failed if it requires a total of 40 % and at least 33 % in each subject to pass . Assume 3 subjects and take marks as an input from the user.
# Solution
# sub1 = int(input("Enter the marks of the first subject: "))
# sub2 = int(input("Enter the marks of the second subject: "))
# sub3 = int(input("Enter the marks of the third subject: "))
# total = sub1 + sub2 + sub3
# if sub1 >= 33 and sub2 >= 33 and sub3 >= 33 and total >= 120:
#     print("The student has passed")
# else:
#     print("The student has failed")

# Task 5
# A spam comment is defined as a text containing following keywords: "Make a lot of money", "buy now", "subscribe this", "click this". Write a program to detect these spams.
# Solution
# text = input("Enter the text: ")
# if "Make a lot of money" in text:
#     spam = True
# elif "buy now" in text:
#     spam = True
# elif "subscribe this" in text:
#     spam = True
# elif "click this" in text:
#     spam = True
# else:
#     spam = False

# if spam:
#     print("This text is spam")
# else:
#     print("This text is not spam")

# Task 6
# Write a program which finds out whether a given name is present in a list or not.
# Solution
# names = ["SRL", "SRL", "SRL"]
# name = input("Enter the name: ")
# if name in names:
#     print("The name is present in the list")
# else:
#     print("The name is not present in the list")

# Task 7

# Write a program to calculate the grade of a student based on the marks entered by the user. Follow this grading system:
# 90 - 100 : A+
# 80 - 89 : A
# 70 - 79 : B+
# 60 - 69 : B
# 50 - 59 : C+
# 40 - 49 : C
# 33 - 39 : D
# 0 - 32 : F
# Solution
# marks = int(input("Enter your marks: "))
# if marks >= 90 and marks <= 100:
#     print("Your grade is A+")
# elif marks >= 80 and marks <= 89:
#     print("Your grade is A")
# elif marks >= 70 and marks <= 79:
#     print("Your grade is B+")
# elif marks >= 60 and marks <= 69:
#     print("Your grade is B")
# elif marks >= 50 and marks <= 59:
#     print("Your grade is C+")
# elif marks >= 40 and marks <= 49:
#     print("Your grade is C")
# elif marks >= 33 and marks <= 39:
#     print("Your grade is D")
# else:
#     print("Your grade is F")

# Task 8
# Write a program to find out whether a given post is talking about "SRL" or not.
# Solution
# post = input("Enter the post: ")
# if "SRL" in post:
#     print("The post is talking about SRL")
# else:
#     print("The post is not talking about SRL")

# Task 9
# Write a program to find out whether a given number is less than 100 or not.
# Solution
# num = int(input("Enter a number: "))
# if num < 100:
#     print("The number is less than 100")
# else:
#     print("The number is not less than 100")

# Task 10
# Write a program to find out whether a given number is completely divisible by 7 or not.
# Solution
# num = int(input("Enter a number: "))
# if num % 7 == 0:
#     print("The number is completely divisible by 7")
# else:
#     print("The number is not completely divisible by 7")
