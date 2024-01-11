let rightAnswer = {};

const getData = async() => {
    const data = await fetch('http://localhost:3001/emojis/');
    const emojis = await data.json();
    render(emojis);
    return emojis[0];
}

getData().then(rightEmoji => rightAnswer=rightEmoji);

const render = (arr) => {
    const [rightAnswer, optionsNames] = arr;
    const rightAnswerPic = document.createTextNode(`${rightAnswer.emoji}`);
    document.getElementById('guess').appendChild(rightAnswerPic);
    let html = optionsNames.map(emojiName => {
        return `<option value = '${emojiName}'>${emojiName}</option>`
    })
    document.getElementById('emojis').innerHTML += html.join('');
}

document.getElementById('guess').addEventListener('submit', function (event) {
    event.preventDefault();
    const guess = document.getElementById('emojis').value;
    
    fetch("http://localhost:3001/emojis", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({guess, rightAnswer}),
      })
      .then((res) => res.json())
      .then((msg) => {
        console.log(msg);
        document.getElementById('message').innerText = msg.message
      });
});




  

