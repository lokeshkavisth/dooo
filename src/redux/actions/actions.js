export const todos = (data) => {
  return {
    type: "GET_TODOS",
    payload: data,
  };
};

export const todoEdit = (id) => {
  return {
    type: "TODO_EDIT",
    payload: id,
  };
};
