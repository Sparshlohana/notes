# Lexical Analysis
# Lexical analysis is also known as Tokenization.
# It is the process of converting the input into a sequence of tokens.
# In easy words, it is the process of breaking down source code into smaller components called tokens.
# It is the first phase of a interpreter or a compiler.

# Token refers to the smallest element of a program that is meaningful to the compiler or interpreter.
# They represent the atomic unit (smallest unit) of a program such as a keyword, identifier, literal, operator, etc.


# What is interpreter?
# An interpreter is a computer program that directly executes instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program.
# In simple words, an interpreter is a program that reads and executes code directly, line by line, without the need for compiling it into machine code.
# It converts the high-level programming code into an intermediate code which is understood by the machine, often by translating it into intermediate code and interpreting this intermediate form.


# What is the Python Interpreter?
# The Python interpreter is the program that runs Python scripts.
# Python is an interpreted language, which means that the Python program runs using the Python interpreter. Here, the source code is processed by the interpreter to execute the program.

# Key Points:
# 1. Lexical analysis: It is the first phase of a compiler or interpreter. It breaks the source code into tokens.
# 2. Parsing: It checks the syntax of the source code and builds a parse tree. This tree is also known as AST (Abstract Syntax Tree).
# 3. Compilation: Converts the AST into byte code (a lower level, platform-independent representation of the source code).
# 4. Execution: The byte code is executed by the Python Virtual Machine (PVM).


# Tokenization
# It is a process of converting a sequence of characters into a sequence of meaningful elements called tokens.
# The python code: x = 5 + 10
# Tokens: x, =, 5, +, 10


# How the Python Interpreter Tokenizes Source Code
# The Python interpreter tokenizes the source code using the following steps:
# 1. Input source code: The Python interpreter takes the source code as input. The source code is read as a sequence of characters.
# 2. Grouping: The interpreter groups the characters into tokens. It groups the characters based on the syntax of the programming language. These characters are grouped into tokens based on predefined rules (keywords, identifiers, literals, operators, etc.).
# 3. Classification: The interpreter classifies the tokens into different categories such as keywords, identifiers, literals, operators, etc. Each token is assigned a type, such as NAME for variable names or NUMBER for numeric literals.
# 4. Error handling: The interpreter checks for syntax errors in the source code. If it finds any syntax errors, it raises an exception and stops the execution of the program. Basically, if the source code contains invalid sequences, the tokenizer raises a syntax error.


# Token Types in Python
# Some commonly encountered token types include:
# NAME: Identifiers (e.g., variable or function names).
# NUMBER: Numeric literals (e.g., integers, floats).
# STRING: String literals(e.g., "hello", 'world').
# OP: Operators (e.g., +, -,=, *, etc.).
# KEYWORD: Reserved words in Python (e.g., if , while, def, etc.).
# INDENT/DEDENT: Indentation markers used for Python’s block structure.
# NEWLINE: End of a statement.
# ENDMARKER: Indicates the end of the token stream.
# ENCODING: Indicates the encoding of the source code. Example: utf-8.


# tokenize Module
# The tokenize module in Python is a part of the standard library that provides a tokenizer for Python source code.
# The module can also be used to inspect, analyze, or modify Python source code programmatically.

# Key Features of the tokenize Module
# 1. Tokenization of Python Source Code: Converts source code into a sequence of tokens.
# 2. Compatibility: Works with Python source code encoded in UTF-8 or other encodings.
# 3. Token Stream: Outputs tokens as named tuples(TokenInfo), which contain details about the token type, value, and location.
# 4. Inspection and Analysis: Useful for code analysis, linting tools, syntax highlighters, and more.

# Core Functions and classes of the tokenize module
# 1. tokenize.tokenize(readline):
# Tokenizes the input source code and returns a generator of tokens.
# The readline parameter reads one line at a time from the byte stream. (eg. a file of BytesIO object)
# BytesIO object is a stream implementation using an in-memory bytes buffer. In simple terms, it is used to read/write bytes data in memory.
# It returns an iterator that yields TokenInfo named tuples.

