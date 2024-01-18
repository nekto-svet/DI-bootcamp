// import logo from './logo.svg';
import './App.css';
import User from './components/User'
// import users from './users.json'
import React from 'react';

//////STYLING///////////////////
// inline styling
//classes with external css
// css libraries - bootstrap react, material, tachyon


//// COMPONENTS////
// function
// class
// hooks
// lifecycle of a component
// state object
// rerender

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { //object with this.smth that provides to rerender a page with this.setState
//       title: 'My State Title Robots',
//       users: []
//     }
//     // this.title = "Robots";
//   }

//   changeTitle = () => {
//     // this.title = 'Users';
//     // this.state.title = 'Users'; //doesnt rerender page with a new totle without this.state
//     this.setState({title:'My User'}) // the only way to rerender a page!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     fetch ('https://jsonplaceholder.typicode.com/users').then (res=> res.json()).then(data => {
//       console.log(data);
//       this.setState({users:data})
//     })
//   }
//   render(){
//     return (
//       <div>
//         <h1>{this.state.title}</h1>
//         <button onClick={this.changeTitle}>Change Title</button>
//          {this.state.users.map((item,index) => {
//             return <User userinfo={item} key={index}/> 
//           })}
//       </div>
//     )
//   }
       
// }


////////////////// FUNCTION COMPONENTS WITH HOOKS ////////////////




const App = () => {
  // constructor(){
  //   super();
  //   this.state = { //object with this.smth that provides to rerender a page with this.setState
  //     title: 'My State Title Robots',
  //     users: []
  //   }
  //   // this.title = "Robots";
  // }

  // changeTitle = () => {
  //   // this.title = 'Users';
  //   // this.state.title = 'Users'; //doesnt rerender page with a new totle without this.state
  //   this.setState({title:'My User'}) // the only way to rerender a page!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //   fetch ('https://jsonplaceholder.typicode.com/users').then (res=> res.json()).then(data => {
  //     console.log(data);
  //     this.setState({users:data})
  //   })
  // }
const [title, setTitle] = React.useState('My Title'); // this is a hook (variable, function - inside a array)
const [users, setUsers] = React.useState([]);

// React.useEffect(()=>{ //wery cool staff. listen dependencies => if depencies => if condition => function 
//  if (condition)
//  function()
// }, [dependecies]) // NOT to use condition = dependencies !!

const changeTitle = () => {
  setTitle('New User')
  getUsers();
}

const getUsers = () => {
  fetch ('https://jsonplaceholder.typicode.com/users').then (res=> res.json()).then(data => {
      console.log(data);
      setUsers(data);
    })
}
return (
    <div>
      <h1>{title}</h1>
      <div>
      {users?users.map((item,index) => {
            return <User userinfo={item} key={index}/> 
          }) : null}
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  )
}
       

export default App;
