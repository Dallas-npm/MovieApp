import { movieDB, apiKey } from "../../api/movieDB";

export const setAuthError = () => {
  const error = "Error";
  return {
    type: "SET_AUTH_ERROR",
    payload: error,
  };
};

export const getUser = (id) => async (dispatch) => {
  try {
    const user = await movieDB.get(
      `/account?api_key=${apiKey}&session_id=${id}`
    );
    dispatch({
      type: "GET_USER",
      payload: user.data,
    });
  } catch (error) {
    dispatch(setAuthError(error.response.data));
  }
};

export const getRatedMovie = (token, acc_id) => async (dispatch) => {
  try {
    const rated = await movieDB.get(
      `account/${acc_id}/rated/movies?api_key=${apiKey}&language=en-US&session_id=${token}&sort_by=created_at.asc&page=1`
    );
    dispatch({
      type: "GET_RATED_MOVIE",
      payload: rated.data,
    });
  } catch (error) {
    dispatch(setAuthError(error.response.data));
  }
};

export const getRatedShow = (token, acc_id) => async (dispatch) => {
  try {
    const rated = await movieDB.get(
      `account/${acc_id}/rated/tv?api_key=${apiKey}&language=en-US&session_id=${token}&sort_by=created_at.asc&page=1`
    );
    dispatch({
      type: "GET_RATED_SHOW",
      payload: rated.data,
    });
  } catch (error) {
    dispatch(setAuthError(error.response.data));
  }
};

export const clearUser = () => {
  return {
    type: "CLEAR_USER",
  };
};
