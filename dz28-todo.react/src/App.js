import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleToggleTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function handleAddTodo(task) {
    const newTodos = [...todos, { task, completed: false }];
    setTodos(newTodos);
  }

  return (
    <div className='main'>
      <h1>ToDo List</h1>
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} />
      <TodoForm handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;