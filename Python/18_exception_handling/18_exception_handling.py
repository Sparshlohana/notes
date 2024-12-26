# What is exception handling in Python?
# Python has many built-in exceptions that are raised when your program encounters an error (something in the program goes wrong).
# When these exceptions occur, the Python interpreter stops the current process and passes it to the calling process until it is handled.

# The term "exception" is a short way of saying "exceptional event". An exception is an event that disrupts the normal flow of the program basically an error.

# We use the try-except-finally block to handle exceptions in Python.
# Let's understand the try-except-finally block with an example.
# a = int(input("Enter a number: "))
# print(a)

# Here, if a user enters a string instead of a number, the program will throw an error. The program will stop executing and it will crash.

# What if we don't want our program to crash or what if we want to show a message to the user that the input is invalid?
# We can use the try-catch block to handle this exception.

# try:
#     a = int(input("Enter a number: "))
#     print(a)
# except Exception as err:
#     print(err)

# In the above code, we are trying to convert the user input to an integer. If the user enters a string, the program will throw an error. The program will not crash. Instead, it will show the error message to the user.
# The except block will catch the error and print the error message.

# The except block will catch all the exceptions. If you want to catch a specific exception, you can specify the exception name in the except block.

# Here, the error is stored in the variable err which is of type Exception. You can print the error message using the err variable.
# You can also print a custom message in the except block.

# try:
#     a = int(input("Enter a number: "))
#     print(a)
# except:
#     print("Invalid input. Please enter a number.")

# Here, we are printing a custom message in the except block.
# This is our own custom message. You can print any message you want.

# When we use the try-except block, the program will not crash. It will catch the exception and continue executing the program.
# The program will not stop executing.
# If I print something after the try-except block, it will be executed

# try:
#     a = int(input("Enter a number: "))
#     print(a)
# except:
#     print("Invalid input. Please enter a number.")

# print("Hello")

# In the above code, the program will not crash. It will print the custom message and then print "Hello".


# We can even send a specific type of error.
# try:
#     a = int(input("Enter a number: "))
#     print(a)
# except ValueError:
#     print("Invalid input. Please enter a number.")

# In the above code, we are catching the ValueError exception. If the user enters a string, the program will throw a ValueError exception. The program will not crash. Instead, it will show the error message to the user.

# There are many built-in exceptions in Python like:
# 1. ValueError
# 2. ZeroDivisionError
# 3. FileNotFoundError
# 4. ImportError
# 5. TypeError
# 6. NameError
# 7. IndexError
# 8. KeyError
# 9. KeyboardInterrupt
# 10. MemoryError
# 11. OverflowError
# 12. SyntaxError
# 13. IndentationError
# 14. TabError
# 15. SystemError
# etc

# You can catch any of these exceptions in the except block.

# You can also catch multiple exceptions in the except block.

# try:
#     a = int(input("Enter a number: "))
#     print(a)
# except ValueError:
#     print("Invalid input. Please enter a number.")
# except ZeroDivisionError:
#     print("Division by zero is not allowed.")

# In the above code, we are catching two exceptions: ValueError and ZeroDivisionError. If the user enters a string, the program will throw a ValueError exception. If the user enters 0, the program will throw a ZeroDivisionError exception.

# You can also catch all the exceptions in a single except block.

# try:
#     a = int(input("Enter a number: "))
#     print(a)
# except Exception as err:
#     print(err)

# In the above code, we are catching all the exceptions in a single except block. If the user enters a string or 0, the program will throw an exception. The program will not crash. Instead, it will show the error message to the user.


# You can also use the else block with the try-except block.

# try:
#     a = int(input("Enter a number: "))
#     print(a)
# except Exception as err:
#     print(err)
# else:
#     print("No error")

# In the above code, the else block will be executed if there is no exception. If the user enters a number, the program will not throw an exception. The else block will be executed and it will print "No error".


# Raise an exception
# You can also raise an exception in Python using the raise keyword.

# a = int(input("Enter a number: "))
# if a < 5:
#     raise Exception("Number should be greater than 5")

# In the above code, we are raising an exception if the user enters a number less than 5. The program will throw an exception and it will show the error message to the user.

# Why would you raise an exception?
# You can raise an exception if you want to stop the program execution if a certain condition is met.
# You can raise an exception if you want to show a custom message to the user.

# You can also raise a specific type of exception.

# a = int(input("Enter a number: "))
# if a < 5:
#     raise ValueError("Number should be greater than 5")

# In the above code, we are raising a ValueError exception if the user enters a negative number. The program will throw a ValueError exception and it will show the error message to the user.


