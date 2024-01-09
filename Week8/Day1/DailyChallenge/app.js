// Task 1: Basic Module System
// Inside the daily-challenge directory, create a file named greeting.js.
// In greeting.js, define a function called greet that takes a name as a parameter and returns a personalized greeting message.
// Export the greet function using the Node.js module system.
// Create another file named app.js in the same directory.
// In app.js, require the greeting.js module and use the greet function to greet a user.
// Run app.js using Node.js and see the greeting message.


import {greet} from './greeteng.js';
console.log(greet('Anna'));


// Task 2: Using an NPM Module
// Inside the daily-challenge directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// Install the chalk package by running npm install chalk in the terminal.
// Create a file named colorful-message.js.
// In colorful-message.js, require the chalk package and use it to create and display a colorful message in the terminal.
// Create another file named app.js.
// In app.js, require the colorful-message.js module and call the function you’ve written to display the colorful message.
// Run app.js using Node.js and see the colorful message.


import { displayMessage, displayErrMessage}  from './message.js';
console.log(displayMessage('Shalom leculam'));

// Task 3: Advanced File Operations
// Inside the daily-challenge directory, create a directory named files.
// Inside the files directory, create a file named file-data.txt and add some text content to it.
// Create a file named read-file.js.
// In read-file.js, require the fs module and read the content from the file-data.txt file. Display the content in the terminal.
// Create another file named app.js.
// In app.js, require the read-file.js module and call the function you’ve written to display the file’s content.
// Run app.js using Node.js and see the content of the file.

import { readFiles } from './read_file.js';
import path from 'path';


const __dirname = path.resolve();
try {
    let data = await readFiles(__dirname + '/file-data.txt');
    console.log(displayMessage(data));
}
catch (err) {
    console.log(displayErrMessage(err.message));
}