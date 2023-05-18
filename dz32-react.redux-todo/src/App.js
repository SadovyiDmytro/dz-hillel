import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { toggleTodo, addTodo } from './actions';
import './App.css';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    dispatch({ type: 'SET_TODOS', payload: storedTodos });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleToggleTodo(index) {
    dispatch(toggleTodo(index));
  }

  function handleAddTodo(task) {
    dispatch(addTodo(task));
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