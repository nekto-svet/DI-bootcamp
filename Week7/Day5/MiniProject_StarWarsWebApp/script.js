//get data of random character
const getData = async () => {
    try {
        const response = await fetch(
            "https://www.swapi.tech/api/people/" + (Math.floor(Math.random() * 84)),
            {
            method: "GET",
            }
        );
        const data = await response.json();
        const linkWorld = data.result.properties.homeworld;
        let homeWorld = await getWord(linkWorld);
        render(data.result.properties, homeWorld);
    } catch (error) {
        console.log(error);
    }
};

//get homeworld of choosed character
const getWord = async(link) => {
    try {
        const response = await fetch(
            link, {method: "GET",}
        );
        const data = await response.json();
        return data.result.properties.name;
    } catch (error) {
        console.log(error);
    }
};
  
//put information to document
const render = (obj, world) => {
    let html =  
        `<div class='newCharacter'>
            <h2>${obj.name}</h2>
            <p>Height: ${obj.height}</p>
            <p>Birth Year: ${obj.birth_year}</p>
            <p>Gender: ${obj.gender}</p>
            <p>Home World: ${world}</p>
        </div>`;
    document.getElementById("info").innerHTML = html;
};

// put icon of load to document and call all previous functions
const handleClick = () => {
    document.getElementById("info").innerHTML = 
    `<div class="fa-3x">
        <i class="fa-solid fa-cog fa-spin" id="load"></i>
    </div>`;
    getData();
};