# Escape sequence character
# Escape sequence character is a character that is preceded by a backslash (\) character. It is used to represent certain whitespace characters in string.

# There are following escape sequence characters in python:
# \n : New Line
# \t : Tab
# \r : Carriage Return
# \b : Backspace
# \f : Form Feed
# \v : Vertical Tab
# \\ : Backslash
# \' : Single Quote
# \" : Double Quote
# \a : ASCII Bell
# \ooo : ASCII character with octal value ooo (1 to 3 digits)
# \xhh : ASCII character with hex value hh (1 to 2 digits)
# \uhhhh : Unicode character with 16-bit hex value hhhh (4 digits)
# \Uhhhhhhhh : Unicode character with 32-bit hex value hhhhhhhh (8 digits)

# Examples:
# 1. New Line (\n)
# print("Hello\nWorld")
# Output:
# Hello
# World

# 2. Tab (\t)
# print("Hello\tWorld")
# Output:
# Hello   World

# 3. Carriage Return (\r)
# Carriage return is used to move the cursor to the beginning of the line.
# print("Hello\rWorld")
# Output:
# World

# 4. Backspace (\b)
# Backspace is used to delete the last character.
# print("Hello\bWorld")
# Output:
# HellWorld

# 5. Form Feed (\f)
# Form feed is used to move the cursor to the next page.
# print("Hello\fWorld")
# Output:
# Hello
# World

# 6. Vertical Tab (\v)
# Vertical tab is used to move the cursor to the next line.
# print("Hello\vWorld")
# Output:
# Hello
# World

# 7. Backslash (\\)
# Backslash is used to represent a backslash character.
# print("Hello\\World")
# Output:
# Hello\World

# 8. Single Quote (\')
# Single quote is used to represent a single quote character.
# print("Hello\'World")
# Output:
# Hello'World

# 9. Double Quote (\")
# Double quote is used to represent a double quote character.
# print("Hello\"World")
# Output:
# Hello"World

# 10. ASCII Bell (\a)
# ASCII Bell is used to produce a beep sound. It is used to alert the user. It is not supported in all systems
# print("Hello\aWorld")
# Output:
# HelloWorld

# 11. ASCII character with octal value ooo (1 to 3 digits) (\ooo)
# print("Hello\110World")
# Output:
# HelloHWorld

# 12. ASCII character with hex value hh (1 to 2 digits) (\xhh)
# print("Hello\x48World")
# Output:
# HelloHWorld

# 13. Unicode character with 16-bit hex value hhhh (4 digits) (\uhhhh)
# print("Hello\u0048World")
# Output:
# HelloHWorld

# 14. Unicode character with 32-bit hex value hhhhhhhh (8 digits) (\Uhhhhhhhh)
# print("Hello\U00000048World")
# Output:
# HelloHWorld

# You can use escape sequence characters in a string to represent certain whitespace characters.


# Task 1.
# Write a python program to display a user entered name followed by Good Morning using input() function.
# Solution:
# name = input("Enter your name: ")
# print(name + "\nGood Morning")

# Task 2.
# Write a python program to fill in a letter template given below with name and date.
# letter = '''
#   Dear <|Name|>,
#   You are selected!
#   <|Date|>
#  '''
# Solution:
# name = input("Enter your name: ")
# date = input("Enter date: ")
# letter = '''
#   Dear <|Name|>,
#   You are selected!
#   <|Date|>
#  '''
# letter = letter.replace("<|Name|>", name)
# letter = letter.replace("<|Date|>", date)
# print(letter)

# Task 3.
# Write a program to detect double spaces in a string.
# Solution:
# text = "This is a string with double  spaces"
# doubleSpaces = text.find("  ")
# print(doubleSpaces) # 27

# Task 4.
# Replace double spaces in Task 3 with single space.
# Solution:
# text = "This is a string with double  spaces"
# doubleSpaces = text.replace("  ", " ")
# print(doubleSpaces) # This is a string with double spaces

# Task 5.
# Write a program to format the following letter using escape sequence characters.
# letter = "Dear Sparsh, Python is a nice language, isn't it?"
# Solution:
# letter = "Dear Sparsh,\n\tPython is a nice language,\n\tisn't it?"
# print(letter)
# Output:
# Dear Sparsh,
#     Python is a nice language,
#     isn't it?
