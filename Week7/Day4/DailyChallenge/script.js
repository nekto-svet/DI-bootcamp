// -------------------- Daily Challenge: Gifs --------------------------

// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.



const fetchData = async (category) => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`, 
        {
            method: "GET",
        });

        console.log(response.status);

        if (response.status === 200) {
            const data = await response.json();
            console.log(data.data[Math.floor(Math.random() * 51)])
            return data.data[Math.floor(Math.random() * 51)];
        } else {
            throw new Error(response.status);
        }
    } catch (error) {
        console.error(error);
    }
};

const appendGif = (gif) => {
    const allGifs = document.getElementById("gifs");
    const thisGif = document.createElement("div");
    thisGif.setAttribute('class', 'gifWrapper')
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Delete';
    buttonDelete.addEventListener('click', function(){
        allGifs.removeChild(thisGif);
    })

    const image = document.createElement("img");
    image.src = gif;
    thisGif.append(buttonDelete, image);
    allGifs.appendChild(thisGif);
}


document.getElementById("searchForm").addEventListener("submit", userSearch = (e) => {
    e.preventDefault();
    const userInput = document.getElementById("category");
    let category = userInput.value;

    fetchData(category)
        .then(gif => {
            let gifURL = gif.images.original.url;
            appendGif (gifURL);
        })
        .catch(error => console.log(error));
});


const deleteAll = () => {
    document.getElementById("gifs").innerHTML = '';
}
    
