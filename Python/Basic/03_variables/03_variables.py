# What is a variable?
# for now lets just write 
# a = 10
# b = 20
# print(a + b)

# If we run this code, we will get 30 as output

# Here we assigned a value 10 to a and 20 to b and we added a and b and printed the result.
# Here, a and b are called variables. Variables are used to store data in memory.
# Variable is a container just like you have containers for storing stuff in your house, like you store clothes in a wardrobe, books in a bookshelf, etc.
# Similarly, variables are used to store data.
# Here a and b are containers that store the values 10 and 20 respectively.

# Basically what a variable does is, it stores the data in memory and gives it a name.

# In technical terms, A variable is a name given to a memory location in a program. It is used to store data in memory.
# Eg.
# a = 10
# b = "SRL"
# c = 10.5

# In the above example, a, b, and c are variables. 10, "SRL", and 10.5 are the values stored in the variables a, b, and c respectively.
# In b, we have used double quotes because it is a string. if we don't use double quotes, it will throw an error.

# Identifiers in Python
# An identifier is a name given to entities like class, functions, variables, etc. It helps to differentiate one entity from another.
# Basically a name given to a variable, function, class, etc is called an identifier.

# Data Types
# In Python, every value has a data type. Data types are used to specify the type of data.
# In Python, we have the following data types:
# 1. int : Integer - Whole Number - Eg. 10
# 2. float : Floating Point Number - Decimal Number - Eg. 10.5
# 3. complex : Complex Number - Number with real and imaginary part, Eg. 5 + 3j
# 4. str : String - Sequence of characters - Eg. "SRL"
# 5. list : List - Ordered collection of items - Eg. [10, 20, 30]
# 6. tuple : Tuple - Ordered collection of items - Eg. (10, 20, 30)
# 7. dict : Dictionary - Unordered collection of items - Eg. {"name": "SRL", "age": 25}
# 8. set : Set - Unordered collection of unique items - Eg. {10, 20, 30}
# 9. bool : Boolean - True or False - Eg. True, False
# 10. None : None Type - Represents the absence of a value - Eg. None

# Python is an amazing language that automatically identifies the data type of the variable.

# Rules for defining a variable
# 1. A variable name must start with a letter or the underscore character.
# 2. A variable name cannot start with a number.
# 3. A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _).
# 4. Variable names are case-sensitive (name, Name, and NAME are three different variables).
# 5. A variable name cannot contain spaces.
# 6. A variable name should not be a keyword.

# Keywords are the reserved words in Python. We cannot use a keyword as a variable name, function name, or any other identifier.
# There are 33 keywords in Python. They are:
# False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield

# If you start a variable name with a number or use a keyword as a variable name or use a space in a variable name or use any special character in a variable name, it will throw an error.
# Eg. 
# 1a = 10
# class = 10
# first name = "SRL"
# first-name = "SRL"
# @srl = 10
# These all will throw an error as they are not following the rules of defining a variable.

# One more thing to note is that you can assign multiple values to multiple variables in a single line.
# Eg.
# a, b, c = 10, 20, 30
# print(a)
# print(b)
# print(c)
# Here we assigned 10 to a, 20 to b, and 30 to c in a single line.

# You can also assign the same value to multiple variables in a single line.
# Eg.
# a = b = c = 10
# print(a)
# print(b)
# print(c)
# Here we assigned 10 to a, b, and c in a single line.

