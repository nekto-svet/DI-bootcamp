// simulating DB
const knex = require('knex');
require ('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PAST,
      database : process.env.DB_NAME
    }
  });


// const users = [
//     {id:1, name:'John', email:"erwe@gmail.com",},
//     {id:2, name:'srth', email:"erwsg@gmail.com",},
//     {id:3, name:'srg', email:"sghag@gmail.com",},
// ];

// const products = [
//     {id:1, name:'fghf', desc:"mnbv",},
//     {id:2, name:'sfghrth', desc:"lokijhg",},
//     {id:3, name:'sserg', desc:"zsxdcfvgbh",},
// ];

module.exports = {
    db,
    // users,
    // products,
}