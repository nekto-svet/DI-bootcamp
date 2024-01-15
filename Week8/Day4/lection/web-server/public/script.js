
const getUsers = async() =>{
    try{
        const res = await fetch('http://localhost:3001/users');
        const data = await res.json();
        console.log(data)
        render(data);
        }
    catch(err){
        console.log(err)
    }
}

getUsers()

const render = (arr) => {
    const html = arr.map (item => {
        return `<div>
            ${item.name} ${item.email}
        </div>`
    });
    document.getElementById('users').innerHTML = html.join('')
}