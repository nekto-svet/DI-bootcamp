import express from 'express'; 
import { emojis } from "./emojis.js";
import path from "path";

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(3001, () => {
    console.log("run on port 3001");
});

const __dirname = path.resolve();
app.use("/", express.static(__dirname + "/public"));

const getOptions = () => {
    let options = [];
    for (let i=3; i>=0; i--) {
        let currEmoj = emojis[Math.round(Math.random()*(emojis.length-1))].name;
        if (options.includes(currEmoj)){
            i++;
        } else {
            options.push(currEmoj);
        }
    }
    const rightAnswerName = options[Math.round(Math.random()*(options.length-1))];
    const rightAnswer = emojis.find(emoji => emoji.name==rightAnswerName);
    return [rightAnswer, options];

};

app.get('/emojis', (request, response) =>{
    response.json(getOptions()) // 
})


app.post("/emojis", (request, response) => {
    const {guess, rightAnswer} = request.body;
    if (rightAnswer.name === guess) return response.json({ message: "Correct" });
    response.json({ message: "Not Correct" });
  });
