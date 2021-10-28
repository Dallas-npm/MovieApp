import {
  GET_AIRING_TODAY,
  GET_POPULAR_SHOW,
  GET_TOP_RATED_SHOW,
  GET_LATEST_SHOW,
  GET_SHOW_RECOMMENDATIONS,
  GET_SIMILAR_SHOWS,
  GET_ON_THE_AIR_SHOWS,
  GET_SHOW_ACTORS,
  GET_SHOW_TRAILERS,
  GET_SHOW_BY_ID,
  GET_SHOW_GENRES,
  SET_SHOW_ERROR,
} from "../actions/showTypes";

import { movieDB, apiKey } from "../../api/movieDB";
import { setMovieError } from "./movieActions";

export const setShowError = () => {
  const error = "Error";
  return {
    type: SET_SHOW_ERROR,
    payload: error,
  };
};

export const getAiringToday = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/airing_today?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_AIRING_TODAY,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getPopularShow = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_POPULAR_SHOW,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getTopRatedShow = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_TOP_RATED_SHOW,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getLatestShow = () => async (dispatch) => {
  try {
    const res = await movieDB.get(`tv/latest?api_key=${apiKey}&language=en-US`);
    dispatch({
      type: GET_LATEST_SHOW,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getShowRecommendations = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_SHOW_RECOMMENDATIONS,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getSimilarShows = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_SIMILAR_SHOWS,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getOnTheAirShows = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_ON_THE_AIR_SHOWS,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getShowActors = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_SHOW_ACTORS,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getShowTrailers = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `tv/${id}/videos?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_SHOW_TRAILERS,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getShowById = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(`tv/${id}?api_key=${apiKey}&language=en-US`);
    dispatch({
      type: GET_SHOW_BY_ID,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getShowGenres = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `genre/tv/list?api_key={apiKey}&language=en-US`
    );
    dispatch({
      type: GET_SHOW_GENRES,
      payload: res.data,
      error: "",
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getShowsForHomePage = () => async (dispatch) => {
  dispatch(getTopRatedShow());
  dispatch(getPopularShow());
};
