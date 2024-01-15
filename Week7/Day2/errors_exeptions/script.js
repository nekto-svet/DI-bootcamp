
/**
 * 
 * try {
 * 
 * }
 * catch{
 * 
 * }
 */

function getX(){
    console.log('start');
    let x = 10;
    try{
        y
    }
    catch(error){
        console.log(error)
        // ReferenceError: y is not defined
        // at getX (script.js:16:9)
        // at script.js:29:14
        console.log(error.name) //script.js:20 ReferenceError
        console.log(error.message) //script.js:22 ReferenceError: y is not defined
        console.log(error.stack)
        // ReferenceError: y is not defined
        // at getX (script.js:16:9)
        // at script.js:29:14
    }
    finally{ //if there is no errors oe if there is an error
        x++
    }
    console.log('end');
    return x;
}

let result = getX();
console.log(result)


//example ------throw new Error------

function makeArr(num){
    //we can rise our Errors
    if (num>10) {
        throw new Error ('please send valid number')
    }

    try{
        let arr = new Array(num)
    return arr
    }
    catch (e) {
        return e.message //Invalid array length
    }
}

let res = makeArr(-1)
console.log(res);


/// another example

function makeArr1(num){
    try{
        if (num>10) {
            throw new Error ('please send valid number');
        }
        let arr = new Array(num);   
        return arr;
    }
    catch (e) {
        return new Array(10);
    }
}

let res1 = makeArr(-1)
console.log(res1);



// EXERCISE  REDO!!!

function findElement(arr, index) {
    try{
        if (index<0 || index>arr.length-1){
        throw new Error ('Error: Index out of range');
    }
        console.log(arr[index]);}
    catch(e){
        return e.message
    }
}

const myArray = [10, 20, 30, 40, 50]

findElement(myArray, 2);
findElement(myArray, 8);
findElement(myArray, -1);



// // EXERCISE
// let arr = [2,4,4,1];
// function cakeCandles(arr){
//     let sorted = arr.sort().reverse();
//     console.log(sorted)
//     let c = 0
//     sorted.forEach((candle) => {
//         if (candle == candle[0]){
//             c++
//         }
//     })
//     console.log(c)
// }

// cakeCandles(arr)


// // EXERCISE 
function parseJSON(str){
    try{
        let parsedStr = JSON.parse(str);
        return parsedStr;
    }
    catch (){
        throw new Error ('WRONG!!!')
    }
}


// // EXERCISE
/**
 * find the smallest distance between 2 numbers in array
 * [2,5,3,7,2,3,6,8,6] => 2
 */

function findDistance(arr){
    let arrDist = [];

    arr.forEach((num ,index) => {
        let dist = 0;

        for (let i=index+1; i<arr.length; i++){
            dist++
            if (num == arr[i]){
                arrDist.push(dist);
                break;
            }
            
        }
    })
    return Math.min(...arrDist)

}

let arr1 = [2,5,3,7,2,3,6,6,9,8,6]
console.log(findDistance(arr1))