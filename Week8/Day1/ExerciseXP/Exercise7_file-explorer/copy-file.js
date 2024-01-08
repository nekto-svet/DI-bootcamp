// 🌟 Exercise 7: Reading And Copying Files

// Create a directory named file-explorer.

// Inside the file-explorer directory, create a file named copy-file.js.

// In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.

// Create another file named read-directory.js.



const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) return console.log(err.message);
    console.log('read')

    fs.writeFile('destination.txt', data, 'utf8', (err) => {
        if (err) return console.log(err.message);
        console.log('created')
    })
})