import express from "express";
import { emojis } from "./emojies/emojies.js";
import path from 'path';

const app = express();
const __dirname = path.resolve()

app.use(express.urlencoded)!!!!!!!!!!!!!!!!!!!

app.use('/', express.static(__dirname, +'/public'))

app.listen(3001, ()=>{
    console.log('run on 3001')
})

app.get('/emojis', (req,res) => {
    const randomInd = Math.floor(Math.random()*emojis.length);
    const randomEmoji = emojis[randomInd];
    const shuffleEmoj = shuffleArr(emojis);
    res.json({randomEmoji, shuffleEmoj})
})

app.post('/emojis', (req, res) => {
    const {name, guess} = req.body;
    if( name === guess) return res.json({msg:"Correct"}) ;
    res.json({msg: "Not correct"});
})

const shuffleArr = (array) => {
    for(let i = array.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
        return array;
    }
}

