// ------------🌟 Exercise 3: File Management Using CommonJS Syntax--------------
// Create a file named fileManager.js.

// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

// Create a file “Hello World.txt” containing the sentence “Hello World !! “

// Create a file “Bye World.txt” containing the sentence “Bye World !! “

// Create another file named app.js.


const fsp = require('fs').promises;

const readFile = async (filePath) => {
  try {
    const data = await fsp.readFile(filePath, 'utf8');
    console.log (data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async (filePath, content) => {
  try {
    await fsp.writeFile(filePath, content, 'utf8');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {readFile, writeFile};