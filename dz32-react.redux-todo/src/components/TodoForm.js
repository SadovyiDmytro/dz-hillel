import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTodo(inputValue);
    setInputValue('');
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='form-input' type="text" value={inputValue} onChange={handleChange} />
      <button className='form-btn' type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
