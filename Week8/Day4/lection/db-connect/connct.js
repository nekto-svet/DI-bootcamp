const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : '9362cdT*',
      database : 'connect_nodejs'
    }
  });

  //////SELECT
//1
// db.select('id', 'name', 'email', 'password').from('users')
// .then(rows => {
//   console.log(rows)
// }).catch(err =>{
//   console.log(err);
// })

//2
//same way

// db('users').select('id', 'name', 'email', 'password')
// .then(rows => {
//   console.log(rows)
// }).catch(err =>{
//   console.log(err);
// })

//3
//this way we will get object
//with lot of metadata
//rows - parameter

// db.raw('select * from users')
// .then(data => {
//   console.log(data)
//   console.log(data.rows)
// }).catch(err =>{
//   console.log(err);
// })


//INSERT
// db('users')
// .insert([
//   {name:'ccc', email:'ccc@gmail.com', password:'kjhs87'},
//   {name:'nnn', email:'nnn@gmail.com', password:'kjhs87'},
//   {name:'yyy', email:'yyy@gmail.com', password:'kjhs87'}
// ])
// .returning(['id','name']) //to look data, not mandatory
// .then(data => {
//   console.log(data)
// }).catch(err =>{
//   console.log(err);
// })

//res without returning
// Result {
//   command: 'INSERT',
//   rowCount: 1,
//   oid: 0,
//   rows: [],
//ets

//res with returning
//[ { id: 6, name: 'aaa' } ]


// //UPDATE
// db('users')
// .update({name:'Lolo'})
// .returning('*')
// .where({id:7})
// .then(data => {
//   console.log(data)
// })
// .catch (err => {
//   console.log(err)
// })

// DELET
db('users')
.where({id:8})
.del()
.returning('*')
.then(data => {
  console.log(data);
})
.catch (err => {
  console.log(err)
})
