import {useState} from 'react';

// This component :
// will hold a counter property in the state. The counter value starts at 0.
// will render the counter. Every time the users clicks on it, the function handleClick() will be called, and add +1 to the counter property.
// If the counter reaches 5, you will throw an error ‘I crashed!’

const BuggyCounter = (props) => {
    const[count, setCount] = useState(0);
    if (count > 5){
        throw new Error ('I crashed!');
    }
    return (
        <>
        <button onClick={() => setCount(count+1)}>Add</button>
        <h2>{count}</h2>
        </>
    )
}

export default BuggyCounter;