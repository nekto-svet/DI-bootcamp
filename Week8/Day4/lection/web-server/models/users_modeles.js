const {db} = require('../config/DB.js');

const _getAllUsers = () => {
    const users =  db("users").select("*").orderBy("name");
    return users;
}

const _searchUser = (id) => {
    const user =  db('users').select('*').where({id});
    return user;
}

const _addUser = (name, email, password) => {
    const newUser =  db('users').insert({name, email, password}).returning('*');
    return newUser;
}

const _updateUser = (id, name, email, password) => {
    const user =  db('users').update({name, email, password}).returning('*').where({id});
    return user;
}

const _deleteUser = (id) => {
    const user =  db('users').where({id:id}).returning('*').del();
    return user;
}

module.exports = {
    _getAllUsers,
    _searchUser,
    _addUser,
    _updateUser,
    _deleteUser
}
