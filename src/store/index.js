import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import movieReducer from "./reducers/movieReducer";
import showReducer from "./reducers/showReducers";
import actorReducer from "./reducers/actorReducers";
import tokenReducer from "./reducers/authReducers";

export const allReducers = combineReducers({
  movies: movieReducer,
  shows: showReducer,
  actors: actorReducer,
  token: tokenReducer,
});

const store = createStore(allReducers, compose(applyMiddleware(thunk)));

export default store;
