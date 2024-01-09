// Create a file named read-file.js.
// In read-file.js, require the fs module and read the content from the file-data.txt file. Display the content in the terminal.
import {promises as fs} from 'fs';

export const readFiles = async(fullPathName) => {
    try{
        return await fs.readFile(fullPathName, "utf-8")
    } 
    catch (err) {
        throw new Error (err.message)
    }
}