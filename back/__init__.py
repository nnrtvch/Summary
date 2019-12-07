"""Add extention in env."""
from os import system


system("python -m venv venv")
system(r"venv\Scripts\activate")
system("pip install -r requirements.txt")
