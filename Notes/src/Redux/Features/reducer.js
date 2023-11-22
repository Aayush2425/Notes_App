// reducer.js
const initialState = {
  h1: false,
  h2: false,
  h3: false,
  table: false,
  to_do: false,
};

const yourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_STATE":
      // Reset the state to its initial values
      return initialState;
    // Handle other actions if needed
    default:
      return state;
  }
};

export default yourReducer;
