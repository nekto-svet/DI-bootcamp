let randomEmoji = [];
const getEmojies = async() => {
    fetch('http://localhost:3001/emojis/')
    .then(res => res.json())
    .then(emojiesAPI => {
        console.log(emojiesAPI)
        randomEmoji = emojiesAPI.randomEmoji
        render( emojiesAPI.randomEmoji, emojiesAPI.shuffleEmoj)
    })
}

getEmojies()

const render = (emoji, option) => {
    const root = document.getElementById('root');
    const html = option.map(item =>{
        return item.name;
    })
    root.innerHTML = `${html.join(',')} ${emoji.emoji}`
}

const fEmoji = () =>{
    const guess = document.getElementById('guess');
    fetch('http://localhost:3001/emojis/', {
    method: 'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify({guess, name:randomEmoji.name})
})
.then(res => res.json())
.then(msg =>{
    console.log(msg);
    document.getElementById('msg').innerHTML = `<h2>${msg.message}</h2>`
})
}