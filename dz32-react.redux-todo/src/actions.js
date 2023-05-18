export const toggleTodo = index => {
    return {
      type: 'TOGGLE_TODO',
      payload: index
    };
  };
  
  export const addTodo = task => {
    return {
      type: 'ADD_TODO',
      payload: task
    };
  };
  