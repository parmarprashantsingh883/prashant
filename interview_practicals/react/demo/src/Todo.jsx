import React from 'react'
import { useState } from "react"; 
function Todo() {
    const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTodo = (i) =>
    setTodos(todos.filter((_, index) => index !== i));

  return (
    <div>
         <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map((t, i) => (
        <div key={i}>
          {t}
          <button onClick={() => removeTodo(i)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default Todo