// 🌟 Exercise 1: Creating A Simple Express.Js Application With Routes

// Create a JavaScript file (e.g., app.js) to set up your Express application:
// Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., index.js) where you will define your routes using express.Router():
// In your app.js file, import the router module you created and mount it in your Express application:
// Open your web browser or use a tool like Postman to test the following routes:
// http://localhost:3000/ (Homepage)
// http://localhost:3000/about (About Us page)
// You should see the corresponding responses for each route.

const express = require('express');
const {router} = require('./routes/routes.js');

const app = express();

app.listen(3000, () => {
    console.log("runing on port 3000")
})

app.use('/', router);