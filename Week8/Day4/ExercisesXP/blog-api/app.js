// 🌟 Exercise 1 : Building A RESTful API With Database Connection

// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// In app.js, require the express package and set up an Express app.
// Create a posts table in postgres database, with the properties like id, title, and content.

// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.


const express = require('express');
const{posts_router} = require('./routers/router.js');

const app = express(); 

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/posts', posts_router);

app.listen(3001, () => {
    console.log("run on port 3001")
}) 

