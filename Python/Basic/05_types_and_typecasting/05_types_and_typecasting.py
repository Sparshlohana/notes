# What is typecasting and what are types?
# I already told you stuff like Integers, string, None, boolean, etc are called types.

# If you want to know the type of a variable, we can use the type() function.
# Eg.
# a = 10
# print(type(a))

# or we can just do this
# a = 10
# t = type(a)
# print(t)

# We will get the output as <class 'int'> which means the type of a is int.

# If I change the value of a to 10.5, the type of a will change to float.
# Eg.
# a = 10.5
# print(type(a))

# Now I will get the output as <class 'float'> which means the type of a is float.

# If I change the value of a to "SRL", the type of a will change to str.
# Eg.
# a = "SRL"
# print(type(a))

# Now I will get the output as <class 'str'> which means the type of a is str.

# By using Type function, you can know the type of a any variable.

# You can change the type of a variable by using typecasting.
# Eg.
# a = "10.5"

# Now the type of a is str. If I want to change the type of a to float, I can use the float() function.
# Eg.
# a = "10.5"
# b = float(a)
# print(b)

# We changed the type of a from str to float.

# If you are saying that we can change a string which is not possible to convert to a float, then you are wrong.
# Eg.
# a = "SRL"
# b = float(a)
# print(b)
# If you run this code, you will get an error. Because "SRL" is a string and it cannot be converted to a float.

# Lets go back to previous code
# a = "10.5"
# t = type(a)
# print(t)
# b = float(a)
# print(b)
# print(type(b))

# If you run this code, you will get the output as <class 'str'>, 10.5, <class 'float'>.
# We changed the type of a from str to float.
# str(31) => "31"
# int("32") => 32
# float(32) => 32.0
