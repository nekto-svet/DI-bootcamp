// ------------Exercise 3: Building A Basic CRUD API With Express And Axios Using A Data Module--------------
// Create a new file named app.js in the crud-api directory.

// In app.js, import the express module and create an instance of an Express app.

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

// Part 2: Creating a Data Module for Axios

// Inside the crud-api directory, create a new directory named data.

// Inside the data directory, create a new file named dataService.js.

// In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.

// Export the fetchPosts function.


// Part 3: Using the Data Module in the Express App

// Inside app.js, import the dataService module you created.

// Create an endpoint in your Express app that uses the fetchPosts function from the dataService module to retrieve data from the JSONPlaceholder API.

// Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts

// Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.


const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("I'm on port 5000");
});

const {fetchPosts} = require('./data/dataService.js')

app.get('/', async (req, res) => {
    try {
      const posts = await fetchPosts();
      res.json(posts);
      console.log('Data retrieved and sent')
    } catch (error) {
      console.log(error);
    }
  });
  
