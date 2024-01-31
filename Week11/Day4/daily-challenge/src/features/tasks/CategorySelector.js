import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
    filter_tasks,
    find_task,
} from './taskSlice';


const CategorySelector = () => {
    const dispatch = useDispatch();
    const [inputId, setInputId] = useState(0);

    console.log(inputId);

    // const handleChangeID = (e) => {
    //     setInputId(e.target.value)
    // }
    

    return(
        <>
        <h3>Filter Tasks</h3>
        <div>
        <button value='All' onClick={(e)=>dispatch(filter_tasks(e.target.value))}>All</button>
        <button value='Work' onClick={(e)=>dispatch(filter_tasks(e.target.value))}>Work</button>
        <button value='Study' onClick={(e)=>dispatch(filter_tasks(e.target.value))}>Study</button>
        <button value='Family' onClick={(e)=>dispatch(filter_tasks(e.target.value))}>Family</button>
        <button value='Home' onClick={(e)=>dispatch(filter_tasks(e.target.value))}>Home</button>
        <button value='Rest' onClick={(e)=>dispatch(filter_tasks(e.target.value))}>Rest</button>
        <button value='Other' onClick={(e)=>dispatch(filter_tasks(e.target.value))}>Other</button>
        </div>
        <div>
            <input type='number' onChange={(e)=>setInputId(e.target.value)}/>
            <button onClick={(e)=>dispatch(find_task(inputId))}>Find by ID</button>
            <button onClick={()=>dispatch(find_task(0))}>ShowAll</button>
        </div>
        </>
    )
}

export default CategorySelector;