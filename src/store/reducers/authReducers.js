export const initialState = {
  user: null,
  error: "",
  rate: null,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "SET_AUTH_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "RATE":
      return {
        ...state,
        rate: action.payload,
      };

    case "CLEAR_USER":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default tokenReducer;
