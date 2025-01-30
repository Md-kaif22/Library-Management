# Library Management System

This project is a full-stack library management web application. Below are the instructions for setting up the development environment and running the project.

## Prerequisites

Make sure the following are installed on your system:

- **Node.js** (>= 14.0.0)
- **npm** (>= 6.0.0)
- **Python** (>= 3.8)
- **pip** (>= 21.0)
- **PostgreSQL** (or SQLite for testing)

## Installation

## Backend Setup (Django/Python):
1. Clone the repository:
   ```bash
   git clone https://github.com/Md-kaif22/Library-Management.git
   cd Library-Management
   
# Set up a virtual environment (optional but recommended):
python3 -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate

# Install the dependencies:
pip install -r requirements.txt

# Run the Django server:
python manage.py runserver
The backend will be running on http://127.0.0.1:8000.

# Frontend Setup (Angular):
### Navigate to the frontend folder:
cd books-frontend

### Install the dependencies:
npm install

### Run the Angular development server:
ng serve
The frontend will be running on http://127.0.0.1:4200.

# LINTING
### Install ESLint dependencies (if not already done)
npm install --save-dev eslint @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template

### b. Run linting
ng lint

Notes:
The backend and frontend are running on separate ports (8000 for Django and 4200 for Angular).
Make sure to have Python 3+ and Node.js installed on your system.
For database setup, ensure that the db.sqlite3 file is present or run migrations if necessary:

