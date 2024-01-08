// Inside the todoApp directory, create two files: todo.js and app.js.

// In todo.js, define an ES6 module that exports a TodoList class.

// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

// Export the TodoList class.

export class TodoList {
    constructor() {
        this.tasks = [];
        }
    
    addTask(newTask) {
        this.tasks.push({ taskName : newTask, completed: false });
    }

    markAsComplete(completedTask) {
        this.tasks.forEach(task => {
            if (task.taskName == completedTask && task.completed == false){
                task.completed = true
            }
        })
    }
    
    listAllTasks() {
        this.tasks.forEach((task, index) => {
            let status = task.completed == false ? 'not complited' : 'complited'
        console.log(`${index + 1}. ${task.taskName}: ${status}.`);
        });
    }
}
    