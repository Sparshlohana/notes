# Functions of Strings in Python

# 1. Length
# The len() function returns the length of a string:
# a = "Hello, World!"
# print(len(a)) # 13

# 2. EndsWith
# The endswith() method returns True if the string ends with the specified value, otherwise False.
# a = "Hello, World!"
# print(a.endswith("!")) # True
# print(a.endswith("d")) # False
# print(a.endswith("World!")) # True

# The endswith() method is case sensitive.

# 3. StartsWith
# The startswith() method returns True if the string starts with the specified value, otherwise False.
# a = "Hello, World!"
# print(a.startswith("Hello")) # True
# print(a.startswith("World")) # False
# print(a.startswith("Hello, World!")) # True

# The startswith() method is case sensitive.

# 4. Capitalize
# The capitalize() method returns a string where the first character is upper case.
# a = "hello, world!"
# print(a.capitalize()) # Hello, world!

# 5. Count
# The count() method returns the number of times a specified value appears in the string.
# a = "Hello, World!"
# print(a.count("l")) # 3

# 6. Find
# The find() method finds the first occurrence of the specified value.
# The find() method returns -1 if the value is not found.
# a = "Hello, World!"
# print(a.find("World")) # 7
# print(a.find("world")) # -1

# 7. Replace
# The replace() method replaces a specified phrase with another specified phrase.
# a = "Hello, World!"
# print(a.replace("World", "Python")) # Hello, Python!

# 8. Split
# The split() method splits the string into substrings if it finds instances of the separator.
# a = "Hello, World!"
# print(a.split(",")) # ['Hello', ' World!']

# 9. Strip
# The strip() method removes any whitespace from the beginning or the end.
# a = " Hello, World! "
# print(a.strip()) # Hello, World!

# 10. Lower
# The lower() method returns the string in lower case.
# a = "Hello, World!"
# print(a.lower()) # hello, world!

# 11. Upper
# The upper() method returns the string in upper case.
# a = "Hello, World!"
# print(a.upper()) # HELLO, WORLD!

# 12. Title
# The title() method returns the string in title case.
# a = "hello, world!"
# print(a.title()) # Hello, World!

# 13. SwapCase
# The swapcase() method returns a string where all the upper case letters are lower case and vice versa.
# a = "Hello, World!"
# print(a.swapcase()) # hELLO, wORLD!

# 14. IsAlpha
# The isalpha() method returns True if all the characters are alphabet letters (a-z).
# a = "Hello"
# print(a.isalpha()) # True
# a = "Hello, World!"
# print(a.isalpha()) # False

# 15. IsNumeric
# The isnumeric() method returns True if all the characters are numeric (0-9).
# a = "12345"
# print(a.isnumeric()) # True
# a = "Hello, World!"
# print(a.isnumeric()) # False

# 16. IsDigit
# The isdigit() method returns True if all the characters are digits, otherwise False.
# a = "12345"
# print(a.isdigit()) # True
# a = "Hello, World!"
# print(a.isdigit()) # False

# The main difference is that isnumeric() recognizes a broader range of numeric characters(like fractions and superscripts), while isdigit() only checks for standard decimal digits(0-9).

# 17. IsLower
# The islower() method returns True if all the characters are in lower case, otherwise False.
# a = "hello, world!"
# print(a.islower()) # True
# a = "Hello, World!"
# print(a.islower()) # False

# 18. IsUpper
# The isupper() method returns True if all the characters are in upper case, otherwise False.
# a = "HELLO, WORLD!"
# print(a.isupper()) # True
# a = "Hello, World!"
# print(a.isupper()) # False

# 19. IsTitle
# The istitle() method returns True if the string follows the rules of a title, otherwise False.
# a = "Hello, World!"
# print(a.istitle()) # True
# a = "Hello, world!"
# print(a.istitle()) # False

# 20. IsSpace
# The isspace() method returns True if all the characters in the string are whitespaces, otherwise False.
# a = " "
# print(a.isspace()) # True
# a = "Hello, World!"
# print(a.isspace()) # False

# 21. Join
# The join() method takes all items in an iterable and joins them into one string.
# a = ("Hello", "World!")
# print(" ".join(a)) # Hello World!

# There are many more methods available for strings in Python. Study them on your own