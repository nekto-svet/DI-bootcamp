import { useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Date from './Date';

import { 
    addTodo,
    toggleTodo,
    deleteTodo,
 } from "../redux/actions";


 const Todo = (props) => {
    const state = useSelector((state) =>state.todoReducer)
    const dispatch = useDispatch();
    const textRef = useRef();
    const [date, setDate] = useState();

    return (
        <>
        <Date setDate = {setDate} />
        <br/>
        {date? 
            <>
            <input type="text" placeholder="Todo" ref={textRef}/>
            <button onClick={()=>{dispatch(addTodo(date, textRef.current.value)); textRef.current.value=''}}>Add Todo to this day</button> 
            {state.map((todo) => {
                if (todo.date === date) {
                    return (
                        <div key={todo.id}>
                            <div>{todo.text}</div>
                            {todo.isDone===true? 'Done':'Active'}
                            <input type="checkbox" onChange={() => dispatch(toggleTodo(todo.id))}/>
                            <br/>
                            <button onClick={() => dispatch(deleteTodo(todo.id))}>Remove</button>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        )
                    }
                return null;
                } 
            )}
            </> : null
        }
        </>
    )
}



export default Todo;