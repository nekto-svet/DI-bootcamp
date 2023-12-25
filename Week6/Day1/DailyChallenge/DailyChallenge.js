// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?


planets = {'Mercury':0, 'Venus':0, 'Earth': 1, 'Mars':2, 'Jupiter':9, 'Saturn':14, 'Uranus':2, 'Neptune':14}
//I know that there are more moons to some of the planets, but I dont want to make 146 moons of Saturn, for example :)

let section = document.querySelector('section');

for (let p in planets){
    for (let m=0; m<planets[p]; m++){
        let moonDiv = document.createElement('div');
        moonDiv.setAttribute('class', 'moon');
        moonDiv.style.marginLeft = `${25*m}px`
        section.appendChild(moonDiv)
    }

    let planetDiv = document.createElement('div');
    planetDiv.setAttribute('class', 'planet');
    planetDiv.classList.add(`${p}Color`);
    section.appendChild(planetDiv)

}