// control DB
const{users} = require('../config/DB.js')

const getAllUsers = (req, res) => {
    res.json(users)
}

const searchUser =  (req, res) => {
    console.log(req.params);
    const {user_id} = req.params;
    const user = users.find(item => item.id == user_id);
    if(!user) return res.status(404).json({msg:'User not found'})
    res.json(user)
};

const newUser = (req, res)=> {
    console.log(req.body);
    const new_user = {...req.body, id: users.length+1};
    users.push(new_user);
    res.status(201).json(users); 
}

const updateUser = (req, res) =>{ 
    const {id} = req.params;
    
    const user = users.find(item => item.id == id);
    if (!user) return res.sendStatus(404);
    user.name = req.body.name;
    user.email = req.body.email;

    res.json(users);
}

const deleteUser =  (req, res) =>{
    const {id} = req.params;
    const userInd = users.findIndex(item => item.id == id);
    if (userInd == -1) return res.sendStatus(404);
    users.splice(userInd,1)

    res.json(users);
}

module.exports = {
    getAllUsers,
    searchUser,
    newUser,
    updateUser,
    deleteUser,
}