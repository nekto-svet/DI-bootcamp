// Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base

let form = document.getElementById('MyForm');

let radius = document.getElementById('radius');
let volume = document.getElementById('volume');

form.addEventListener("submit", getUserComments);

function getUserComments(e){
    e.preventDefault();
    volume.value = (4/3)*Math.pow(radius.value, 3)*Math.PI;
}



