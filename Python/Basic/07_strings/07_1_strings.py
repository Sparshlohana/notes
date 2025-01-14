# Anything which is written in double quotes is a string in python
# String is a data type in python
# String is a sequence of characters enclosed in single quotes or double quotes or even triple quotes.

# name = "SRL"
# "SRL" is a string

# In python, you can use single quotes or double quotes to represent a string.
# name = 'SRL'
# name = "SRL"
# Both are same.

# You can also use triple quotes to represent a string.
# name = """SRL"""
# name = '''SRL'''
# name = '''S
# R
# L'''
# print(name)

# If you are using triple quotes, you can write the string in multiple lines.

# NOTE: String are immutable in all programming languages. You can't change the value of a string once it is created.
# If you want to change any single character in a string, you can't do that. You have to create a new string.

# SLICING

# There is a concept of slicing in python. You can slice a string using the index.
# Index starts from 0.
# name = "SRL"
# print(name[0]) # S
# print(name[1]) # R
# print(name[2]) # L
# print(name[3]) # IndexError: string index out of range

# The index in a string starts from 0 and goes till length of string - 1. To slice a string, we use following syntax:
# sl = name[indexStart:indexEnd]
# indexStart includes the first index
# indexEnd excludes the last index (last index is not included)

# name = "SRL"
# print(name[0:2]) # SR

# Reverse slicing
# name = "SRL"
# print(name[-1]) # L
# print(name[-2]) # R
# print(name[-3]) # S
# print(name[-4]) # IndexError: string
# print(name[-4:-1]) # SR

# print(name[:3]) : this means start from 0th index and go till 3rd index
# print(name[1:]) : this means start from 1st index and go till end of string (length of string)

# To get length of characters present in a string, you can use len() function.
# name = "SRL"
# print(len(name)) # 3

# Slice with skip value
# word = "HelloWorld"
# print(word[0:5]) # Hello
# print(word[0:5:1]) # Hello
# print(word[0:5:2]) # Hlo
# print(word[0:5:3]) # Hl

# Explanation: word[0:5:2] means start from 0th index and go till 5th index with a skip value of 2.
# word[0:5:2] = H e l l o W o r l d
#               0 1 2 3 4 5 6 7 8 9
#               H l o

# word[0:5:3] = H e l l o W o r l d
#               0 1 2 3 4 5 6 7 8 9
#               H l

# word[0:5:1] = H e l l o W o r l d
#               0 1 2 3 4 5 6 7 8 9
#               H e l l o

# word[0:5] = H e l l o W o r l d
#             0 1 2 3 4 5 6 7 8 9
#             H e l l o
