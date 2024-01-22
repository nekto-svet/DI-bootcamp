import React from 'react';

//EXERCISE 2
// Do the exercise xp 4 of yesterday using Class Components

// Use the shouldComponentUpdate() method and set it to return true.
// If you set the return value of the shouldComponentUpdate() method to false, you won’t be able to change the value of the favoriteColor property to “blue”, (even after clicking on the button)

// When the component is mounting, it will be rendered with the favorite color “red”.
// When the component has been mounted, a timer changes the state, and the color becomes “yellow”. You will see :
// In the componentDidUpdate method, add a console.log("after update"). Open the Dev Tools, to see when this message is displayed.

// Use the getSnapshotBeforeUpdate() method, add a console.log("in getSnapshotBeforeUpdate"). Open the Dev Tools, to see when this message is displayed.



// EXERCISE 3
// (I did console.log instead of alerts)
// Using the previous exercise (Exercise 2 : Lifecycle)
// Add a new property named show to the state object. Set the value of this property to true.
// Add a Class component named Child to the same file. This new component will render a ‘Hello World!’ message in a header tag.
// This new component uses the componentWillUnmount method to alert an unmounted message.
// Render the Child component in your App, only if the value of the show property is set to true.
// Create a “Delete” button that when clicked on (ie. onClick) will call a function that updates the value of the show property to false.

class Child extends React.Component {
    componentWillUnmount() {
      console.log('Child component WillUnmount reached');
    }
  
    render() {
      return (
        <div>
          <h2>Hello World!</h2>
        </div>
      );
    }
  }

class Color extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: 'red',
        show: true
      };
    }
  
    componentDidMount() {
        setTimeout(() => {
            console.log('componentDidMount reached');
            this.setState({ color: 'yellow' });
          }, 1000);
        }


    componentDidUpdate(){
        console.log("after update");
    }

    getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate");
        return null;
    }

    shouldComponentUpdate() {
        return true;
      }
  
    changeToBlue = () => {
      this.setState({ color: 'blue' });
    };

    handleDelete = () => {
        this.setState({ show: false });
      };
  
    render() {
      const { color, show } = this.state;

      return (
        <div>
          <h3>My favorite color is {color}</h3>
          <button onClick={this.changeToBlue}>Change to Blue</button>
          {show ? <Child/> : null}
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      );
    }
  }


export default Color;