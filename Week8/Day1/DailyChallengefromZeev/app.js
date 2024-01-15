import {greet} from './greeteng.js';
import { displayMessage, displayErrMessage}  from './message.js';
import { readFiles } from './read_file.js';
import path from 'path';

// console.log(displayMessage(greet('Anna')));
// console.log(displayErrMessage(greet('not a name')));


const __dirname = path.resolve();

// console.log(__dirname);

try {
    let data = await readFiles(__dirname + '/file-data.txt');
    //== path.resolve(__dirname, '/file-data.txt')
    console.log(displayMessage(data))
}
catch (err) {
    console.log(displayErrMessage(err.message))
}