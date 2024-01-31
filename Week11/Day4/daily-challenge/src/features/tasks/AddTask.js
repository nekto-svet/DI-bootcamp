import { useRef } from "react";
import { useDispatch } from "react-redux";
import { add_task, find_task } from "./taskSlice";

const AddTask = () => {
    const dispatch = useDispatch();
    const categoryRef = useRef();
    const textRef = useRef();

    return(
       <div id='addtasks'>
           <h3>Add task</h3>
           <select ref={categoryRef}>
               <option value='Other'>Choose Category</option>
               <option value='Work'>Work</option>
               <option value='Study'>Study</option>
               <option value='Family'>Family</option>
               <option value='Home'>Home</option>
               <option value='Rest'>Rest</option>
               <option value='Other'>Other</option>
           </select>
           <input type='text' placeholder="New Task" ref={textRef}/>
           <button onClick={()=>{
               dispatch(add_task({text:textRef.current.value, category:categoryRef.current.value}));
               dispatch(find_task(0));
               textRef.current.value='';
               }}>Add Task</button>
       </div>

    )
}

export default AddTask;