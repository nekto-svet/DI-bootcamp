
import fs from'fs/promises'; 
import path from 'path';
const __dirname = path.resolve();


export const read = async () => {
    try {
        const data = await fs.readFile(__dirname + '/config/tasks.json', 'utf8');
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (err) {
        throw err; 
    }
};


export const write = async(data) => {
    try {
        const updatedJsonData = JSON.stringify(data);
        await fs.writeFile(__dirname + '/config/tasks.json', updatedJsonData, 'utf8');
    } catch (err) {
        throw err; 
    }
}




