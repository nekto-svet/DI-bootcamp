const {
    _getAllPosts,
    _searchPost,
    _addPost,
    _updatePost,
    _deletePost,
} = require ('../models/posts_models.js')


const getAllPosts = (req, res) => {
    _getAllPosts().then (data => {
        if(data.length === 0) return res.status(404).json({msg:"Not Found"});
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg:"Not Found"});
    })
}

const searchPost = (req, res) => {
    const {user_id} = req.params;
    _searchPost(user_id).then (data => {
        if(data.length === 0) return res.status(404).json({msg:"Not Found"});
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
}

const addPost = (req, res)=> {
    const {title, content} = req.body;
    _addPost(title, content)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).jason({msg:'can not add post'})
    })
}

const updatePost = (req, res) =>{ 
    const {id} = req.params;
    const{title, content} = req.body
    _updatePost(id, title, content).then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg:"Not Found"});
    })
}

const deletePost =  (req, res) =>{
    const {id} = req.params;
    _deletePost(id).then(data => {
        res.json({msg:"Deleted"});
    })
    .catch(err => {
        res.status(404).json({msg:"Not Found"});
    })
}

module.exports = {
    getAllPosts,
    searchPost,
    addPost,
    updatePost,
    deletePost,
}