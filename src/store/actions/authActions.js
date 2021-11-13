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

export const rateMovie = (id, token, value) => async (dispatch) => {
  try {
    const rate = await movieDB.post(
      `
    /movie/${id}/rating?api_key=${apiKey}&session_id=${token}`,
      {
        value,
      }
    );

    dispatch({
      type: "RATE",
      payload: rate.data,
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
