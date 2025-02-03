# Python code goes through several stages before it is executed. One of this stage involves converting the human readable code into intermediate, lower-level code called bytecode.
# This bytecode is what PVM (Python Virtual Machine) executes.


# What Is Python Bytecode?
# Python bytecode is an intermediate, platform-independent representation of your source code.
# It is not a machine code (i.e., it’s not directly executed by the hardware) but a set of instructions for the Python Virtual Machine (PVM).
# Bytecode acts as a bridge between your high-level Python code and the lower-level operations that need to be performed by the interpreter.
# By compiling to bytecode, Python gains the flexibility of executing code on different platforms without having to recompile the source code for each hardware type.


# Code Objects:
# The compiled bytecode is stored in “code objects” that include not only the bytecode itself but also metadata such as constants, variable names, and information about the source lines. These code objects are what the PVM executes.


# Converting the AST into Bytecode
# The transformation from source code to bytecode involves several steps:
# Lexical Analysis and Parsing:
# The Python interpreter starts by reading the source code and breaking it down into tokens(lexical analysis). It then parses these tokens into an Abstract Syntax Tree(AST). The AST is a tree representation of the syntactic structure of your code, where each node represents a construct in the language(e.g., expressions, statements, loops, etc.).


# Compilation from AST to Bytecode
# Once Python’s parser has generated an AST from your source code, the next step is to convert that tree into a sequence of bytecode instructions that the Python Virtual Machine (PVM) can execute. This is what we call the "compilation" phase, and it happens in the following stages:

# 1. AST Traversal
# The compiler uses a method known as recursive descent to navigate the AST.
# It This means it starts at the root of the tree (usually representing the entire module or function) and recursively visits each child node.
# Example:
# For a simple expression like x + y, the AST might have a node representing the binary operation(+) with two child nodes for x and y.

# While traversing, the compiler keeps track of the context. For example, it distinguishes between an expression that needs to be evaluated for its value versus one that simply performs an action(like an assignment).


# 2. Instruction Generation
# Each node in the AST is translated into one or more bytecode instructions. Here’s how some common constructs are handled:

# Variable Loading and Storing:
# When the AST node represents a variable(e.g., x), the compiler generates instructions like LOAD_FAST(to load a local variable) or LOAD_GLOBAL(for a global variable).
# For assignments, instructions such as STORE_FAST are generated.

# Arithmetic Operations:
# For an expression like x + y, after loading x and y, an instruction like BINARY_ADD is generated to perform the addition.
# Control Flow(Loops, Conditionals):
# In a loop (such as a for or while ), the compiler generates instructions to handle the loop initialization, condition checking, and jumping back to the start of the loop.
# For conditionals(like if statements), the compiler creates jump instructions(e.g., POP_JUMP_IF_FALSE) that determine whether to execute a block of code or skip it.

# Function Definitions and Calls:
# When a function is defined, a separate code object is created for the function body.
# When the function is later called, instructions like CALL_FUNCTION are generated to handle the invocation, and the corresponding code object is referenced.

# The sequence of bytecode instructions forms a kind of “recipe” for the PVM to execute. Each instruction is associated with an operation code (opcode) and , when necessary, an argument (like an index into a list of variable names or constants).

# 3. Creation of the Code Object
# Bundling the Bytecode:
# Once all AST nodes have been processed and their corresponding bytecode instructions generated, the compiler bundles these instructions into a code object. This code object encapsulates not only the raw bytecode but also:

# Constants:
# All literal values(numbers, strings, etc.) used in the code.

# Variable Names:
# The names of the local and global variables that appear in the code.

# Metadata:
# Information such as the source code line numbers, which is useful for debugging and error messages.

# Other Attributes:
# This might include details like the function’s arguments, the stack size required by the bytecode, and flags that describe specific properties of the code(for instance, whether it uses generators or coroutines).
# source_code = "x = 10\ny = 20\nprint(x + y)"
# code_object = compile(source_code, filename="<string>", mode="exec")
# exec(code_object)


# Using compile() in CPython:
# In CPython, this entire process is encapsulated in the built-in compile() function. When you pass either a string containing Python code or an AST to compile(), it returns a code object. This object is then ready to be executed by the PVM.
# source_code = "x = 10\ny = 20\nprint(x + y)"
# code_object = compile(source_code, filename="<string>", mode="exec")
# exec(code_object)

# In this example
# The compile() function takes the source code and processes it through parsing, AST generation, and compilation into a code object.
# The exec() function then takes that code object and runs the bytecode on the PVM.


# The Role of .pyc Files
# What Are .pyc Files?
# After Python compiles a module(a .py file), it saves the resulting bytecode in a file with a .pyc extension, usually stored in a __pycache__ directory.

# A typical .pyc file includes:
# Magic Number: A header that indicates the version of Python used to compile the file.
# Timestamp: Information on the last modification time of the source code. This helps Python decide if the bytecode is up-to-date.
# Serialized Code Object: The bytecode itself, along with the metadata produced during compilation.


# Tools for Inspecting Bytecode: The dis Module
# Python provides several tools to inspect and work with bytecode. The most commonly used is the built-in dis module.

# What Does the dis Module Do?
# Disassembling Bytecode:
# The dis module converts bytecode into a human-readable format, showing each instruction along with its argument values, offsets, and line numbers.

# Debugging and Optimization:
# It’s particularly useful for debugging, understanding the inner workings of your code, and sometimes for optimizing performance by analyzing what the interpreter actually does.


# How to Use the dis Module
# import dis

# def example_function(x, y):
#     return x + y

# # Disassemble the function's bytecode
# dis.dis(example_function)

# Output:
# 108           0 RESUME                   0

# 109           2 LOAD_FAST                0 (x)
#               4 LOAD_FAST                1 (y)
#               6 BINARY_OP                0 (+)
#              10 RETURN_VALUE

# Understanding the Output
# Instruction Offsets:
# The numbers on the left(e.g., 0, 2, 4, 6) are bytecode offsets indicating the position of each instruction in the bytecode sequence.

# Operation Names:
# Each instruction, such as LOAD_FAST, BINARY_ADD, and RETURN_VALUE, represents a specific operation that the PVM will execute.

# Arguments:
# Some instructions take arguments(like variable names or constants), which are shown next to the operation.
