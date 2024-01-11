// In server.js, require the express package and set up an Express app.

// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

const express = require('express');
const bp = require('body-parser');

const app = express();
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

const data = [
    {id:1, title: "What is happened?", content: "I really understand nothing about this new world"},
    {id:2, title: "Turn back our 2007", content: "I want to watch mtv and eat Wagon Weels"},
    {id:3, title: "I am a duck", content: "Quack quack quack"},
];

app.listen(3001);

// GET /posts: Return a list of all blog posts.
app.get('/posts', (request, response) => {
    if (!data || data.length === 0) response.status(404).send('Data not found');
    response.json(data);
});

// GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', (request, response) => {
    const post = data.find(post => post.id == request.params.id);
    if(!post) return response.status(404).send('Post not found');
    response.json(post);
});


// POST /posts: Create a new blog post. 
app.post('/posts', (request, response) => {
    const newPost = {...request.body, id: data.length+1};
    data.push(newPost)
    response.json(data);
});

// PUT /posts/:id: Update an existing blog post. 
app.put('/posts/:id', (request, response) => {
    let post = data.find(post => post.id == request.params.id);
    if(!post) return response.status(404).send('Post not found');
    const {title, content} = request.body;
    post = {...post, title, content};
    response.json(post);
});

// DELETE /posts/:id: Delete a blog post.
app.delete('/posts/:id', (request, response) =>{
    const postInd = data.findIndex(item => item.id == request.params.id);
    if (postInd == -1) return response.status(404).send('Post not found');
    data.splice(postInd, 1)
    response.json(data);
});