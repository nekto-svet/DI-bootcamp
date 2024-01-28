import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { 
    addTodo,
    toggleTodo,
    deleteTodo,
 } from "../redux/actions";


 const Todo = (props) => {
    const state = useSelector((state) =>state.todoReducer)
    const dispatch = useDispatch();
    const textRef = useRef();


    return (
        <>
        <input type="text" placeholder="Todo" ref={textRef}/>
        <button onClick={()=>{dispatch(addTodo(Date.now(), textRef.current.value)); textRef.current.value=''}}>+</button> 
        {state.map((todo) => {
            if (todo.text) {
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
        </>
    )
}



export default Todo;