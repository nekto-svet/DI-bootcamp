// ----------------------- Exercises XP Ninja ----------------------

// -------------------- Exercise 1 : Bird Class --------------------

// Analyze the code below, what will be the output?
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

// my prediction
//"I'm pink. 🌸" 
//"I'm a bird. 🦢"
// I won

