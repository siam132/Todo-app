let id = 1;

const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: id++,
          content: action.payload.content,
          done: action.payload.done,
          time: new Date()
        },
      ];

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "DONE":
      return state.map((e) => {
        if (action.payload.id === e.id) {
          let updatedTodo = e;
          updatedTodo.done = !e.done;
          return updatedTodo;
        } else return e;
      });
    default:
      return state;
  }
};

export default TodoReducer;
