// ------------------------🌟 Exercise 1 : Giphy API ------------------------------


// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    {
    method: "GET",
    })
  .then(response => {
    if (response.status == 200) {
        return response.json();
    }else{
        throw new Error(response.status);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(`Fetch error: ${error}`);
  });


//  ------------------------ 🌟 Exercise 2 : Giphy API --------------------------

//   Read carefully the documention to understand all the possible queries that the URL accept.
//   Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
//   Make sure to check the status of the Response and to catch any occuring errors.
//   Console.log the Javascript Object that you receive.



fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=25&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
  .then(response => {
    if (response.status == 200) {
        return response.json();
    }else{
        throw new Error(response.status);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(`Fetch error: ${error}`);
  });



// ----------------------- 🌟 Exercise 3 : Async Function --------------------

// Improve the program below :

fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.


const fetchData = async() => {
    try {
        const response = await fetch(
            "https://www.swapi.tech/api/starships/9/",
            {
              method: "GET",
            });
        if (response.status == 200) {
            const data = await response.json();
            console.log(data.result);
        }else{
            throw new Error(response.status);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

fetchData();

// -------------------------- 🌟 Exercise 4: Analyze ------------------------------
// Analyse the code provided below - what will be the outcome?

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
//my prediction
// calling
// resolved (after 2 seconds)

