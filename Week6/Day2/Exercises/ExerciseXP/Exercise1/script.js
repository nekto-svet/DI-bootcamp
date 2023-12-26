// Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.querySelector('h1');
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector('article');
article.removeChild(article.lastElementChild);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector('h2');
h2.style.backgroundColor = 'white'
function changeBackGround(e) { 
    if (e.target.style.backgroundColor == 'white') {
        e.target.style.backgroundColor = 'red';
    } else {
        e.target.style.backgroundColor = 'white';
    }
} 
h2.addEventListener("click", changeBackGround);


// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector('h3');
function hide(e) { 
    e.target.style.display = 'none';
} 
h3.addEventListener("click", hide);

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const btnBold =  document.querySelector('button');
const paragraphs = document.querySelectorAll('p');
for (let p of paragraphs){
    p.style.fontWeight = '300';
}

function boldText(e) { 
    for (let p of paragraphs){
        if (p.style.fontWeight == '300') {
            p.style.fontWeight = 'bold';
        } else{
            p.style.fontWeight = '300';
        }
    }
}
btnBold.addEventListener("click", boldText);


// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
function randomFontSize(e) {
    e.target.style.fontSize = Math.floor(Math.random() * 100) + 'px';
}
h1.addEventListener('mouseover', randomFontSize);

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
function fadeOut(e) {
    e.target.setAttribute('class', 'animation');
}
paragraphs[1].addEventListener('mouseover', fadeOut);
