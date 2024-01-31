import { useDispatch } from "react-redux"
import { toggle_task, delete_task, change_task } from "./taskSlice";
import { useState } from "react";

const Task = ({task}) => {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState(task.text);
    const [onChanging, setOnChanging] = useState(false);


    console.log (onChanging)

    return (
        onChanging === true? 
        <>
        <div key = {task.id}>
        <input type="text" value={newText} onChange={(e)=>setNewText(e.target.value)} />
        <button onClick={()=>{dispatch(change_task({id:task.id, text:newText})); setOnChanging(false)}}>Change</button>
        </div>
        <br/>
        </>
        :
        <>
        <div key = {task.id}>
        <div id='taskName'>
            {task.text}
            <button onClick={()=>setOnChanging(true)}>Change Task</button>
        </div>
        <div className='text'>
            {task.isDone?'Done':'Active'}
            <button onClick={()=>dispatch(toggle_task(task.id))}>Toggle</button>
        </div> 
        <div className='text'>Cathegory: {task.category}</div>
        <button onClick={()=>dispatch(delete_task(task.id))}>Delete</button>
        </div>
        <br/>
        </>
    
    )
}

export default Task;