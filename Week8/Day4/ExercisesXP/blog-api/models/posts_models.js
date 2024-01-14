const {dbPosts} = require('../config/db_posts.js');

const _getAllPosts = () => {
    const posts =  dbPosts('posts').select('*');
    return posts;
}

const _searchPost = (id) => {
    const post =  dbPosts('posts').select('*').where({id});
    return post;
}

const _addPost = (title, content) => {
    const newPost =  dbPosts('posts').insert({title, content}).returning('*');
    return newPost;
}

const _updatePost = (id, title, content) => {
    const post =  dbPosts('posts').update({title, content}).returning('*').where({id});
    return post;
}

const _deletePost = (id) => {
    const post =  dbPosts('posts').where({id}).returning('*').del();
    return post;
}

module.exports = {
    _getAllPosts,
    _searchPost,
    _addPost,
    _updatePost,
    _deletePost,
}
