// Exercise 2 : Work With Forms

// Retrieve the form and console.log it.
const form = document.querySelector('form');
console.log(form);


// Retrieve the inputs by their id and console.log them.
const fNameInput = document.getElementById('fname');
console.log(fNameInput);

const lNameInput = document.getElementById('lname');
console.log(lNameInput);


// Retrieve the inputs by their name attribute and console.log them.
const firstNameInput = form.elements.firstname;
console.log(firstNameInput);

const lastNameInput = form.elements.lastname;
console.log(lastNameInput);


// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
function getUserComments(e){
    e.preventDefault();

    // get the values of the input tags,
    // make sure that they are not empty,
    const FN = firstNameInput.value;
    const LN = lastNameInput.value;

    // create an li per input value,
    // then append them to a the <ul class="usersAnswer"></ul>, below the form.

    let body = document.querySelector('body');
    let newUl = document.createElement('ul');
    newUl.setAttribute('class', 'usersAnswer');

    let liFirstName = document.createElement('li');
    liFirstName.textContent = FN;
    newUl.appendChild(liFirstName);

    let liSecondName = document.createElement('li');
    liSecondName.textContent = LN;
    newUl.appendChild(liSecondName);

    body.insertBefore(newUl, body.lastChild);
    console.log(FN, LN);

  }

form.addEventListener("submit", getUserComments);


