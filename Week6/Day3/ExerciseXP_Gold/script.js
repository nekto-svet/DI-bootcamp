// ------------------Exercise 1 : Nested Functions--------------------
// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.


let landscape = function() {

 let result = "";

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }
//will add '_' x times to result


 let mountain = function(x) {
   result = result + "/" 
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }
 // will add '/' 1 time,  " ' " x times and '\\' 1 time  to result 

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

console.log(landscape())

//  ---my prediction:   ____/''''\\____
// ----I didn't win , because I forgot that '\' means :( But with two \\ the mountain more beautiful

// Change the code below to nested arrow functions.
let landscapeArrow = () => {

    let result = "";
   
    let flat = (x) => {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
   
    let mountain = (x) => {
      result = result + "/" 
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    return result;
   }
   
   console.log(landscape())


// ---------------------Exercise 3 : Currying----------------------------------

// Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1))
// ----my prediction 31


// ---------------------Exercise 4 : Currying----------------------------------
// Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
console.log(add5(12))
// --- I think currying can work like that so it will be 17

// --------------------Exercise 5 : Composing-----------------------------------
// Analyse the code below, and before executing it, predict the outcome of the last line.
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add6 = (num) => num + 5;
console.log(compose(add1, add6)(10))
// this I didnt understand
