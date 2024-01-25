// import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Navbar from 'react-bootstrap/Navbar';

import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';

import PostList from './components/PostList';

import SocialMedias from './components/Example1';
import Skills from './components/Example2';
import Experiences from './components/Example3';

// Exercise 1 : React Router Error Boundary
//In a new Javascript file, create an ErrorBoundary Class Component

// In the App.js file, display a Bootstrap navbar, containing three React Router <NavLink></NavLink>:
// the first one redirects to /
// the second one redirects to /profile
// the third one redirects to /shop

// In the App.js file, create three functional components : HomeScreen, ProfileScreen, and ShopScreen.
// HomeScreen and will display a header tag
// ProfileScreen will display a header tag
// ShopScreen will throw an error

// 7. Add a Route for each of the functional component. Each one has a different path.
// 8. Wrap each of the functional component with the ErrorBoundary component.


// Exercise 2 : Display JSON Data In React JS
// Create a json file, and copy/paste this data (components/data).
// Create a component named PostList.js that displays the title and the content of each object from the json file.
// Render the PostList component in your App.js file.

// Exercise 3 : Display JSON Data And Parse It
// Create a json file and copy/paste this data (components/second_data).
// In a new Javascript file, create a Component named Example1 that displays the SocialMedias array data.
// In a new Javascript file, create a Component named Example2 that displays the Skills data.
// In a new Javascript file, create a Component named Example3 that displays the Experiences array data. Add a key attribute to every new <div>.
// Import those components to the App.js file.


// Exercise 4 : Post JSON Data With React JS
// Go to webhook and copy the link of “Your unique URL”.
// In the App.js file, create an async await function to fetch the json data from the URL you copied.
// Use a POST method and some headers.
// Send this hardcoded stringified json data to your body.
// key1: 'myusername',
// email: 'mymail@gmail.com',
// name: 'Isaac',
// lastname: 'Doe',
// age: 27
// 4. In the App.js file, create a button, that when clicked on, displays the response in the console.


const url = 'https://webhook.site/3d14acf1-67f4-49e8-a1c2-698e17c0ec14';
const data = {
  key1: 'myusername',
  email: 'mymail@gmail.com',
  name: 'Isaac',
  lastname: 'Doe',
  age: 27
}

const postData = async() => {
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000"
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  console.log('exercise4 ', responseData);
  
}


function App() {
  return (
    <div className="App">
    <Navbar className="bg-body-tertiary">
      <Link to="/"> Home </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/shop"> Shop </Link>
    </Navbar>

      <Routes>
        <Route path="/" element={<ErrorBoundary><Home/></ErrorBoundary>}/>

        <Route path="/profile" element={<ErrorBoundary><Profile/></ErrorBoundary>} />
        
        <Route path="/shop" element={<ErrorBoundary><Shop/></ErrorBoundary>} />

        <Route path="/data" element={<ErrorBoundary><PostList/></ErrorBoundary>} />

        <Route path="/social_medias" element={<ErrorBoundary><SocialMedias/></ErrorBoundary>} />

        <Route path="/skills" element={<ErrorBoundary><Skills/></ErrorBoundary>} />

        <Route path="/experiences" element={<ErrorBoundary><Experiences/></ErrorBoundary>} />
             
      </Routes>

      <Link to="/data"> Exercise 2 </Link> <br/>
      <Link to="/social_medias"> Exercise 3 part 1 </Link><br/>
      <Link to="/skills"> Exercise 3 part 2 </Link><br/>
      <br/>
      <button onClick={postData}>Post Data</button>

    </div>
  );
}

export default App;
