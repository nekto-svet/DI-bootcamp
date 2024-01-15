import {promises as fs} from 'fs';

export const readFiles = async(fullPathName) => {
    try{
        return await fs.readFile(fullPathName, "utf-8")
    } 
    catch (err) {
        throw new Error (err.message)
    }
}