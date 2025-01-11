# Whenever we install a package using pip, it is installed globally.
# This means that the package is installed in the system Python directory.
# This can lead to conflicts between different packages and different versions of the same package.

# Why to use virtual environment?
# 1. Different projects may require different versions of the same package.
# Example: Project A may require version 1.0 of a package, while Project B may require version 2.0 of the same package.

# 2. Different projects may require different packages.
# Example: Project A may require package X, while Project B may require package Y.

# 3. Virtual environments are isolated from the system Python directory.
# This means that packages installed in a virtual environment do not affect the system Python directory.


# If I install pandas in the system Python directory, it will install the latest version of pandas.
# But if I install pandas version 1.5.3 by using pip install pandas==1.5.3, it will install pandas version 1.5.3 in the system Python directory and the latest version will be overwritten.
# This can cause conflicts between different projects that require different versions of pandas.

# To avoid this, we can create a virtual environment for each project.


# How to create a virtual environment?
# We can create a virtual environment using the virtualenv package.

# To install the virtualenv package, run the following command:
# pip install virtualenv

# To create a virtual environment, run the following command:
# virtualenv myenv

# This will create a directory named myenv in the current directory.
# The virtual environment is stored in this directory.

# To activate the virtual environment, run the following command:
# .\myenv\Scripts\Activate.ps1


# Now let's install pandas in the virtual environment.
# To install pandas, run the following command:
# pip install pandas

# This will install pandas in the virtual environment, not in the system Python directory.

# To check which packages are installed in the virtual environment, run the following command:
# pip freeze

# To deactivate the virtual environment, run the following command:
# deactivate

# We can even create a list of required packages in a file named requirements.txt.
# To create a requirements.txt file, run the following command:
# pip freeze > requirements.txt

# To install the required packages from the requirements.txt file, run the following command:
# pip install -r requirements.txt

# This will install all the required packages in the virtual environment.

# Basically, like we have package.json in Node.js, we have requirements.txt in Python.
