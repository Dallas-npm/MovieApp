export const initialState = {
  user: null,
  error: "",
  ratedMovie: null,
  ratedShow: null,
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
    case "GET_RATED_MOVIE":
      return {
        ...state,
        ratedMovie: action.payload,
      };

    case "GET_RATED_SHOW":
      return {
        ...state,
        ratedShow: action.payload,
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
