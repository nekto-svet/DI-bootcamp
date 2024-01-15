
// ///// ASYNC NOT WITH PROMISES ////////////////////

// // async return promise !!!
// async function simpleAsync() {
//     return 1
//     if ('blalal') {
//         return something;
//     } else {
//         throw new Error
//     }
// }

// console.log(simpleAsync()) //Promise { 1 }

// simpleAsync()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));


// /// AWAIT ES8 ///////
// async function getResult() {
//     try{
//         let res = await simpleAsync() ;
//         console.log(res);
//     }
//     catch {
//         console.log(err);
//     }
//     //its like ".than" but inside a function!
// }
// getResult();


// // EXAMPLE WITH OLD GOOD XY

// function getX(){
//     return new Promise ((res, rej) => {
//         setTimeout(()=>{
//             console.log('get x'); 
//             res(5);
//         }, 2000)
//     })
// }

// function getY(){
//     return new Promise ((res, rej) => {
//         setTimeout(()=>{
//             console.log('get y'); 
//             res(6);
//         }, 3000) 
//     })
// }

// // with async shorter:
// // async function getY(){
// //     setTimeout(()=>{
// //         console.log('get y'); 
// //         return 6;
// //     }, 3000)
// // }

// async function getXY(){
//     try{
//         let x = await getX();
//         let y = await getY();
//         console.log(x+y) ;
//     }
//     catch {
//         console.log(err);
//     }
// }
// getXY()



// // DO NOT USE forEach into or for run ASYNC
// // USE for, for:of and for:in


// ////////
// // all allset rase//////////////////
// ////// the same

// const promise1 = new Promise ((res, rej) => {
//     setTimeout(() => {
//         res('Resolve Promise 1')
//     }, 2* 1000)
// });

// const promise2 = new Promise ((res, rej) => {
//     // setTimeout(() => {
//         res('Resolve Promise 2')
//     // }, 2* 1000)
// });

// const promise3 = new Promise ((res, rej) => {
//     // setTimeout(() => {
//         res('Resolve Promise 3')
//     // }, 2* 1000)
// });

// const data = async() => {
//     try{
//         const res = await Promise.all([promise1, promise2, promise3])
//         console.log(res)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// data()




/////////// FETCH /////////////
// async
// return a promise

// fetch(URL, {}) url optionally

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//         //res - no array, RESPONSE with methods. ".json" - method than parse to JSON
//         // # we have ".text"
//         console.log(res)
//         // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …} ets
//         return res.json()
//     })
//     .then(data => {
//         render(data)
//     });


// ABSOLYTELY THE SAME
const getData = async(id) =>{
    try{
        const response = await fetch(`https://users-18kl.onrender.com/userjson?id=${id}`,{
            method: "GET"                 ///////?????????????
        });
        const data = await response.json();
        render(data);
    }
    catch(err){
        console.log(err)
    }
};

const render = (arr) => {
    const html = arr.map(item=>{
        return `<div style='display:inline-block; padding:20px; margin:20px; text-align:center; border:solid black 1px'> 
        <img src=https://robohash.org/${item.id}?size=150x150 />
        <h2>${item.name}</h2>
        <h4>${item.username}</h4>
        <p>${item.email}</p>
        </div>`
    })
    document.getElementById("root").innerHTML = html.join('')
};

function ckickButt(){
    let id = document.getElementById('user.id').value;
    getData(id)
};

// const post = {
//     title:'bla bla',
//     body: 'jdhfjdbk vjd fvjd jd jv df',
//     userID: 4
// }
// fetch(`https://jsonplaceholder.typicode.com/posts`, {
//     method: "POST",
//     headers:{
//         'Content-type':'application/json',
//     },
//     body: JSON.stringify(post)
// })
// .then(res => {
//     res.json()
// })
// .then(newpost => console.log(newpost))



//EXERSICE////

const takeSubmit = (e) =>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    console.log(name,username,email)
    postAUser(name, email, username);
}

const postAUser = async (name, username, email) => {
    try{
        const result = await fetch('https://users-18kl.onrender.com/userjson', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ name:name, username:username, email:email }), // maked array and stingified it
        });

        const  data = await result.json();

        render(data)
    }
    catch(err){
        console.log(err)
    }
}