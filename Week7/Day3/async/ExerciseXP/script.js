//------------------ Exercises XP -----------------

// -----------🌟 Exercise 1 : Comparison----------

// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.

let compareToTen = (num) => {
    return new Promise((res, rej) => {
        num<=10 ? res(`${num} is less or equal to 10`) : rej(`${num} is greater than 10`);
    })
}

// Test:
//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// //In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));


// -----------------  🌟 Exercise 2 : Promises  ---------
//   Create a promise that resolves itself in 4 seconds and returns a “success” string.

let success = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 4000)
})

success
    .then(answer => console.log(answer))
    .catch(err => console.log(err));


// ---------------🌟 Exercise 3 : Resolve & Reject-------------
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

let Promise1 = Promise.resolve(3);

Promise1.then((result) => {
  console.log(result);
});


let Promise2 = Promise.reject('Boo!');

Promise2.then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
  
