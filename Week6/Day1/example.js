// // let mango = "yellow"

// // if (mango === "yellow"){
// //   let mango = "blue"
// //   console.log(mango)
// // }
// // console.log(mango)


// // var mango = "yellow"

// // if (mango === "yellow"){
// //   var mango = "blue"
// //   console.log(mango)
// // }
// // console.log(mango)

// // functions
// function userInfo (username, userAge) {
//     res = "My name is " + username + ", my age is " + userAge;
//     return res;
// }




// //try-catch-finally/////////////////////
// try {
//     //lines of code
//   } catch (e) {
  
//   } finally {
  
//   }
  
  

//   const func = () => {
//       try {
//           console.log("starting the try block")
//           //Unexisting variable
//           hello
//           //not accessed if there is an error with the above code
//           console.log("finishing the try block")
//       } catch (err) {
//           console.log("starting the catch block")
//           console.log(err)
//       } finally {
//           console.log("Function done")
//       }
//   }
  
//   func();


//   const funct = () => {
//     try {
//         console.log("starting the try block")
//         hello
//         console.log("finishing the try block")
//     } catch (err) {
//         console.log("starting the catch block")
//         console.log(`
//         Error Name : ${err.name}, 
//         Error Msg : ${err.message},
//         Error Stack : ${err.stack}`)
//     } finally {
//         console.log("Function done")
//     }
//   }
// funct();



// //throw <error object>/////////////////

// //object's methods///////////////
// let person= {
//     firstName : "Sarah",
//     eyeColor: "blue",
//     eat : function () {
//         console.log("I love chocolate")
//     }
// }

// // The ‘This’ Keyword

// let person2= {
//     firstName : "Sarah",
//     eyeColor: "blue",
//     eat : function () {
//         console.log("My name is" + this.firstName + "I love chocolate")
//     }
// }

// person2.eat()


// //DOM
// // queryselector
// const li = document.querySelectorAll('li');
// console.log(li);

// const h1 = document.querySelectorAll('h1');
// console.log(h1);

// const ListItems = document.querySelectorAll('li');
// console.log(ListItems);

// //get by id
// const ul1 = document.getElementById('first');
// console.log(ul1);

// //get by class
// const ulOne = document.getElementsByClassName('first');
// console.log(ulOne[0]);

//add to html
// const h2 = document.createElement("h2");
// h2.innerText = 'This is our first created element';

// const div = document.querySelector("#container");
// console.log(div)

// div.append(h2)





let text = document.getElementById("one").innerHTML;
console.log(text); 
