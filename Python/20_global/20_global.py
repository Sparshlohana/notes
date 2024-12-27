# Global variables are those variables that are defined outside of the function, class, or block of code.
# They are directly accessible in the code throughout the program.

# The scope of global variables is the entire program, which means that they can be accessed from any part of the program (until they are not shadowed by a local variable).

# Example:
# a = 10

# This a is a global variable because it is defined outside of any function or class.

# We can access this variable from any part of the program.
# print(a)

# We will get the output: 10 without any error.

# Let's see an example of a global variable inside a function.
# a = 10

# def func():
#     print(a)

# func()

# Here, we accessed the global variable a inside the function func and printed it and got the output: 10.

# Now, what is shadowing?
# Shadowing is a concept in which a local variable has the same name as a global variable, and it hides the global variable.

# Example:
# a = 10

# def func():
#     a = 20
#     print(a)

# func()

# Here, we have a global variable a with a value of 10.
# We have a function func that has a local variable a with a value of 20.
# What do you think will be the output of this code?
# The output will be 20.
# This is because the local variable a shadows the global variable a.

# What if we print "a" outside the function?
# a = 10

# def func():
#     a = 20
#     print(a)

# func()
# print(a)

# What do you think will be the output of this code?
# The output will be:
# 20
# 10

# This is because the local variable a shadows the global variable a inside the function, but the global variable a is accessible outside the function.
# So outside the function, the global variable a remains unchanged and hence we get 10 as the output.

# global Keyword
# global is a keyword in Python that is used to declare a variable as a global variable inside a scope.
# This means that the variable is not a local variable but a global variable.

# Example:
# a = 10

# def func():
#     global a
#     a = 20
#     print(a)

# func()
# print(a)

# Here, we have a global variable a with a value of 10.
# We have a function func that has a local variable a with a value of 20.
# But we have declared the variable a as a global variable using the global keyword.
# This means that the local variable a will not shadow the global variable a.
# So, the value of the global variable a will be changed to 20.
# The output of this code will be:
# 20
# 20

# If you try to modify a global variable inside a function without using the global keyword, it will throw an error.
# Example:
# a = 10

# def func():
#     a = a + 10
#     print(a)

# func()

# This code will throw an error because we are trying to modify the global variable a inside the function without using the global keyword.

# Why does this happen?
# When we try to modify a variable inside a function, Python treats it as a local variable.
# So, when we try to modify a global variable inside a function without using the global keyword, Python treats it as a local variable and tries to find it in the local scope.
# Since it doesn't find it in the local scope, it throws an error.

# To modify a global variable inside a function, we need to use the global keyword to declare it as a global variable.
# Example:
# a = 10

# def func():
#     global a
#     a = a + 10
#     print(a)

# func()
# print(a)

# Here, we have declared the variable a as a global variable using the global keyword.

# So, when we try to modify the variable a inside the function, Python treats it as a global variable and changes its value.
