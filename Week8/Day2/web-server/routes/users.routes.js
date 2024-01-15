const express = require("express");

const users_router = express.Router();

const {getAllUsers, searchUser, newUser, updateUser, deleteUser} = require('../controller/users.controller.js');

const{auth} = require('../middleware/utilits.js')

users_router.get('/', auth, getAllUsers) //check with middleware

users_router.get('/:user_id', searchUser)

users_router.post('/', newUser)

users_router.put('/:id', updateUser);

users_router.delete('/:id', deleteUser);




module.exports = {
    users_router
}