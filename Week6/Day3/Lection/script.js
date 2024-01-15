
//ternary operator////////////////////////////

//Exercise 1
// Create a function to check the year given by the user

// If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

function checkYear (year) {
    let answer = year>2000 ? 'You are in the 21st century':
       'You live in the Middle Age';
    console.log(answer)
}
checkYear(2023)






//function Declaration/////////////////////////////
function funcName (param) {
    //code
}


//function Expression///////////////////////////////
const funcName1 = function (param) {
    //code
}

//Arrow Function Expressions///////////////////////////
const funcName2 = (param, param) => {
    //code
    return //smth
} //much more useful


//example
div.addEventListener('click', ()=>{
    //code
})

//without return////////////////////////
const funcName3 = (param, param) => param+param//code //smth
// everythimg aftet => what what will be returned

//with 1 parametr///////////////////////
const funcName4 = param => param*2//code //smth
//BUT wihtout parameters we need ()


// Exercise
// Using arrow function and ternary operator create a calculator that returns the result of the calculus depending on the operator : +, - , * ,

// The function should be able to to take 2 numbers as parameters

const calc = (num1, num2, operator) => {
    return operator == '+' 
    ? num1+num2
    : operator == '-' 
    ? num1-num2
    : operator == '*' 
    ? num1*num2
    : operator == '/'
    ? num1/num2
    :'Invalid operator';
}

console.log(calc(9,3,'/'))



(function (name) {
    console.log ('Hello' +name);
})('Sveta')


//function iside function
function add() {
    let counter = 0;
    function plus(){
        counter +=1;
        console.log(counter);
    }
    plus()
}
add()

//closures////////////////////////////////////
function outs (x){
    function ins(y){
        return x+y;
    }
    return ins
}

let fnIns = outs(3);
console.log(fnIns)

let result = fnIns(4)
console.log(result)



// Currying///////////////////////////////////////
const add = a => b => a + b;
console.log(add) //a => b => a + b
console.log(add(2)) //b => a + b
console.log (add(2)(3)) //5
const result = add(2)(3)
console.log(result) //  5


//Uncurrying////////////////////////////////////////
//Uncurrying is the inverse operation of currying.

curryedMultiply = (n) => (m) => n * m
curryedMultiply(3)(4) === 12 // true

multiply = (n, m) => curryedMultiply(n)(m)
multiply(3, 4) === 12 // true


// Pass By Value And Pass By Reference///////////////////////
const colors = ['blue', 'greem', 'grey'];
const person = {
    fname : 'Daniel',
    age : 27
};

const colors1 = colors //by reference

//copy array
console,log(...colors)
const colors2 = [...colors]



//Object////////////////////
let user = {};
let alsoObj = new Object(); //like new instance of the Class Object



function makeUser (name, age) {
    return {
        name, // name:name
        age,
    }
}
let user1 = makeUser('John', 23)


//Advansed JS method//////////////////////////////
const colors = ['blue', 'yellow'];
console.log(colors.includes('yellow'));

console.log ('buttle'.replace('tt','z'));

console.log('string'.padStart(30, 'CAT')) // 30 - total length of string, so 5 will not change anything 




//// forEach mathod
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

groceries.fruits.forEach((element)=> {
    console.log(element) 
})
/// ==
// for (let element of qroseries.fruts)
