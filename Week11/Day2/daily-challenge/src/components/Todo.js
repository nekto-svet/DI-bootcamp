import { useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Date from './Date';

import{
    add_todo, 
    toggle_todo, 
    delete_todo,
} from './todoSlice';


 const Todo = (props) => {
    const state = useSelector((state) =>state.todos)
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
            <button onClick={()=>{dispatch(add_todo({date:date, text:textRef.current.value})); textRef.current.value=''}}>Add Todo to this day</button> 
            {state.map((todo) => {
                if (todo.date === date) {
                    return (
                        <div key={todo.id}>
                            <div>{todo.text}</div>
                            {todo.isDone===true? 'Done':'Active'}
                            <button onClick={() => dispatch(toggle_todo({id:todo.id}))}>Change Status</button>
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
            </> : null
        }
        </>
    )
}



export default Todo;