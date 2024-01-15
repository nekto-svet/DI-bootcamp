// MOST IMPORTANT THING: READ DOCUMENTATION
// in packaje.json:
// 'type': 'commonjs'
const axios = require('axios');


//OR u can use this syntaxis:
// OR this OR this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import axios from axios;
// need to change in packaje.json: !!!!!!!
// 'type': 'module'

// axios needed to read big data???
const getUsers = async() => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response
    }
    catch  (err){
        console.log(err)
    }
}

// getUsers()

module.exports = {getUsers} ;



// with 'type: modules'
// export const getUsers = async() => {
//     try{
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//         return response
//     }
//     catch  (err){
//         console.log(err)
//     }
// }

// --> it will be an OBJECT
// ==> import { getUsers}



// if i need just one file not object
// export default getUsers
// ==> import gU

