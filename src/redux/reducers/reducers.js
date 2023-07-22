export const todoReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_TODOS":
      return payload;
    default:
      return state;
  }
};
