// 🌟 Exercise 2: Simple To-Do List Exercise Using Express.Js And Express.Router.
// In this exercise, you’ll create an API for managing a to-do list with basic CRUD operations (Create, Read, Update, Delete).

// Create a JavaScript file (e.g., app.js) to set up your Express application
// Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., todos.js) where you will define routes for managing the to-do list using express.Router():

// // Sample in-memory database for storing to-do items
// const todos = []; -- done in config/tasks.js
// // Get all to-do items
// // Add a new to-do item
// // Update a to-do item by ID
// // Delete a to-do item by ID

import express from 'express';
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

import {router} from './routes/todos.js'
app.use('/todo', router);

app.listen(3000, () => {
    console.log('Server is running on 3000 port')
})