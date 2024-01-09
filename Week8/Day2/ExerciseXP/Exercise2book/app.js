// Create a new file named app.js in the book-api directory.

// In app.js, import the express module and create an instance of an Express app.

// Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

// Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.

// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created). -- we didnt cover this

const express = require('express');
const app = express(); 

app.listen(5000, ()=>{
    console.log('running on the server 5000')
});

const books = [
    {id:1, title: "Some boring book", author: "Very boring dude", publishedYear: 1985},
    {id:2, title: "Some interesting book", author: "Smart guy", publishedYear: 2011},
    {id:3, title: "Dangerous book", author: "Crazy man", publishedYear: 1925}
]


app.get('/api/books', (request, response) => {
    try{
        response.json(books);
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/api/books/:bookId', (request, response) => {
    const book = books.find((b) => b.id == request.params.bookId);
    if (book) {
        response.json(book);
    } else {
        response.status(404).send('Book not found');
    }
  });