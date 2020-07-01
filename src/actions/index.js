export const add = (todo) => {
  return {
    type: "ADD_TODO",
    payload: {
      content: todo,
      done: false,
    },
  };
};

export const remove = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id: id,
    },
  };
};

export const done = (id) => {
  return {
    type: "DONE",
    payload: {
      id: id,
    },
  };
};
