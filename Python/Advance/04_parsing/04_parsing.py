# Abstract Syntax Tree
# An abstract syntax tree (AST) is a way of representing the syntax of a programming language as a hierarchical tree-like structure.

# Once tokenization is done, the next step is to parse the tokens into an abstract syntax tree (AST).
# The AST is a tree-like representation of the syntactic structure of the source code.

# The parser is responsible for building the AST. The parser reads the tokens and constructs the AST based on the grammar of the programming language.
# Example: a = b + 5
# The parser will construct the following AST:
#     =
#    / \
#   a   +
#      / \
#     b   5

# The AST is a tree-like structure where each node represents a part of the source code.


# AST Construction
# The interpreter uses the AST to execute the program. The interpreter traverses the AST and executes the code represented by the nodes.
# During parsing:
# It matches tokens against grammar rules.
# It creates nodes in the tree for each syntactic construct.


# Structure and Components of an AST
# 1. Nodes
# Each node represents a construct in the program, such as
# Expressions: e.g., arithmetic (+, -), logical (and, or).
# Statements: e.g., assignment, loops, conditionals

# 2. Edges
# Edges connect parent nodes to child nodes, showing the hierarchical relationship. For example
# An assignment node connects to its left-hand side(LHS) variable and right-hand side(RHS) expression.

# 3. Leaf Nodes
# Leaf nodes are terminal elements(e.g., variable names, constants, literals).


# Tools to Explore ASTs(Python ast Module)
# Python provides the ast module to interact with and manipulate Abstract Syntax Trees.
# a. Parsing Python Code
# The ast.parse() function converts Python source code into an AST.
# Example:
# import ast

# code = "x = y + 2"
# tree = ast.parse(code)
# print(ast.dump(tree, indent=4))

# Output:
# Module(
#     body=[
#         Assign(
#             targets=[
#                 Name(id='x', ctx=Store())],
#             value=BinOp(
#                 left=Name(id='y', ctx=Load()),
#                 op=Add(),
#                 right=Constant(value=2)))],
#     type_ignores=[])


# Here, in the above program ast.parse() function converts the Python code into an AST.
# The ast.dump() function prints the AST in a readable format.

# If we just try to print the tree, it will print the memory address of the tree object.
# print(tree)
# Output: <_ast.Module object at 0x7f3c2f1b6e50>


# b. AST Nodes:
# Each node in the AST corresponds to a class in the ast module, such as:
# ast.Module: Represents the whole program.
# ast.Assign: Represents an assignment statement.
# ast.BinOp: Represents a binary operation.


# c. Modifying and Generating Code
# The ast module provides functions to modify and generate code from the AST.
# You can also manipulate the AST and regenerate code:
# new_tree = ast.fix_missing_locations(tree)
# compiled_code = compile(new_tree, filename="<ast>", mode="exec")
# exec(compiled_code)


# d. AST Visualization
# Libraries like astpretty or external tools can help visualize the AST in a more readable format:
# import ast
# import astpretty

# 1. Define the input code
# code = """
# x = y + 2
# z = x * y
# if z > 10:
#     print("Large number")
# else:
#     print("Small number")
# """

# # 2. Parse the source code into an AST
# tree = ast.parse(code)

# 3. Visualize the AST using astpretty
# print("AST Visualization:")
# astpretty.pprint(tree, indent=4)
