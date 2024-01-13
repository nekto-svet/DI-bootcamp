//function to fetch the first question
const getQuestion = () => {
    try {
        fetch('http://localhost:3001').then(data => {
            data.json().then (res => {
                document.getElementById('question').innerText = res.question;
            })
        })
    }
    catch (err){
        console.log(err);
    }
}

getQuestion();


//function that posts user answer and gets response
//if response is with all answers - renders them
// else - gets the next question as a response and renders it
document.getElementById('answerForm').addEventListener('submit', (e)=> {
    e.preventDefault();
    let answer = document.getElementById('userAnswer').value;
    try{
        fetch('http://localhost:3001', {
            method: "POST",
            headers: {
            "Content-type": "application/json",
            },
            body: JSON.stringify({ userAnswer: answer}),

        }).then(data => {
            data.json().then (res => {

                if (res.allAnswers) {
                    renderScope(res.allAnswers);

                } else {
                document.getElementById('question').innerText = res.question;
                }
            })
        })
    }
    catch (err) {
        console.log(err);
    }
})

// function that gets array of answers like a parameter 
// and renders it instead of quize form
// + shows a button 'Reload The Game' that reloads the page
const renderScope = (arrayAnswers) => {
    let rightAnswers = 0;
    let wrongAnswers = [];
    arrayAnswers.forEach(element => {
        element.right == true ? rightAnswers+=1 : wrongAnswers.push(element);
    });
    
    let html = `
    <p> Number of right questions = ${rightAnswers}</p>
    <p> Number of wrong questions = ${wrongAnswers.length}</p>
    `
    if(wrongAnswers.length>0){
        wrongAnswers.forEach(element => {
            html+= `
            <p> Question: ${element.rightAnswer.question}</p>
            <p> Your answer: ${element.answer}. Right answer: ${element.rightAnswer.answer}</p>
            `
        })
    }
    
    document.getElementById('game').innerHTML = html;
    document.getElementById('reset').innerHTML = `<button type="reset" onclick="resetPage()">Reload The Game</button>`;
}

// event listener for reset button
function resetPage() {
    location.reload();
}