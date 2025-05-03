# Squid Consultancy Registration Form Tutorial

This repository contains a complete tutorial for building a professional registration form using **HTML**, **CSS**, **JavaScript**, **Node.js**, and **MongoDB**. The form is designed for freelancers, startups, FAANG, or well-established companies to collect inquiries with a modern, responsive UI and secure backend storage. The project includes client-side validation, a glassmorphism design, and MongoDB integration for data persistence.

## Table of Contents
- [Project Overview](#project-overview)
- [System Design](#system-design)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [1. Install VS Code and Extensions](#1-install-vs-code-and-extensions)
  - [2. Clone the Repository](#2-clone-the-repository)
  - [3. Install Node.js and npm](#3-install-nodejs-and-npm)
  - [4. Install Project Dependencies](#4-install-project-dependencies)
  - [5. Set Up MongoDB](#5-set-up-mongodb)
  - [6. Configure Environment Variables (.env)](#6-configure-environment-variables-env)
  - [7. Configure .gitignore](#7-configure-gitignore)
  - [8. Run the Server](#8-run-the-server)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)
  - [Frontend (index.html)](#frontend-indexhtml)
  - [Backend (server.js)](#backend-serverjs)
  - [Environment Variables (.env)](#environment-variables-env)
  - [Git Ignore (.gitignore)](#git-ignore-gitignore)
- [Security Features](#security-features)
- [Deployment Considerations](#deployment-considerations)
- [License](#license)

## Project Overview
The registration form allows users to submit inquiries to Squid Consultancy, capturing details like company name, personal information, services of interest, and consent for communication. The frontend uses a vibrant gradient background with glassmorphism effects, powered by HTML, CSS, and JavaScript with the Choices.js library for dropdowns. The backend, built with Node.js and Express, handles form submissions and stores data in MongoDB. Environment variables secure sensitive data, and a .gitignore file ensures unnecessary files are excluded from version control.

This tutorial is beginner-friendly yet robust enough for professional use, making it ideal for:
- **Freelancers**: Learn to build and deploy a full-stack form.
- **Startups**: Create a scalable inquiry system.
- **FAANG/Established Companies**: Implement secure, maintainable code with best practices.

## System Design
The project follows a client-server architecture:
- **Frontend**: A single `index.html` file containing HTML, CSS (with glassmorphism and responsive design), and JavaScript (with Choices.js for dropdowns and form validation).
- **Backend**: A Node.js server (`server.js`) using Express to handle API requests and Mongoose to interact with MongoDB.
- **Database**: MongoDB Atlas for cloud-based data storage.
- **Environment**: `.env` file for secure MongoDB credentials.
- **Version Control**: `.gitignore` to exclude sensitive and generated files.

## Prerequisites
Before starting, ensure you have:
- A computer with internet access.
- A GitHub account.
- A MongoDB Atlas account (free tier available).
- Basic knowledge of HTML, CSS, JavaScript, and Node.js.

## Setup Instructions

### 1. Install VS Code and Extensions
1. **Download and Install VS Code**:
   - Visit [code.visualstudio.com](https://code.visualstudio.com/) and download Visual Studio Code for your operating system.
   - Follow the installation instructions.

2. **Install Recommended Extensions**:
   - Open VS Code and go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
   - Install the following extensions:
     - **ESLint** (by Dirk Baeumer): For JavaScript linting.
     - **Prettier** (by Prettier): For code formatting.
     - **Live Server** (by Ritwick Dey): For live preview of HTML (optional).
     - **MongoDB for VS Code** (by MongoDB): For MongoDB integration.
     - **GitLens** (by Eric Amodio): For Git integration.

3. **Configure VS Code**:
   - Enable auto-save: Go to `File > Auto Save`.
   - Format on save: Add the following to your VS Code settings (`Ctrl+,` or `Cmd+,`):
     ```json
     {
       "editor.formatOnSave": true,
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
     ```

### 2. Clone the Repository
1. **Create a Repository on GitHub**:
   - Log in to [GitHub](https://github.com/).
   - Create a new repository (e.g., `squid-registration-form`).
   - Copy the repository URL.

2. **Clone the Repository**:
   - Open a terminal in VS Code (`Ctrl+`` or `Cmd+``).
   - Run:
     ```bash
     git clone <your-repository-url>
     cd squid-registration-form
     ```

### 3. Install Node.js and npm
1. **Download and Install Node.js**:
   - Visit [nodejs.org](https://nodejs.org/) and download the LTS version (e.g., 18.x or 20.x as of May 2025).
   - Install Node.js, which includes npm (Node Package Manager).

2. **Verify Installation**:
   - In the VS Code terminal, run:
     ```bash
     node -v
     npm -v
     ```
   - Ensure you see version numbers (e.g., `v20.12.2` for Node.js, `10.5.0` for npm).

### 4. Install Project Dependencies
1. **Initialize a Node.js Project**:
   - In the project folder, run:
     ```bash
     npm init -y
     ```
   - This creates a `package.json` file.

2. **Install Dependencies**:
   - Install Express, Mongoose, CORS, and dotenv:
     ```bash
     npm install express mongoose cors dotenv
     ```
   - This creates a `node_modules` folder and a `package-lock.json` file.

3. **Update package.json**:
   - Open `package.json` and ensure it includes:
     ```json
     {
       "name": "squid-registration-form",
       "version": "1.0.0",
       "description": "Registration form for Squid Consultancy",
       "main": "server.js",
       "scripts": {
         "start": "node server.js"
       },
       "dependencies": {
         "cors": "^2.8.5",
         "dotenv": "^16.0.3",
         "express": "^4.18.2",
         "mongoose": "^7.0.0"
       }
     }
     ```

### 5. Set Up MongoDB
1. **Create a MongoDB Atlas Account**:
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and sign up.
   - Create a free cluster (e.g., name it `analyticswithharry`).

2. **Create a Database and User**:
   - In MongoDB Atlas, create a database named `squid_registration_database`.
   - Add a user (e.g., username: `adminharry`, password: replace with your password).
   - Copy the connection string, which looks like:
     ```
     mongodb+srv://adminharry:<password>@analyticswithharry.tlxrjvr.mongodb.net/squid_registration_database?retryWrites=true&w=majority&appName=analyticswithharry
     ```
     Replace `<password>` with your actual password.

3. **Allow Network Access**:
   - In MongoDB Atlas, go to `Network Access` and add `0.0.0.0/0` to allow connections from anywhere (for development only).

### 6. Configure Environment Variables (.env)
1. **Create a .env File**:
   - In the project root, create a file named `.env`.
   - Add your MongoDB connection string using the format provided by MongoDB Atlas:
     ```
     MONGODB_URI=mongodb+srv://adminharry:<password>@analyticswithharry.tlxrjvr.mongodb.net/squid_registration_database?retryWrites=true&w=majority&appName=analyticswithharry
     ```
   - Replace `adminharry` with your MongoDB username, `<password>` with your password, and ensure the cluster name (`analyticswithharry.tlxrjvr`) and database name (`squid_registration_database`) match your setup.
   - The `.env` file securely stores sensitive information, preventing it from being hardcoded in `server.js`.

2. **Load Environment Variables**:
   - The `dotenv` package in `server.js` loads the `MONGODB_URI` variable:
     ```javascript
     require('dotenv').config();
     const mongoURI = process.env.MONGODB_URI;
     ```
   - This ensures the MongoDB connection string is accessed securely.

3. **Secure the .env File**:
   - Never commit the `.env` file to GitHub. It is excluded from version control via the `.gitignore` file (see below).

### 7. Configure .gitignore
1. **Create a .gitignore File**:
   - In the project root, create a file named `.gitignore`.
   - Add the following to exclude sensitive and generated files:
     ```
     # Node.js
     node_modules/
     package-lock.json

     # Environment variables
     .env

     # OS-generated files
     .DS_Store
     Thumbs.db

     # Editor-specific files
     .vscode/
     ```
   - **Explanation**:
     - `node_modules/`: Excludes the folder containing installed dependencies, as they can be reinstalled using `npm install`.
     - `package-lock.json`: Excludes the lock file to avoid version conflicts (optional; include it if you want consistent dependency versions).
     - `.env`: Excludes the environment file to protect sensitive data like MongoDB credentials.
     - `.DS_Store`, `Thumbs.db`: Excludes OS-specific files generated by macOS and Windows.
     - `.vscode/`: Excludes VS Code settings to keep the repository clean.

2. **Verify .gitignore**:
   - Run `git status` to ensure `node_modules`, `.env`, and other ignored files are not tracked.
   - If ignored files appear, run `git rm -r --cached <file-or-folder>` (e.g., `git rm -r --cached .env`) and commit the changes.

### 8. Run the Server
1. **Start the Server**:
   - In the VS Code terminal, ensure you're in the project folder.
   - Run:
     ```bash
     node server.js
     ```
   - You should see:
     ```
     Server running on port 3000
     MongoDB connected
     ```

2. **Test the Application**:
   - Open a browser and navigate to `http://localhost:3000`.
   - The registration form should load with a vibrant gradient background and glassmorphism design.
   - Fill out the form and submit it. Check MongoDB Atlas to verify that the data is saved.

3. **Debugging**:
   - If the server fails to start, check:
     - MongoDB connection string in `.env` (ensure username, password, and cluster details are correct).
     - Installed dependencies (`node_modules` folder).
     - Port conflicts (e.g., another app using port 3000).
   - Use `console.log` statements or VS Code's debugger for troubleshooting.

## File Structure
```
squid-registration-form/
├── index.html        # Frontend: HTML, CSS, JavaScript
├── server.js         # Backend: Node.js with Express and Mongoose
├── .env              # Environment variables (MongoDB URI)
├── .gitignore        # Git ignore file
├── package.json      # Project metadata and dependencies
├── package-lock.json # Dependency versions
├── node_modules/     # Installed dependencies
├── LICENSE           # Project license
├── content-guard.js  # Optional: Frontend protection script
├── front-end-protection-js.txt # Optional: Protection script notes
```

## How It Works

### Frontend (index.html)
- **HTML**: A single file with a form containing fields for company name, personal details, services, and consent. Uses semantic HTML and ARIA attributes for accessibility.
- **CSS**: Implements a glassmorphism design with a vibrant gradient background. Uses the Poppins font and Choices.js for dropdown styling. Responsive for mobile devices.
- **JavaScript**:
  - Initializes Choices.js for the country dropdown.
  - Handles form validation (e.g., email format, required fields, phone number).
  - Sanitizes inputs to prevent XSS attacks.
  - Submits form data to the backend via a `POST` request to `/submit`.
  - Includes content protection (disables right-click, DevTools, etc.).
- **External Libraries**:
  - Choices.js for dropdowns (CDN).
  - Google Fonts for Poppins.

### Backend (server.js)
- **Express**: Sets up a server to handle HTTP requests.
- **Mongoose**: Connects to MongoDB and defines an `Inquiry` schema for form data.
- **CORS**: Enables cross-origin requests for local development.
- **Routes**:
  - `GET /`: Serves `index.html`.
  - `POST /submit`: Validates and saves form data to MongoDB.
- **Validation**: Checks required fields, email format, and phone number format.

### Environment Variables (.env)
- **Purpose**: Stores sensitive configuration data, such as the MongoDB connection string, to keep it out of the source code.
- **Content**: Contains the `MONGODB_URI` variable in the format:
  ```
  MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority&appName=<appName>
  ```
  - `<username>`: Your MongoDB Atlas username (e.g., `adminharry`).
  - `<password>`: Your MongoDB Atlas password (replace with your password). Special characters must be URL-encoded (e.g., `!` becomes `%21` if required).
  - `<cluster>`: Your cluster name (e.g., `analyticswithharry.tlxrjvr`).
  - `<database>`: The database name (e.g., `squid_registration_database`).
  - `<appName>`: The application name (e.g., `analyticswithharry`).
- **Usage**: Loaded by `server.js` using the `dotenv` package to securely connect to MongoDB.
- **Security**: Excluded from version control via `.gitignore` to prevent accidental exposure of credentials.

### Git Ignore (.gitignore)
- **Purpose**: Specifies files and folders that Git should ignore to prevent them from being tracked or committed to the repository.
- **Content**: Includes:
  - `node_modules/`: Dependency folder, as dependencies can be reinstalled with `npm install`.
  - `package-lock.json`: Lock file for dependency versions (optional exclusion; include if consistent versions are needed).
  - `.env`: Environment file with sensitive data like MongoDB credentials.
  - `.DS_Store`, `Thumbs.db`: OS-specific files from macOS and Windows.
  - `.vscode/`: VS Code configuration files to avoid cluttering the repository.
- **Importance**: Prevents sensitive data (e.g., `.env`) and unnecessary files (e.g., `node_modules`) from being shared publicly on GitHub.

## Security Features
- **Frontend**:
  - Input sanitization to prevent XSS.
  - CSRF token placeholder (implement a proper CSRF solution in production).
  - Content protection (disables right-click, DevTools, copy-paste, etc.).
- **Backend**:
  - Environment variables for sensitive data.
  - Input validation for required fields, email, and phone number.
  - MongoDB connection with secure credentials.
- **Database**:
  - MongoDB Atlas with user authentication.
  - Network access restrictions (configure for production).

## Deployment Considerations
- **Hosting**:
  - Use Netlify, Vercel, or Heroku for frontend and backend deployment.
  - Replace the `server.js` backend with serverless functions (e.g., Netlify Functions) for scalability.
- **MongoDB**:
  - Secure the MongoDB Atlas cluster by limiting network access to your server's IP.
- **Environment Variables**:
  - Set `.env` variables in your hosting platform's dashboard.
- **CSRF Protection**:
  - Implement a proper CSRF token mechanism (e.g., using `csurf` middleware).
- **HTTPS**:
  - Ensure your deployment uses HTTPS for secure data transmission.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

**Built by Analytics with Harry | Copyright © 2025 Squid Consultancy Group**