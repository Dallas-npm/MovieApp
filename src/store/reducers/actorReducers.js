import {
  GET_ACTOR_BY_ID,
  GET_ACTOR_MOVIES_SHOWS,
  GET_POPULAR_ACTORS,
  SET_ACTORS_ERROR,
  CLEAR_ACTOR,
} from "../actions/actorTypes";

export const initialState = {
  actor: null,
  actorMoviesShows: null,
  popularActors: null,
  error: "",
};

const actorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTORS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ACTOR_BY_ID:
      return {
        ...state,
        actor: action.payload,
        error: "",
      };

    case GET_ACTOR_MOVIES_SHOWS:
      return {
        ...state,
        actorMoviesShows: action.payload,
        error: "",
      };

    case GET_POPULAR_ACTORS:
      return {
        ...state,
        popularActors: action.payload,
        error: "",
      };

    case CLEAR_ACTOR:
      return {
        actor: null,
        error: "",
      };
    default:
      return state;
  }
};

export default actorReducer;
