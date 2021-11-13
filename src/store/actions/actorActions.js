import {
  GET_ACTOR_BY_ID,
  GET_ACTOR_MOVIES_SHOWS,
  GET_POPULAR_ACTORS,
  SET_ACTORS_ERROR,
  CLEAR_ACTOR,
} from "./actorTypes";

import { movieDB, apiKey } from "../../api/movieDB";

export const setActorsError = () => {
  const error = "Error";
  return {
    type: SET_ACTORS_ERROR,
    payload: error,
  };
};

export const clearActor = () => {
  return {
    type: CLEAR_ACTOR,
  };
};

export const getActorById = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `person/${id}?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_ACTOR_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setActorsError(error.response.data));
  }
};

export const getActorMoviesShows = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `person/${id}/combined_credits?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_ACTOR_MOVIES_SHOWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setActorsError(error.response.data));
  }
};

export const getPopularActors = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `person/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_POPULAR_ACTORS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setActorsError(error.response.data));
  }
};

export const getActor = (id) => async (dispatch) => {
  dispatch(getActorById(id));
  dispatch(getActorMoviesShows(id));
  dispatch(getPopularActors());
};
