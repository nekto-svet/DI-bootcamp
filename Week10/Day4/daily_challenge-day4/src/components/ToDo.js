import React, { useState, createContext, useContext, useReducer, useRef } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, completed: false}];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
    case "EDIT":
      return state.map((todo) => todo.id === action.id ? {...todo, text: action.text } : todo);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const textRef = useRef();
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleAddTodo = () => {
    dispatch({ type: "ADD", text: textRef.current.value });
    textRef.current.value = "";
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);

    if (todoToEdit) {
      setEditingId(id);
      textRef.current.value = todoToEdit.text;
    }
  };

  const saveEditedTodo = () => {
    dispatch({ type: "EDIT", id: editingId, text: textRef.current.value });
    textRef.current.value = "";
    setEditingId(null);
  };

  const filteredTodos = (() => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  })();

  return (
    <>
      <input type="text" placeholder="Todo" ref={textRef} />
      <button onClick={handleAddTodo}>Add Todo</button>

      <div>
        <button onClick={() => setFilter("all")}>Show All</button>
        <button onClick={() => setFilter("completed")}>Show Completed</button>
        <button onClick={() => setFilter("active")}>Show Active</button>
      </div>

      <div>
        {filteredTodos.map((todo) => (
           <div key={todo.id}>
           {editingId === todo.id ? (
             <>
               <input type="text" ref={textRef} defaultValue={todo.text} />
               <button onClick={saveEditedTodo}>Save</button>
             </>
           ) : (
             <>
               <h3>{todo.text}</h3>
               {todo.completed === true ? 'Complited' : 'Active'}
               <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)}/>
               <br/>
               <button onClick={() => removeTodo(todo.id)}>Remove</button>
               <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
             </>
           )}
         </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;