const initialState = {
    todos: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TODOS':
        return {
          ...state,
          todos: action.payload
        };
      case 'TOGGLE_TODO':
        const updatedTodos = state.todos.map((todo, index) => {
          if (index === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        });
        return {
          ...state,
          todos: updatedTodos
        };
      case 'ADD_TODO':
        const newTodo = {
          task: action.payload,
          completed: false
        };
        return {
          ...state,
          todos: [...state.todos, newTodo]
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;