# TokenInfo Tuple: TokenInfo(type, string, start, end, line)
# type: Token type (e.g., NAME, NUMBER, STRING, etc.)
# string: The string value of the token.
# start: The starting position of the token in the source code.
# end: The ending position of the token in the source code.
# line: The line number where the token is found.

# import tokenize
# from io import BytesIO

# # Sample Python code
# code = b"x = 5 + 10"

# # Tokenize the code
# tokens = tokenize.tokenize(BytesIO(code).readline)

# # Print each token
# for token in tokens:
#     print(token)

# Output:
# TokenInfo(type=62 (ENCODING), string='utf-8', start=(0, 0), end=(0, 0), line='')
# TokenInfo(type=1 (NAME), string='x', start=(1, 0), end=(1, 1), line='x = 5 + 10')
# TokenInfo(type=54 (OP), string='=', start=(1, 2), end=(1, 3), line='x = 5 + 10')
# TokenInfo(type=2 (NUMBER), string='5', start=(1, 4), end=(1, 5), line='x = 5 + 10')
# TokenInfo(type=54 (OP), string='+', start=(1, 6), end=(1, 7), line='x = 5 + 10')
# TokenInfo(type=2 (NUMBER), string='10', start=(1, 8), end=(1, 10), line='x = 5 + 10')
# TokenInfo(type=4 (NEWLINE), string='', start=(1, 10), end=(1, 11), line='x = 5 + 10')
# TokenInfo(type=0 (ENDMARKER), string='', start=(2, 0), end=(2, 0), line='')


# 2. tokenize.generate_tokens(readline)
# Similar to tokenize.tokenize(), but compatible with Python 2.
# It returns an iterator that yields tokens as tuples.


# 3. tokenize.untokenize(iterable)
# Converts a sequence of tokens back into a Python source code string.
# Useful for programmatically modifying code and regenerating the source

# Example:
# import tokenize
# from io import BytesIO

# # Sample Python code
# code = b"x = 5 + 10"

# # Tokenize the code
# tokens = tokenize.tokenize(BytesIO(code).readline)

# # Convert tokens back to source code
# new_code = tokenize.untokenize(tokens).decode('utf-8')

# print(new_code)

# Output: x = 5 + 10


# 4. tokenize.detect_encoding(readline)
# Detects the encoding of the source code by analyzing the first line.
# Returns a tuple of (encoding, consumed_lines) where encoding is the detected encoding and consumed_lines is the number of lines consumed for encoding detection.

# Example:
# import tokenize
# from io import BytesIO

# # Sample Python code
# code = b"x = 5 + 10"

# # Detect the encoding of the code
# encoding, _ = tokenize.detect_encoding(BytesIO(code).readline)

# print(encoding)
# print(_)

# Output:
# utf-8
# [b'x = 5 + 10']

# This is more useful when reading source code of multiple lines.
# Example:
# import tokenize
# from io import BytesIO

# # Sample Python code
# code = b"""x = 5 + 10
# y = "Hello, World"
# z = 3.14
# """

# # Detect the encoding of the code
# encoding, _ = tokenize.detect_encoding(BytesIO(code).readline)

# print(encoding)
# print(_)


# Syntax Highlighting using tokenize
# import tokenize
# from io import BytesIO

# # Sample code
# code = b"def hello():\n    print('Hello, World!')"

# # Tokenize the code
# tokens = tokenize.tokenize(BytesIO(code).readline)

# # Syntax highlight
# for token in tokens:
#     if token.type == tokenize.NAME:
#         print(f"Keyword/Identifier: {token.string}")
#     elif token.type == tokenize.STRING:
#         print(f"String: {token.string}")
#     elif token.type == tokenize.OP:
#         print(f"Operator: {token.string}")


# Note: No need to learn the token types by heart. You can refer to the tokenize module documentation for a complete list of token types and their corresponding integer values.
# Don't learn anything, just try to understand what is happening in the code and its more than enough.
