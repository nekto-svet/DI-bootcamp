// //Daily Challenge: Tell The Story

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

const form = document.getElementById('libform');

const noun = document.getElementById('noun');
const adjective = document.getElementById('adjective');
const person = document.getElementById('person');
const verb = document.getElementById('verb');
const place = document.getElementById('place');

const story = document.getElementById('story');

function makeStory(e){
    e.preventDefault();
    
    story.textContent = `When ${person.value} finds ${adjective.value} ${noun.value} in ${place.value} everybody ${verb.value}`;
}

form.addEventListener("submit", makeStory);
