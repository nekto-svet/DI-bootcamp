// // ---------------- Daily Challenge: Play With Words --------------------

// // ---------------------1rst Daily Challenge-----------------------------
// // Create two functions. Each function should return a promise.
// // The first function called makeAllCaps(), takes an array of words as an argument
// // If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// // else, reject the promise with a reason.
// // The second function called sortWords(), takes an array of words uppercased as an argument
// // If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// // else, reject the promise with a reason.

// let makeAllCaps = (array) => {
//     return new Promise((res,rej) => {
//         if(array.every(elem => typeof elem == 'string')) {
//             res(array.map(elem => elem.toUpperCase()));
//         } else {
//             rej('The array contaims elements with inappropriate type ');
//         } 
//     })
// }

// let sortWords = (array) => {
//     return new Promise((res,rej) => {
//         array.length > 4 ? res(array.sort()) : rej('The array length is too small');
//     })
// }

// // Test:
// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// // //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// // //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))


// ------------------- 2nd Daily Challenge -------------------------
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

let toJs = (JSONobj) => {
    return new Promise ((res, rej) => {
        let morseObj = JSON.parse(JSONobj);
        morseObj.length != 0 ? res(morseObj) : rej(new Error('object is empty'));
    })
}

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


let toMorse = (morseJS) => {
    let userPrompt = prompt('Give me a word');
    let usersWord = userPrompt.toLowerCase().split('');
    return new Promise ((res, rej) => {
        if (usersWord.every(elem => Object.keys(morseJS).includes(elem))) {
            document.getElementById("word").textContent = `'${userPrompt}' gives you`;
            res(usersWord.map(char => char=morseJS[char]));
        } else {
            rej(new Error ("Can't read your word"));
        }
    })
}

// // The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// // this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

let joinWords = (morseTranslation) => {
    console.log(morseTranslation)
    const html = morseTranslation.map((item) => {
        return `<div>
            ${item}
            </div>`;
    });
    document.getElementById("answer").innerHTML = html.join("");
}

toJs(morse)
    .then ((morseJS) => {
        toMorse(morseJS)
            .then ((morseArr) => {
                joinWords(morseArr);
            })
            .catch (err => console.log(err));
    })
    .catch (err => console.log(err));

// // Chain the three functions.
// // Example:
// // "Hello" gives you
// // ....
// // .
// // .-..
// // .-..
// // ---


      