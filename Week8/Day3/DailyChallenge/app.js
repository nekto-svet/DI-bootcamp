// Daily Challenge : Trivia Quiz Game

// 1. Set up a new Express.js application.
// 2. Create a trivia quiz model with a set of hard-coded questions and answers.
// 3. Implement the following routes using express.Router:

// GET /quiz: Start the quiz and display the first question.
// POST /quiz: Submit an answer to the current question and move to the next question.
// GET /quiz/score: Display the user’s final score at the end of the quiz.
// 4. Keep track of the user’s score as they progress through the quiz.
// 5. Provide appropriate feedback on correct and incorrect answers.
// 6. Implement simple game logic such as displaying the next question after answering one.

import express from 'express';
const app = express();
import path from "path";
import {router} from './routes/routes.js'

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(3001, () => {
    console.log('Server is running on 3001 port')
})

const __dirname = path.resolve();
app.use('/quiz', express.static( __dirname+'/public'));

app.use('/', router);

