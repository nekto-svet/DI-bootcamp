const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


    function createRobot(robot){
            const card = document.createElement('div');
            card.setAttribute('class', 'roboCard');
            card.setAttribute('id', 'roboCard');

            const circle = document.createElement('div');
            circle.setAttribute('class', 'circle')
            circle.style.backgroundImage = `url(${robot.image})`;
            // const image = document.createElement('img');
            // image.src = robot.image;
            // image.setAttribute('class', 'roboImg');

            const username = document.createElement('h3');
            username.textContent = robot.name;
            username.setAttribute('class', 'roboName');

            const email = document.createElement('p')
            email.textContent = robot.email;
            email.setAttribute('class', 'roboMail');

            // circle.appendChild(image);
            card.append(circle, username, email);
            return card;
    }



    function getDiv() {
        const mainDiv = document.getElementById('container');
        return mainDiv
    }
    
    function showAllRobots(){
        const place = getDiv()
        robots.forEach((robot) => {
            let newRobot = createRobot(robot);
            place.appendChild(newRobot);
        })
    }
    
    function searchRobot(input){
        const place = getDiv()
        robots.forEach((robot) => {
            let robotName = robot.name.toLowerCase();
            if (robotName.includes(input)) {
                let newRobot = createRobot(robot);
                place.appendChild(newRobot);
            } 
        })
    }

    function deleteRobots() {
        const place = getDiv()
        while (place.contains(document.getElementById('roboCard'))) {
            document.getElementById('roboCard').remove();
        }
    }
    
    function getUsrInput(){
        let newInput =  document.getElementById('find');
        newInput.oninput = function() {
            deleteRobots();
            userImput = newInput.value.toLowerCase();
            searchRobot(userImput);
        };
    }

    showAllRobots()
    getUsrInput()