# Finally block
# The finally block is used to execute the code after the try-except block. The code inside the finally block will always be executed.
# It won't care if there is an exception or not. The code will be executed.

# try:
#     a = int(input("Enter a number: "))
#     print(a)
# except Exception as err:
#     print(err)
# finally:
#     print("Finally block")

# In the above code, the finally block will be executed after the try-except block. The code inside the finally block will always be executed. It won't care if there is an exception or not. The code will be executed and it will print "Finally block".


# But what if we remove the finally block and just use normal print statement after the try-except block?
# try:
#     a = int(input("Enter a number: "))
#     print(a)
# except Exception as err:
#     print(err)

# print("Finally block")

# In the above code, the program will still not crash. It will print the custom message and then print "Finally block".


# So what is the difference between the finally block and the normal print statement after the try-except block?
# The main difference comes when we are using functions.

# def divide(a, b):
#     try:
#         return a/b
#     except ZeroDivisionError:
#         return "Division by zero is not allowed."
#     finally:
#         print("Finally block")

# print(divide(10, 2))
# print(divide(10, 0))

# In the above code, we have a function divide that takes two arguments a and b. We are dividing a by b. If b is 0, the program will throw a ZeroDivisionError exception. The program will not crash. Instead, it will show the error message to the user. The finally block will be executed

# Here, if we use print statement after the try-except block, the print statement will not be executed. The program will not crash. It will show the error message to the user and then execute the finally block.
# As we are returning the value from the function, the print statement after the function call will not be executed.


# Custom Exception Classes
# You can also create your own custom exception classes in Python.
# class CustomError(Exception):
#     def __init__(self, message):
#         self.message = message
#         super().__init__(self.message)


# try:
#     raise CustomError("This is a custom exception")
# except CustomError as e:
#     print(e)


# In the above code, we have created a custom exception class CustomError that inherits from the Exception class. We have defined a constructor that takes a message as an argument. We are storing the message in the message variable. We are calling the constructor of the parent class using the super() function.
# We are raising the CustomError exception and passing the message "This is a custom exception". The program will throw a CustomError exception and it will show the error message to the user.
# The except block will catch the CustomError exception and print the error message.
# You can create your own custom exception classes and raise them in your program.


# Nested Try-Except Blocks
# You can also use nested try-except blocks in Python.
# try:
#     try:
#         num = int(input("Enter a number: "))
#         result = 10 / num
#     except ValueError:
#         print("Invalid input. Please enter a valid number.")
#     else:
#         print("Result is", result)
# except ZeroDivisionError:
#     print("Division by zero is not allowed.")

# In the above code, we have a nested try-except block. We are trying to convert the user input to an integer. If the user enters a string, the program will throw a ValueError exception. The program will not crash. Instead, it will show the error message to the user.
# If the user enters 0, the program will throw a ZeroDivisionError exception. The program will not crash. Instead, it will show the error message to the user.
# The else block will be executed if there is no exception. If the user enters a number, the program will not throw an exception. The else block will be executed and it will print the result.


# Task 1
# Write a program that divides two numbers entered by the user and handles a ZeroDivisionError if the denominator is zero.
# Solution
# try:
#     num1 = int(input("Enter the first number: "))
#     num2 = int(input("Enter the second number: "))
#     result = num1 / num2
# except ZeroDivisionError:
#     print("Division by zero is not allowed.")
# else:
#     print("Result is", result)


# Task 2
# Write a program that reads a file name from the user and handles a FileNotFoundError if the file does not exist.
# Solution
# try:
#     file = open(input("Enter the file name: "))
#     print(file.read())
#     file.close()
# except FileNotFoundError:
#     print("File not found.")
#     print("The file does not exist. Please check the file name and try again.")


# Task 3
# Write a program that converts a string to an integer and handles a ValueError if the input is not a valid number.
# Solution
# try:
#     num = int(input("Enter a number: "))
#     print(num)
# except ValueError:
#     print("Invalid input. Please enter a number.")


# Task 4
# Write a program that handles multiple exceptions: a ZeroDivisionError when dividing by zero and a ValueError when non-numeric input is provided.
# Solution
# try:
#     num1 = int(input("Enter the first number: "))
#     num2 = int(input("Enter the second number: "))
#     result = num1 / num2
# except ZeroDivisionError:
#     print("Division by zero is not allowed.")
# except ValueError:
#     print("Invalid input. Please enter a number.")


# Task 5
# Write a program that raises a custom exception if the user enters a negative number.
# Solution
# try:
#     num = int(input("Enter a number: "))
#     if num < 0:
#         raise Exception("Number should be greater than 0")
#     print(num)
# except Exception as e:
#     print(e)
