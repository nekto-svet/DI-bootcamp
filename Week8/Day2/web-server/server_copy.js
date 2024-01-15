// API Restfull API
// CRUD

//way to organize
//server
//|_config - connection DB
//|_modules - queries to DB
//|_controller - functions and logic
//|_routes - route implementation code



const express = require('express');
const{users_router} = require('./routes/users.routes.js');
const{products_router} = require('./routes/products.routes.js');
const{logger} = require('./middleware/utilits.js')

const app = express(); 
const bp = require('body-parser');


app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.use(logger);

app.listen(3001, () => {
    console.log("run on port 3001")
}) 


app.use('/users', users_router);
app.use('/products', products_router);









// //if i want user with 'a' in name
// // ???????????????????????????????????????????????????????????????????????????
// app.get('/users/search', (req, res) => {
//     console.log(req.query);
//     const {name} = req.query;
//     console.log(name)
//     const user = users.filter(item => {
//         console.log(item.name.toLowerCase().includes(name.toLowerCase()))
//         return item.name.toLowerCase().includes(name.toLowerCase())
//     });
//     // if(!user) return res.status(404).json({msg:'User not found'})
//     res.json(user)
// })


// // __dirname already exist where????????????????????????/
// app.use('/', express.static( __dirname+'/public'));
// //will read all in public, if something not puted, it will looking foe index.html


// // CRUD
// // create read put delete

// //POSTMAN - app for simulate frontend
// // (there are many apps like this)



