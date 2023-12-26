// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

const btn = document.querySelector('button');

function myMove(){
    const animate = document.getElementById('animate');
    let pos = 0;
    let id = setInterval(function(){
    if (pos != 350) {
        animate.style.left = pos+'px';
    pos++
    } else {
        clearInterval(id);
    }
    }, 1);
}



