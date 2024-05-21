# AP-ORG-CLONE Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Tech Stack](#tech-stack)
4. [Run Locally](#run-locally)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)


<br>


## Introduction
The AP Org Clone is a project designed to replicate the functionalities of the original AP Org website. This document provides an overview of the code structure and instructions on how to set up and run the project locally.  

The website is hosted [here](https://ap-org-clone.onrender.com/).
<br>
<br>

## Project Structure
### Folder Structure

ap-org-clone/<br>
├─ .eslintrc.cjs<br>
├─ .gitignore<br>
├─ index.html<br>
├─ package-lock.json<br>
├─ package.json<br>
├─ postcss.config.js<br>
├─ public/<br>
├─ README.md<br>
└─ src/<br>
├─ App.jsx<br>
├─ assets/<br>
├─ components/<br>
│ ├─ BottomBanner/<br>
│ ├─ breadCrumb/<br>
│ ├─ faqs/<br>
│ ├─ footer/<br>
│ ├─ Navbar/<br>
│ ├─ series/<br>
│ └─ sideDrawer/<br>
│ └─ SearchBar.jsx<br>
│ └─ Link.jsx<br>
├─ index.css<br>
├─ main.jsx<br>
├─ pages/<br>
│ ├─ Error.jsx<br>
│ ├─ HomeLayout.jsx<br>
│ ├─ index.js<br>
│ ├─ Landing.jsx<br>
│ └─ Series.jsx<br>
└─ utils/<br>
├─ i18n.js<br>
├─ index.js<br>
└─ locales/<br>
<br>

#### Folder Structure Description

1. **.eslintrc.cjs**: This file holds configuration settings for ESLint, a tool used for identifying and reporting patterns found in ECMAScript/JavaScript code.

2. **.gitignore**: It specifies intentionally untracked files to ignore in a Git repository, preventing committing files and directories that shouldn't be committed.

3. **index.html**: This is the main HTML file of the project, serving as the entry point for the web application.

4. **package-lock.json**: Automatically generated, it locks down the versions of a package's dependencies so that the same version is installed everywhere.

5. **package.json**: The manifest file for Node.js projects, including project metadata and dependencies.

6. **postcss.config.js**: This file configures PostCSS, a tool for transforming CSS with JavaScript plugins.

7. **public/**: A directory containing publicly accessible files such as images, fonts, or other static assets.

8. **README.md**: A markdown file providing information about the project, how to set it up, and other relevant details for users or contributors.

9. **src/**: The source code directory where all application source code resides.

10. **App.jsx**: Likely the main component of the React application, responsible for rendering other components and managing application state.

11. **assets/**: A directory for storing project assets such as images, fonts, or other media files.

12. **components/**: This directory contains reusable React components used throughout the application.

13. **index.css**: The main CSS file for the project, containing global styles.

14. **main.jsx**: The main JavaScript file that initializes and renders the React application.

15. **pages/**: This directory contains React components representing different pages or views in the application.

16. **utils/**: A directory containing utility functions or modules used throughout the application.

17. **i18n.js**: Responsible for internationalization setup, configuring libraries or tools for translating the application into multiple languages.

18. **locales/**: A directory containing localization files for different languages supported by the application.
1
<br>



## Tech Stack
### Libraries

- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Serves as the entry point to the DOM and server renderers for React.
- **React Router DOM**: A collection of navigational components that compose declaratively with your application.
- **Axios**: A promise-based HTTP client for making HTTP requests to fetch or save data.
- **Flowbite**: A collection of UI components built with Tailwind CSS.
- **Flowbite React**: React components for Flowbite.
- **i18next**: An internationalization framework for handling translations.
- **React i18next**: A powerful internationalization library for React based on i18next.

### Tooling:
- **Vite**: A fast build tool and development server for modern web projects.


<br>

## Run Locally

### Prerequisites
Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone the Repository:**

   ```bash
   git clone https://github.com/minernova/ap-org-clone.git
   cd ap-org-clone
   
<br>

2. **Install Dependencies:** 


   ```bash
   npm install
   
   or
   
   yarn install
  
  3. Start the Development Server:
      ```barn
      npm run dev
      
      or
      
      yarn dev
      
4. View the Application:<br>
Once the development server starts successfully, open your web browser and visit http://localhost:5173 to view the running application.




   
