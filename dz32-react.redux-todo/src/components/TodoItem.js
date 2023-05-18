import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, handleToggleTodo }) {
  return (
    <li className='form-item'
      onClick={handleToggleTodo}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      {todo.task}
    </li>
  );
}

export default TodoItem;
