//🌟 Exercise 3: Basic API For Managing A List Of Books Using Express.Js And
// In this exercise, you’ll implement CRUD operations (Create, Read, Update, Delete) for books.

// Create a JavaScript file (e.g., app.js) to set up your Express application
// Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., books.js) where you will define routes for managing books using express.Router():
//Sample in-memory database for storing books

// // Get all books

// // Add a new book

// // Update a book by ID

// // Delete a book by ID

import express from 'express';
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

import {router_books} from './routes/bookRoutes.js'
app.use('/books', router_books);

app.listen(6000, () => {
    console.log('Server is running on 6000 port')
})