# What if we want to tell a variable that you should be of this type only?
# We can use types in Python to do that.

# Let's say we have a variable num, and we only want numbers to store in it. We can do it like this:
# num: int = 10
# print(num)

# What if I type a string in it?
num: int = 'Hello'
print(num)

# What do you think will happen?
# We get the output as 'Hello'. It means that Python does not restrict the type of variable.

# Here, The : int is a type hint in Python. Type hints are optional and do not enforce type checking at runtime.
