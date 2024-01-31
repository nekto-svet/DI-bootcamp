import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import Task from "./Task";

const TaskList = () => {
    const {find_id, category, tasks} = useSelector(state => state.tasks);
    const filteredTasks = tasks.filter(task => category === 'All'?  task : task.category === category);
    const taskByID = tasks.find(task => task.id == find_id);

    return (
        <div>
            <AddTask/>
            <br/>

            <h3>All Tasks</h3>
            <br/>
            <div>
                {find_id == 0 ?
                filteredTasks.map(task => {
                    return <Task task={task}/>
                })
                : taskByID?
                <Task task={taskByID}/>
                :null
                }
            </div>
        </div>
    )
}

export default TaskList;