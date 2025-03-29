# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Login using this password or you can signup using your username and password and then login using the same

username : eve.holt@regress.in
password : cityslicka

EmployeeWise Listing  

A React-based employee management system that allows users to view, edit, delete, and manage employees. The application uses Bootstrap for styling and React Paginate for pagination.

## Features  

- User listing with pagination  
- Edit employee details using a modal form  
- Delete employee from the list  
- Navigation bar with login, signup, and dashboard links  
- Simple authentication logic  
- Deployed using GitHub Pages  

## Pages  

### Home (`/`)  
- Displays an introduction to the system  
- Navigation links for Login, Signup, and Dashboard  

### Login (`/login`)  
- Allows users to log in  
- Redirects to the dashboard after login  

### Registration (`/register`)  
- Users can sign up for an account  
- After registration, users can log in  

### Dashboard (`/dashboard`)  
- Displays a list of employees with their names and emails  
- Each employee has options to edit or delete  
- Edit opens a form with pre-filled data  
- Pagination allows navigation between pages  

## Installation  

### Prerequisites  
- Node.js  
- Git  

### Steps to Install and Run  

1. Clone the repository:  
   ```
   git clone https://github.com/Abhishek1826/EmployeeWise-Listing.git
   cd EmployeeWise-Listing
   ```

2. Install dependencies:  
   ```
   npm install
   ```

3. Run the app locally:  
   ```
   npm start
   ```
   The app will open at `http://localhost:3000/`.  

## Deployment to GitHub Pages  

1. Install GitHub Pages package (if not installed):  
   ```
   npm install gh-pages --save-dev
   ```

2. Add the following to `package.json`:  
   ```json
   "homepage": "https://Abhishek1826.github.io/EmployeeWise-Listing"
   ```

3. Deploy the app:  
   ```
   npm run deploy
   ```

The application will be available at:  
`https://Abhishek1826.github.io/EmployeeWise-Listing/`  

## Contributing  

Fork the repository and submit pull requests for improvements.  

## Contact  

GitHub: [github.com/Abhishek1826](https://github.com/Abhishek1826)  
Portfolio: [abhishek1826.github.io/My-Portfolio](https://abhishek1826.github.io/My-Portfolio/#/)  

Let me know if you need any modifications.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
