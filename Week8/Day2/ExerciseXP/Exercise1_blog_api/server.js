// In server.js, require the express package and set up an Express app.

// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.

// POST /posts: Create a new blog post. --------
// PUT /posts/:id: Update an existing blog post. -- Zeev said not to do this
// DELETE /posts/:id: Delete a blog post.-------

const express = require('express');
const app = express();

const data = [
    {id:1, title: "What is happened?", content: "I really understand nothing about this new world"},
    {id:2, title: "Turn back our 2007", content: "I want to watch mtv and eat Wagon Weels"},
    {id:3, title: "I am a duck", content: "Quack quack quack"},
];

app.listen(3001);

app.get('/posts', (request, response) => {
    try{
        response.json(data)
    }
    catch(err){
        console.log(`I can't retun tour data because ${err.message}`)
    }
});

app.get('/posts/:id', (request, response) => {
    try{ 
        const post = data.find(post => post.id == request.params.id)
        if(!post) return response.status(404).send('User not found')
        response.json(post)
    }
    catch(err){
        console.log(`I can't retun tour data because ${err.message}`)
    }
});
