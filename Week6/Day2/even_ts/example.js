
function inform(){
    alert("You clicked me")
}


//Exercise
// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base
let table = document.getElementById('sampleTable')


function insertRow(){

    const trs = document.querySelectorAll('tr').length
    let newRow = document.createElement('tr');

    let i = 3
    let newCell = document.createElement('td');
    newCell.textContent = `Row${trs+1} cell1`
    newRow.append(newCell)
    
    let newCell2 = document.createElement('td');
    newCell2.textContent = `Row${trs+1} cell2`
    newRow.append(newCell2)
    

    table.append(newRow)
}


//exercise2
// Add a few event listener to the button. The event listeners should change the style of the button
// event.target.style

let btn = document.getElementById("jsstyle")

function RespondMouseOver(e) { 
    console.log("e", e) 
    e.target.style.color = 'blue'
    // or btn.style
} 

btn.addEventListener("mouseover", RespondMouseOver);


FORMS
oninput
onchange
onsubmit
e.preventDefault - to prevent disappearing of input



// FORM VALIDATION





//SetTimeout
function sayHi (name){
    alert('Hello', name);
}

let id = setTimeout(sayHi, 5000, 'username') //5 sec
console.log(id) //5

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    clearTimeout(id); //remove timeout
})

// setTimeout(function(){
//     alert('Hello')
// }, 3000)

//SetInterval
let num = 0
let intervalID = setInterval (function(){
    console.log(num)
    num++
}, 2000)


const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    clearInterval(intervalID); //remove timeout
})


//Exercise
// Use the same code as before but create a countdown in the banner.

// ... "The sales end in 10sec ! "

// ... "The sales end in 10min !  "

// etc ... until 0

// If you need help for this exercise, look at the 1st video of this tutorial

let banner = document.getElementsByClassName('banner')
console.log(banner)
// let Timeout = setTimeout (function(){
//     banner.style.display = 'block'
// }, 2000)
s = 20
banner.innerText = `The sales end in ${s}sec ! `
let intervalID = setInterval (function(){
    banner.innerText = `The sales end in ${s}sec ! `
    s-2
    }, 2000)

