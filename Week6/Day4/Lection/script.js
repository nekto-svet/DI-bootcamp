//// Methods for Arrays////////////////////

//// For Each /////////////////////////
colors = ['red', 'green', 'blue'];
colors.forEach((color, index, arr) => {
    console.log('color');
    console.log('index')
    
});


//////////////
const numbers = [10,11,12,15,20];

numbers.forEach((num) => {
    // if (num % 2 === 0) {
    //     console.log(num);
    // }
    num % 2 === 0 && console.log(num); //for check if (console.log(num)) is true js should run this code
});



///////////// Some ////////////////////////////////
//check if at least 1 element matches the condition
// will return true of false

const numbers1 = [1,2,3,4,5,6,7,8];

let ret = numbers1.some((num) => {
    return num === 0
})

console.log(ret)


const words = ["wow","hey","bye"];
let res = words.some((word) => {
    return word[0] == 'h'
})
console.log(res)



/////////////  Every //////
//check if every element matches the condition
// will return true of false

const numbers2 = [1,2,3,4,5,6,7,8];

let retu = numbers2.every((num) => {
    return num > 0
})

console.log(retu);



const words3 = ["hello","hey","hola"];
let res3 = words.every((word) => {
    return word[0] == 'h';
})
console.log(res3);




////////////////////  Array Map  /////

const origArray = [1,4,9,16];

const newArray = origArray.map((elem, ind, arr) => {
    return elem *2;
})

console.log (newArray); //[ 2, 8, 18, 32 ]



const origArray1 = [1,4,9,16];

const newArray1 = origArray1.map((elem, int, arr) => {
    if (elem < 4) {
        return elem *2;
    } else {
        return elem
    }
})

console.log (newArray1); //[ 2, 4, 9, 16 ] 




///////// Array Filter ////////

const words4 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words4.filter(word => word.length > 6);
// array passed : words
// test passed : word.length > 6

console.log(result);
// ["exuberant", "destruction", "present"]


const numForFilter = [1,2,3,4,5,6,7];

const filteredNum = numForFilter.filter((element) => {
    return element > 3 && element < 8
})

console.log(filteredNum);




////// Array Reduce ///////
// all value of array to 1 value

const arr1 = [1,2,3,4,5];

let sum = arr1.reduce((accumulator, value) => {
    console.log (`acumulator: ${accumulator}`);
    console.log (`value: ${value}`);
    return accumulator + value;
})

let sum1 = arr1.reduce((accumulator, value) =>  accumulator + value); // the same in 1 line

console.log(sum)
// accumulator: 1  acc takes first value
// value: 2
// accumulator: 3 acc takes sum of acc and value
// value: 3
// accumulator: 6 acc takes sum of acc and value
// value: 4
// accumulator: 10 acc takes sum of acc and value
// value: 5
// 15 final sum


let sum = arr1.reduce((acumulator, value) => {
    console.log (`acumulator: ${acumulator}`);
    console.log (`value: ${value}`);
    return acumulator + value;
}, 0); // 0 like first accumulator






// Use the reduce() method to sum up all the calories of every desert, except Apple Pie.

// The output should be 85

let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]


let sumCalories = party.reduce((acumulator, value) => {

   return value.desert != 'Apple Pie' ? acumulator+value.calories : acumulator;
   // if we want to reset acc we can say   return 0 
    
}, 0); // 0 like first accumulator

console.log (sumCalories)






/////////////////// Destructuring Assignment ///////////////
let a, b, rest;
[a, b] = [10, 20, 30, 40]; //just two first elems if two vars

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

let arrrr = ['I am x', 'I am y']
let [x,y] = arrrr




/////////////// Spread Operator //////////////////////

let n  = 10;
let m = 20
let rest1 = [30,40,50]
let str = 'sljrtkljgnklsj'

const iterable = [n, m, ...rest1, ...str] 
console.log(iterable);
//[10, 20, 30, 40, 50,  's', 'l', 'j', 'r', 't', 'k', 'l','j', 'g', 'n', 'k', 'l', 's','j'];



///////////////// Rest Operator ////////////////////
let s, t;
[s, ...t] = [10, 20, 30, 40];  //only can use with the last elem
console.log(s)
console.log(t)




////////////////// Cloning Arrays ///////

const arrrrr = [1,2,3,4,5,6]

/// two mwthods
const newArrrrr = [...arrrrr]

const [...newArrrrr2] = arrrrr