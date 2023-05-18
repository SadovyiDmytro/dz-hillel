import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, handleToggleTodo }) {
  return (
    <ul className='local-form'>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          handleToggleTodo={() => handleToggleTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
