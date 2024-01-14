const express = require("express");

const posts_router = express.Router();

const {
    getAllPosts,
    searchPost,
    addPost,
    updatePost,
    deletePost,
} = require('../controllers/posts_controller.js');

posts_router.get('/', getAllPosts)

posts_router.get('/:user_id', searchPost)

posts_router.post('/', addPost)

posts_router.put('/:id', updatePost);

posts_router.delete('/:id', deletePost);


module.exports = {
    posts_router
}