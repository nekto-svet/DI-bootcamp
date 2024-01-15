
// SYNCHRONOUS CODE //

function getX(){
    console.log('get x');
    return 5;
}

function getY(){
    console.log('get y');
    return 6;
}

function getXY(){
    console.log('get x and y');
    let x = getX();
    let y = getY();
    console.log(x+y);
}

getXY()
// get x and y
// get x
// get y
// NaN



// ASYNCHRONOUS CODE //

function getX(){
    setTimeout(()=>{
        console.log('get x'); // console log after everything
        return 5;
    }, 1) // Timeout
   
}

function getY(){
    console.log('get y');
    return 6;
}

function getXY(){
    console.log('get x and y');
    let x = getX();// undefined
    let y = getY();
    console.log(x+y);
}

getXY()
// get x and y
// get y
// NaN
// get x




// CALLBACK FUNCTION //// LEGASY

function doSomethimg (callback){
    //some logic # get data from the server
    callback()
}

function myCallback(){
    console.log('Callback executed');

}

//Example




//
function getX (callback) {
    setTimeout(()=>{
        console.log('get x');
        callback(5)
    }, 2000)
}


function getY(callback){
    console.log('get y');
    callback(7)
}

function getXY(){
    console.log('get x and y');
    getX(function(x){
        getY(function(y){
            console.log(x+y)
        })
    })
}

getXY()


// PROMISES //////////////////////////////////////////
// 1. Pending
//          --> resolve -- fullfiled
//          --> reject  -- fullfiled


new Promise ((resolve, reject) => {})

const promise = new Promise ((resolve, reject) => {
    // resolve(5)
    reject(5)
})

console.log(promise)
// Promise { <rejected> 5 }
// node:internal/process/promises:289
//             triggerUncaughtException(err, true /* fromPromise */);


// Example

const flip = () => {
    const coin = Math.floor(Math.random()*3);
    return coin < 2 ? (coin === 0 ? 'head' : 'tail') : 'side';
}



const flipcoin = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const flipResult = flip();
        if (flipResult == 'head' || flipResult == 'tail'){
            resolve(flipResult);
        } else {
            reject(flipResult);
        }
    }, 1000)
})

// console.log(flipcoin)
    // Promise {<pending>}
    // [[Prototype]]
    // : 
    // Promise
    // [[PromiseState]]
    // : 
    // "rejected"
    // [[PromiseResult]]
    // : 
    // "side"

// to get result we need THEN ////////////////////
flipcoin
    .then((result) => {
        console.log('result',result)
    })
    .catch((error) => {
        console.log('reject', error)
    })


// or
flipcoin
    .then((result) => {
        return result;
    })
    .then((result) => {
        console.log('result',result) // ew can add as THEN as we need
    })
    .catch((error) => {
        console.log('reject', error)
    })




// Example
function getX(){
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            console.log('get x'); 
            res(5);
        }, 2000) 
    })
}

function getY(){
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            console.log('get y'); 
            res(6);
        }, 3000) 
    })
}

function getXY(){
    console.log('get x and y');
    let x = getX(); // we even dont need this line, just getX().then....ets
    x.then((resX) =>{
        let y = getY();
        y.then((resY) => {
            console.log(resX+resY);
        })
    })
    .catch(err => {
        console.log (err) // will cath errors from two promises, we can set catch to every one
    })
}
getXY()





//EXERCISE

function getData () {
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            let data = undefined;
            res(JSON.stringify(data));
            rej(undefined)
        }, 2000)
    })
}

function parseData (){
    getData().then ((JSONdata) => {
        console.log(JSONdata)
        let data = JSON.parse(JSONdata)
        return data
    })
    .catch((err) => {
        console.log(err)
    })
}


data = parseData ()
console.log(data)


// or
//.then ((res) => {
//     someFunction(res)
// })
// function someFunction(){}...




// PROMISE STATIC METHODS /////////////////

Promise.all(arr_of_promises);
Promise.allSettled(arr_of_promises);
Promise.race(arr_of_promises);

const promise1 = new Promise ((res, rej) => {
    setTimeout(() => {
        res('Resolve Promise 1')
    }, 2* 1000)
});

const promise2 = new Promise ((res, rej) => {
    // setTimeout(() => {
        res('Resolve Promise 2')
    // }, 2* 1000)
});

const promise3 = new Promise ((res, rej) => {
    // setTimeout(() => {
        res('Resolve Promise 3')
    // }, 2* 1000)
});

Promise.all([promise1, promise2, promise3]) 
    .then(result => console.log(result)) //waiting for all promises to be resolve
    // [ 'Resolve Promise 1', 'Resolve Promise 2', 'Resolve Promise 3' ]
    .catch(err => console.log(err)) // result of first rejected

Promise.allSettled([promise1, promise2, promise3]) 
    .then(result => console.log(result))  // with statuses
// [
//   { status: 'fulfilled', value: 'Resolve Promise 1' },
//   { status: 'fulfilled', value: 'Resolve Promise 2' },
//   { status: 'fulfilled', value: 'Resolve Promise 3' }
// ]

Promise.race([promise1, promise2, promise3]) 
    .then(result => console.log(result))   // first resolved of rejected
//Resolve Promise 2