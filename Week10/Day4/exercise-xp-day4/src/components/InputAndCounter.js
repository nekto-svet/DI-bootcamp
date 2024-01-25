import {useState, useRef} from 'react';

const Input = () => {
    const [counter, setCounter] = useState(0)
    const inputRef = useRef();

    const handleChange = (e) => {
        setCounter(inputRef.current.value.length)
    }

    return(
        <>
        <input type="text" ref={inputRef} onChange={(e) => {handleChange(e)}}/>
        <h3>{counter}</h3>
        </>
    )
    
}

export default Input;