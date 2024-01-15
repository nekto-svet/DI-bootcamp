// control DB
// const{users} = require('../config/DB.js');
const {_getAllUsers, _searchUser, _addUser, _updateUser, _deleteUser} = require('../models/users_modeles.js')

const getAllUsers = (req, res) => {
    _getAllUsers().then (data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg:"Not Found"});
    })
}

const searchUser =  async (req, res) => {
    const {user_id} = req.params;
    try{
        const data = await _searchUser(user_id);
        if(data.length === 0) return res.status(404).json({msg:"Not Found"});
        res.status(200).json(data);
    }
    catch (err){
        res.status(404).json({msg:"Not Found"});
    }
};

const newUser = (req, res)=> {

    console.log(req.body);
    const {name, email, password} = req.body;
    _addUser(name, email, password)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).jason({msg:'can not add user'})
    })
}

const updateUser = (req, res) =>{ 
    const {id} = req.params;
    const{name, email, password} = req.body
    _updateUser(id, name, email, password).then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg:"Not Found"});
    })
}

const deleteUser =  (req, res) =>{
    const {id} = req.params;
    _deleteUser(id).then(data => {
        res.json({msg:"Deleted"});
    })
    .catch(err => {
        res.status(404).json({msg:"Not Found"});
    })
}

module.exports = {
    getAllUsers,
    searchUser,
    newUser,
    updateUser,
    deleteUser,
}