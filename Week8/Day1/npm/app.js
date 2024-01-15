const { getUsers } = require('./axios');
getUsers().then((res => console.log(res)))

// with 'type: modules'
// import { getUsers } = require('./axios');