
// In app.js, import the functions from the fileManager.js module.

// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.


const {readFile, writeFile} = require('./fileManager.js'); 

readFile('HelloWorld.txt');
writeFile('ByeWorld.txt', 'Writing to the file');
