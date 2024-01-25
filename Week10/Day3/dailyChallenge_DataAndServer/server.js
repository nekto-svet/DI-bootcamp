import express from "express";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get ('/hello', (req, res) => {
    res.json({msg:'hello!'})
})

app.post ('/world', (req, res) => {
    console.log(req.body)
    let input = req.body.msg
    res.json({answer:`I received your POST request. This is what you sent me: ${input}`})
})


app.listen(3001, ()=> {
    console.log('run on server 3001')
})