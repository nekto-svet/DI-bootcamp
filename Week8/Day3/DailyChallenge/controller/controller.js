import {triviaQuestions} from '../config/questions.js';
import {userAnswers} from '../config/answers.js';

let q = 0; //counter of current question


//function that gets just the first question, connects to router.get('/', getFirstQuestion);
export const getFirstQuestion = (req, res) => {
    res.json(triviaQuestions[0]);
}; 


// function that 
// 1) takes posted user answer
// 2) compares it with right answer
// 3) adds user answer to array 'userAnswers' (with mark true or fals and right answer if false)
// 4) increases counter
// 5) hceck if this is the last question. 
//       If yes returns as resposne array with all answers and resets it to zero.
//       If not - returns as response the next question.

// Is it too much for one function? /////////////////////////////////////////////////

//connected to router.post('/', answerQuestion);

export const answerQuestion = (req, res) => {
    let userAnswer = req.body.userAnswer;
    let lowerUserAnswer = userAnswer.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let lowerRightAnswer = triviaQuestions[q].answer.toLowerCase();

    if (lowerRightAnswer == lowerUserAnswer) {
        userAnswers.push({answer:userAnswer, right:true})
    } else {
        userAnswers.push({answer:userAnswer, right:false, rightAnswer:triviaQuestions[q]})};
    q++
    if(q==triviaQuestions.length) {
        q=0;
        res.json({allAnswers:userAnswers});
        userAnswers.length = 0;
    } else{
        res.json(triviaQuestions[q]);
    }
    
};

//function that get all user answers
// connected to router.get('/userscope', getScope);
export const getScope = (req, res) => {
    res.json(userAnswers);
};




