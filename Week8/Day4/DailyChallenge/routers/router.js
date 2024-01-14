const express = require("express");

const router = express.Router();

const {
    registerNewUser,
    logIn,
    getAllUsers,
    findUser,
    updateUser,
} = require('../controllers/users_controller.js');






router.post('/register', registerNewUser)

router.post('/login', logIn)

router.get('/users', getAllUsers)

router.get('/users/:id', findUser);

router.put('/users/:id', updateUser);


module.exports = {
    router
}