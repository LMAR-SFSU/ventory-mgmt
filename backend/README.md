# Backend service

This directory contains a REST API developed to allow our React app to request data from the backend without directly interacting with our PostgreSQL database.

# Technologies used

|  Category  |      Name      |                     Description                           |
| :--------: | :------------: | :-------------------------------------------------------- |
| Language   |    Python 3    | Main programming language                                 |
| Dependency |     Django     | Framework to create web applications using Python         |
| Dependency | Django REST framework | Framework to build REST APIs in a Django project.  |
____________________________________________________________________________________________


# Endpoints

|  Domain  |    Type    |      URI      |  Description  |
| :------: | :--------: | :-----------: | :------------ |
|   Test   |    GET     |      api/     | Test endpoint |
_________________________________________________________

# Getting started

## Prerequisites
- Install latest version of Python 3 in your local machine
- Install the latest version of VSCode in your local machine

## Installation

1. Go to `backend` directory:
```
cd backend
```
2. Create a virtual environment (will create a `.venv` directory):
- Note: Instead of relying and installing several system-wide Python libraries, we'll use an isolated virtual environment.
```
python3 -m venv .venv
```
3. Activate the virtual environment:
```
source .venv/bin/activate
```
4. To check if your virtual environment is activated (the `.venv` folder must be in the path):
```
which python
```
5. To deactivate the virtual environment (not needed right now), run the following command:
```
deactivate
```
6. With the virtual environment activated, install the dependencies from the `requirements.txt` file by running the following `pip` command:
```
pip install -r requirements.txt
```
7. Within `~/backend/ventorymgmt/` directory, run the Django project using the following command:
```
python manage.py runserver
```
8. Lastly, in your browser, go to `http://127.0.0.1:8000/` and you'll see a sample HTTP response with mock data.

## Troubleshooting

At VSCode, if you get the `report missing imports` warning message from `Pylance`, which blocks Python Intellisense, check the following link:

- Link: https://stackoverflow.com/a/71918838

You'll have to create the `.vscode` directory at the root of the repository, then create a `settings.json` file, and add the following code (update it with your Python path in your virtual environment):
```
{
    "python.defaultInterpreterPath": "your_python_path_in_venv"
}
```

With this change, VSCode will be able to find the dependencies from your Python path.
