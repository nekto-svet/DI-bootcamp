const {db} = require('../config/db_users.js');

const createUsersPassword =(user ,pass) =>{
    return db('hashpwd').insert(
      {
        username:user,
        password:pass 
      }
    )
    .returning('*')
}


const checkUser = (enteredUsername) => {
  return db('hashpwd').select('password').where({username : enteredUsername})
};


module.exports = {
  createUsersPassword,
  checkUser,
}
