# LoginPage
This repository contains a simple login and signup page built using **Node.js**, **Express**, and **MongoDB**. The application allows users to register and log in with a username, ID, and password, with user authentication handled through MongoDB.

## Features

- **Login Page**: Users can log in with their registered ID and password.
- **Signup Page**: New users can create an account by providing a username, ID, and password.
- **User Authentication**: After a successful login, users are redirected to the home page. Failed logins show appropriate error messages (e.g., "Wrong Password", "User Not Found").
- **Error Handling**: The app checks for existing users during signup and shows a "UserExists" message if the ID is already taken.
- **MongoDB Integration**: All user data is stored in MongoDB, including username, ID, and password.

## Tech Stack for Login and Signup Page

### Backend:
- **Node.js** with **Express**
  - **Description**: Handles server-side logic and routes for login, signup, and authentication.
  - **Usage**: Manages the API endpoints, user authentication, and session management.

### Database:
- **MongoDB**
  - **Description**: A NoSQL database used for storing user data.
  - **Usage**: Stores user information such as username, ID, and password.

### Frontend:
- **HTML, CSS, JavaScript**, and **EJS Templating Engine**
  - **Description**: The core technologies for building the front-end of the application.
  - **Usage**: 
    - HTML and CSS provide structure and styling for the login, signup, and home pages.
    - JavaScript adds interactivity and handles client-side logic.
    - EJS dynamically renders server-side data into HTML templates.

## UI Preview

![Screenshot 2024-09-17 103138](https://github.com/user-attachments/assets/f2ea3cf0-ccc4-4b8a-870f-3448c7cbb5f9)

![Screenshot 2024-09-17 103211](https://github.com/user-attachments/assets/6d2058d9-8681-4fe3-acb4-5ddef1b125e0)

![Screenshot 2024-09-17 103147](https://github.com/user-attachments/assets/33bbf9fa-2db8-43e3-8cb7-4abec6a07664)

## Creators

**Abhinav & Akash**
