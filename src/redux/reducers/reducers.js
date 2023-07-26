const initial = {
  TODOS: [],
  EDIT_TODO: "",
};

export const todoReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_TODOS":
      return { ...state, TODOS: payload };

    case "TODO_EDIT":
      return { ...state, EDIT_TODO: payload };
    default:
      return state;
  }
};
