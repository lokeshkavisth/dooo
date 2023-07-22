export const todos = (data) => {
  return {
    type: "GET_TODOS",
    payload: data,
  };
};
