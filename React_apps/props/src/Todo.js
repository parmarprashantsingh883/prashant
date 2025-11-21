import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTask = id => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {list.map(item => (
        <p key={item.id} onClick={() => deleteTask(item.id)}>
          {item.text}
        </p>
      ))}
    </>
  );
}

export default Todo;
