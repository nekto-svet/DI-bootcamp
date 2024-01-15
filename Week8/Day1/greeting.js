const greeting = (name) => {
    console.log(`Hello ${name}`);
}

const hello = (name) => {
    console.log(`Hello to ${name} too`)
}

module.exports = {hello, greeting} ;
// module.exports = {
//     greeting: greeting, 
//     hello: hello
// }