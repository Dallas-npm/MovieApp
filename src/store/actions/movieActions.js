import {
  GET_MOVIE_RECOMMENDATIONS,
  GET_SIMILAR_MOVIES,
  GET_LATEST_MOVIES,
  GET_POPULAR_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_MOVIE_TRENDING,
  GET_MOVIE_GENRES,
  GET_MOVIE_BY_ID,
  GET_MOVIE_TRAILER,
  GET_MOVIE_ACTORS,
  GET_TRENDING,
  SEARCH_MOVIES,
  SET_MOVIE_ERROR,
  CLEAR_MOVIE,
} from "./movieTypes";

import { movieDB, apiKey } from "../../api/movieDB";

export const setMovieError = () => {
  const error = "Error";
  return {
    type: SET_MOVIE_ERROR,
    payload: error,
  };
};

export const getMovieRecommendations = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_MOVIE_RECOMMENDATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const clearMovie = () => {
  return {
    type: CLEAR_MOVIE,
  };
};

export const getSimilarMovies = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_SIMILAR_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getPopularMovies = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getLatestMovies = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/latest?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_LATEST_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getUpcomingMovies = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_UPCOMING_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getNowPlayingMovies = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_NOW_PLAYING_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getTopRated = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_TOP_RATED_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getMovieTrending = () => async (dispatch) => {
  try {
    const res = await movieDB.get(`/trending/movie/week?api_key=${apiKey}`);
    dispatch({
      type: GET_MOVIE_TRENDING,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getMovieGenres = () => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `genre/movie/list?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_GENRES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getMovieById = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/${id}?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const searchMoviesShows = (name) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `/search/multi?api_key=${apiKey}&language=en-US&query=${name}&page=1&include_adult=false`
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getMovieTrailer = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_TRAILER,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getMovieActors = (id) => async (dispatch) => {
  try {
    const res = await movieDB.get(
      `movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_ACTORS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getTrending = () => async (dispatch) => {
  try {
    const res = await movieDB.get(`trending/all/week?api_key=${apiKey}`);
    dispatch({
      type: GET_TRENDING,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setMovieError(error.response.data));
  }
};

export const getMoviesForHomePage = () => async (dispatch) => {
  dispatch(getTrending());
  dispatch(getPopularMovies());
  dispatch(getTopRated());
};

export const getMovieContent = (id) => async (dispatch) => {
  dispatch(getMovieRecommendations(id));
  dispatch(getMovieActors(id));
  dispatch(getMovieTrailer(id));
  dispatch(getSimilarMovies(id));
  dispatch(getMovieById(id));
};

export const getMoviesContent = () => async (dispatch) => {
  dispatch(getMovieTrending());
  dispatch(getTopRated());
  dispatch(getUpcomingMovies());
  dispatch(getPopularMovies());
  dispatch(getNowPlayingMovies());
};
