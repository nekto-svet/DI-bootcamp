// Exercise 1
// !!!! Exercise 2 is similar to Daily Challenge, so I will do and submit it like DC
import { useRef } from 'react';
import {useSelector, useDispatch}  from 'react-redux';

import{
    add_todo, 
    toggle_todo, 
    delete_todo,
} from './todoSlice';

const Todos =() => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const textRef = useRef();
    todos.forEach(element => {
        console.log(element.isDone)        
    });

    return (
        <>
        <input type="text" placeholder="Todo" ref={textRef}/>
        <button onClick={()=>{dispatch(add_todo({text:textRef.current.value})); textRef.current.value=''}}>+</button> 

        {todos.map((todo) => {
            if (todo.text) {
                return (
                    <div key={todo.id}>
                        <div>{todo.text}</div>
                        {todo.isDone===true? 'Done':'Active'}
                        <button onClick={() => dispatch(toggle_todo({id:todo.id}))}>Toggle</button>
                        <br/>
                        <button onClick={() => dispatch(delete_todo({id:todo.id}))}>Remove</button>
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


export default Todos;