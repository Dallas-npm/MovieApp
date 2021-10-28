import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import movieReducer from "./reducers/movieReducer";
import showReducer from "./reducers/showReducers";

export const allReducers = combineReducers({
  movies: movieReducer,
  shows: showReducer,
});

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
