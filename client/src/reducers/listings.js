//reducer
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    case "VIEWS":
      return state.map((elem) => {
        return elem._id === action.payload._id ? action.payload : elem;
      });
    default:
      return state;
  }
};
