//Exercise 1: Timer
// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

let timeout = setTimeout (function(){
    alert ('Hello world!');
}, 2000);


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// Part III
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let interval = setInterval (function(){
    const container = document.getElementById('container');

    newParag = document.createElement('p');
    newParag.textContent = 'Hello world';

    container.appendChild(newParag);

    const allParag = document.querySelectorAll('p');
    if (allParag.length == 5) {
    clearInterval(interval); 
}
}, 2000);

const btn = document.getElementById('clear');

btn.addEventListener('click', function(){
    clearInterval(interval); 
})
