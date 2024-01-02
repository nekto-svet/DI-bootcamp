// ---------------- Exercises XP Gold ------------------------

// ----------- Exercise 1 : Print Full Name -------------------

// Create a function called printFullName.
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`
// Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

// The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)

function printFullName ({first, last}) {
    return `Your full name is ${first} ${last}`;
}
console.log(printFullName({first: 'Elie', last:'Schoppik'}));




//--------------- Exercise 2 : Keys And Values -------------------

// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj) {
    let sortedKeys = Object.keys(obj).sort();
    let sortedValues = sortedKeys.map (key => obj[key]);
    let sorted = [sortedKeys,sortedValues];
    console.log(sorted);
}

keysAndValues({ d: 1, b: 2, c: 3 });
keysAndValues({ a: "Apple", c: "Google", b: "Microsoft"});
keysAndValues({ key1: true, key2: false, key3: undefined });




// ------------- Exercise 3 : Counter Class ------------------
// Analyze the code below, what will be the output?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment(); //count = 1
counterOne.increment(); //count = 2

const counterTwo = counterOne;
counterTwo.increment(); //count = 3

console.log(counterOne.count); //3
// I won 
//  \_0_/
//    | 
//    П
//   / \



