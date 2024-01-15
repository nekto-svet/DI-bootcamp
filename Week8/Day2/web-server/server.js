// API Restfull API
// CRUD

//way to organize
//server
//|_config - connection DB
//|_modules - queries to DB
//|_controller - functions and logic
//|_routes - route implementation code


const express = require('express');
const app = express(); //instanse of express
const bp = require('body-parser');


app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
// OR if there is express latest versions
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());


// every web server is listening request
const users = [
    {id:1, name:'John', email:"erwe@gmail.com",},
    {id:2, name:'srth', email:"erwsg@gmail.com",},
    {id:3, name:'srg', email:"sghag@gmail.com",},
]

const product = [
    {id:1, name:'fghf', desc:"mnbv",},
    {id:2, name:'sfghrth', desc:"lokijhg",},
    {id:3, name:'sserg', desc:"zsxdcfvgbh",},
]

app.listen(3001, () => {
    console.log("run on port 3001")
}) //port

// __dirname already exist where????????????????????????/
app.use('/', express.static( __dirname+'/public'));
//will read all in public, if something not puted, it will looking foe index.html

// app.get
// app.post
// app.put
// app.delete
// take two parameters - root (what coming after domain, like direktory path. Like folders on your computer)
// second - callback function with request/response
// app.get('/users', (request,response) => {
//     response.send('hello');
// });


//package nodemoon for not to restart server every time
//npm i -g nodemon - installed modemon globally
// now "nodemon app.js" will restart server




//READ
app.get('/users', (request, response) => {
    response.json(users)
})

//params - comes after slash, dynamic

// if i want to find user with id1
app.get('/users/:user_id', (req, res) => {
    console.log(req.params); //{ user_id: '2' } into terminal
    // users.forEach(user => {
    //     if(user.id == req.params['user_id']) {
    //         
    //     }
    // })
    const {user_id} = req.params;
    const user = users.find(item => item.id == user_id);
    if(!user) return res.status(404).json({msg:'User not found'})
    res.json(user)
})


//query

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send('Ok')
})
//http://localhost:3001/search?name=a in adress
// got { name: 'a' } in terminal

//if i want user with 'a' in name
// ???????????????????????????????????????????????????????????????????????????
app.get('/users/search', (req, res) => {
    console.log(req.query);
    const {name} = req.query;
    console.log(name)
    const user = users.filter(item => {
        console.log(item.name.toLowerCase().includes(name.toLowerCase()))
        return item.name.toLowerCase().includes(name.toLowerCase())
    });
    // if(!user) return res.status(404).json({msg:'User not found'})
    res.json(user)
})





// CRUD
// create read put delete

//POSTMAN - app for simulate frontend
// (there are many apps like this)

// Create (post)
app.post('/users', (req, res)=> {
    console.log(req.body); //undefined bcs we have no BODY PARSER
    const new_user = {...req.body, id: users.length+1};
    users.push(new_user);
    res.status(201).json(users); //201-created, u can see all statyses in documentation
})
// res.send - can send everything
// res.json - do the SVGMaskElement, send. but only json

//instead body-parser we can use express on latest vercion.

// Update PUT
// user id that u want to update - params
// data - name and email - body
app.put('/users/:id', (req, res) =>{ //restfullAPI - when we use the same path again and again
    const {id} = req.params;
    
    //v1
    // const user = users.findIndex(item => item.id == id);
    // if (user == -1) return res.sendStatus(404);
    // const{name, email} = req.body;
    // users[user] = {...users[user], name:name, email:email};

    // v2
    const user = users.find(item => item.id == id);
    if (!user) return res.sendStatus(404);
    user.name = req.body.name;
    user.email = req.body.email;

    //v3 doesnt work !!!!
    // const user = users.find(item => item.id == id);
    // if (!user) return res.sendStatus(404);
    // const{name, email} = req.body;
    // console.log(user);
    // user = {...user, name:name, email:email};
    // console.log(user);


    res.json(users);
});

// DELETE
// id as psrsms
app.delete('/users/:id', (req, res) =>{
    const {id} = req.params;
    const userInd = users.findIndex(item => item.id == id);
    if (userInd == -1) return res.sendStatus(404);
    users.splice(userInd,1)

    res.json(users);
});