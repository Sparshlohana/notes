# Operators in Python
# Operators are used to perform operations on variables and values.
# Python has the following types of operators:
# 1. Arithmetic Operators
# 2. Assignment Operators
# 3. Comparison Operators
# 4. Logical Operators
# 5. Identity Operators
# 6. Membership Operators
# 7. Bitwise Operators

# Arithmetic Operators
# Arithmetic operators are used to perform mathematical operations like addition, subtraction, multiplication, etc.
# There are 7 arithmetic operators in Python: +, -, *, /, %, **, //
# + : Addition - Adds two operands - Eg. a + b
# - : Subtraction - Subtracts two operands - Eg. a - b
# * : Multiplication - Multiplies two operands - Eg. a * b
# / : Division - Divides the first operand by the second operand - Eg. a / b
# % : Modulus - Returns the remainder when the first operand is divided by the second operand - Eg. a % b
# ** : Exponentiation - Raises the first operand to the power of the second operand - Eg. a ** b
# // : Floor Division - Returns the quotient when the first operand is divided by the second operand - Eg. a // b

# Assignment Operators
# Assignment operators are used to assign values to variables.
# There are 8 assignment operators in Python: =, +=, -=, *=, /=, %=, **=, //=
# = : Assigns the value of the right operand to the left operand - Eg. a = 10
# += : Adds the right operand to the left operand and assigns the result to the left operand - Eg. a += 10 is equivalent to a = a + 10
# -= : Subtracts the right operand from the left operand and assigns the result to the left operand - Eg. a -= 10 is equivalent to a = a - 10
# *= : Multiplies the right operand with the left operand and assigns the result to the left operand - Eg. a *= 10 is equivalent to a = a * 10
# /= : Divides the left operand by the right operand and assigns the result to the left operand - Eg. a /= 10 is equivalent to a = a / 10
# %= : Takes the modulus of the left operand with the right operand and assigns the result to the left operand - Eg. a %= 10 is equivalent to a = a % 10
# **= : Raises the left operand to the power of the right operand and assigns the result to the left operand - Eg. a **= 10 is equivalent to a = a ** 10
# //= : Performs floor division on the left operand with the right operand and assigns the result to the left operand - Eg. a //= 10 is equivalent to a = a // 10

# Comparison Operators
# Comparison operators are used to compare two values.
# There are 6 comparison operators in Python: ==, !=, >, <, >=, <=
# == : Equal - Returns True if both operands are equal - Eg. a == b
# != : Not Equal - Returns True if both operands are not equal - Eg. a != b
# > : Greater Than - Returns True if the left operand is greater than the right operand - Eg. a > b
# < : Less Than - Returns True if the left operand is less than the right operand - Eg. a < b
# >= : Greater Than or Equal To - Returns True if the left operand is greater than or equal to the right operand - Eg. a >= b
# <= : Less Than or Equal To - Returns True if the left operand is less than or equal to the right operand - Eg. a <= b

# Logical Operators
# Logical operators are used to combine conditional statements.
# There are 3 logical operators in Python: and, or, not
# and : Returns True if both statements are true - Eg. a < 10 and b < 20
# or : Returns True if one of the statements is true - Eg. a < 10 or b < 20
# not : Reverse the result - Returns False if the result is true - Eg. not(a < 10 and b < 20)

# Identity Operators
# Identity operators are used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location.
# There are 2 identity operators in Python: is, is not
# is : Returns True if both variables are the same object - Eg. a is b
# is not : Returns True if both variables are not the same object - Eg. a is not b

# Membership Operators
# Membership operators are used to test if a sequence is presented in an object.
# There are 2 membership operators in Python: in, not in
# in : Returns True if a sequence with the specified value is present in the object - Eg. a in b
# not in : Returns True if a sequence with the specified value is not present in the object - Eg. a not in b

# Bitwise Operators
# Bitwise operators are used to perform bitwise operations on integers.
# There are 6 bitwise operators in Python: &, |, ^, ~, <<, >>
# & : AND - Sets each bit to 1 if both bits are 1 - Eg. a & b
# | : OR - Sets each bit to 1 if one of the bits is 1 - Eg. a | b
# ^ : XOR - Sets each bit to 1 if only one of the bits is 1 - Eg. a ^ b
# ~ : NOT - Inverts all the bits - Eg. ~a
# << : Left Shift - Shift left by pushing zeros in from the right and let the leftmost bits fall off - Eg. a << b
# >> : Right Shift - Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off - Eg. a >> b

# Now let's see some examples of variables and operators in Python.
# Assigning values to variables
# a = 10
# b = 20
# c = a + b
# print(c)

# Assigning multiple values to multiple variables
# a = 5-3
# b = 6
# b += 3    # b = b + 3
# b -= 3    # b = b - 3
# b *= 3    # b = b * 3
# b /= 3    # b = b / 3
# b %= 3    # b = b % 3
# b **= 3   # b = b ** 3
# b //= 3   # b = b // 3
# print(a, b)

#  Comparison Operators
# a = 10
# b = 20
# print(a == b)
# print(a != b)
# print(a > b)
# print(a < b)
# print(a >= b)
# print(a <= b)

# The difference between == and = is that == is a comparison operator and = is an assignment operator.

# Logical Operators
# a = 10
# b = 20
# print(a < 10 and b < 20)
# Output: False
# print(a < 10 or b < 20)
# Output: True
# print(not(a < 10 and b < 20))
# Output: True

# Try other operators on your own.
