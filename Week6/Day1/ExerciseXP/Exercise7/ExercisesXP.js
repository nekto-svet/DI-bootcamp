allBooks = [
    {
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        image : 'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Selfish_Gene3.jpg',
        alreadyRead : true
    },

    {
        title: 'Harry Potter and the Methods of Rationality',
        author: 'Eliezer Yudkowsky',
        image : 'https://upload.wikimedia.org/wikipedia/en/e/ec/HPMOR_Yudkowsky.jpg',
        alreadyRead : false
    }
]

// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let section = document.querySelector('section');

for (let book of allBooks){
    let newDiv = document.createElement('div');
    let newTextNode = document.createTextNode(`${book['title']} written by ${book['author']}`);
    let img = document.createElement('img');
    img.src = book['image'];
    img.style.width = '100px';

    newDiv.appendChild(img);
    newDiv.appendChild(newTextNode);
    section.appendChild(newDiv)
    if (book['alreadyRead']) {
        section.children[allBooks.indexOf(book)].style.color = 'red'
    }
}



