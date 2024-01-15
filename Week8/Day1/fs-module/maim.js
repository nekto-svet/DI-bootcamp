const fs = require('fs'); //for sync functions
const fsp = require('fs').promises; //promises to use it as acync
// const path = require('path')
//builded in modules

// Sync / Async - default

// we can get information about method, every one we have sync and acync

// const read = async() => {
//     const data = await fstat.readFile ('info', 'utf-8');
//     console.log(data)
// }
// read()

// const data = fs.readFileSync('info.txt', 'utf-8');
// console.log(data)

// const info = fs.readFile('info.txt', 'utf-8', (err, info) => {
//     if (err) return console.log(ree.message);
//     console.log(info)
// });


// let data1 = '128764';
// fs.writeFile('newfile', data1, 'utf-8', err => {
//     if(err) return console.log(err);
//     console.log('File created')
// })

// fs.appendFile('newfile', data1, "utf-8", err => {
//     if(err){console.log(err)}
//     else { console.log('Appended')}
// })

// fsp.copyFile('info.txt', 'info')

// fsp.mkdir('utilits') //make new folder


