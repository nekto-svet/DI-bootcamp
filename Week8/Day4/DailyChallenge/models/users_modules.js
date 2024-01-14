const {db} = require('../config/db_users.js');

const createUser = (email, username, first_name, last_name) => {
    const newUser =  db('users').insert({email, username, first_name, last_name}).returning('*');
    return newUser;
}

const getUsersFromDB = () => {
    const users =  db('users').select("*");
    return users;
}

const getOneFromDB = (id) => {
        const post =  db('users').select('*').where({id});
        return post;
    }

const changeUserInDB = (id, email, first_name, last_name) => {
        const post =  db('posts').update({email, first_name, last_name}).returning('*').where({id});
        return post;
}

module.exports = {
    createUser,
    getUsersFromDB,
    getOneFromDB,
    changeUserInDB,
  }