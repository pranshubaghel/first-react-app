import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, newValue) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newValue;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="text"
              value={task}
              onChange={(e) => editTask(index, e.target.value)}
            />
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
