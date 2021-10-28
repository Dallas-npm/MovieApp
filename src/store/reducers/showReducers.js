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

const initialState = {
  airingToday: null,
  popularShow: null,
  topRatedShow: null,
  latestShow: null,
  showRecommendations: null,
  similarShows: null,
  onTheAirShows: null,
  showActors: null,
  showTrailers: null,
  showById: null,
  showGenres: null,
  showError: "",
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_AIRING_TODAY:
      return {
        ...state,
        airingToday: action.payload,
      };
    case GET_POPULAR_SHOW:
      return {
        ...state,
        popularShow: action.payload,
      };
    case GET_TOP_RATED_SHOW:
      return {
        ...state,
        topRatedShow: action.payload,
      };
    case GET_LATEST_SHOW:
      return {
        ...state,
        latestShow: action.payload,
      };
    case GET_SHOW_RECOMMENDATIONS:
      return {
        ...state,
        showRecommendations: action.payload,
      };
    case GET_SIMILAR_SHOWS:
      return {
        ...state,
        similarShows: action.payload,
      };
    case GET_ON_THE_AIR_SHOWS:
      return {
        ...state,
        onTheAirShows: action.payload,
      };
    case GET_SHOW_ACTORS:
      return {
        ...state,
        showActors: action.payload,
      };
    case GET_SHOW_TRAILERS:
      return {
        ...state,
        showTrailers: action.payload,
      };
    case GET_SHOW_BY_ID:
      return {
        ...state,
        showById: action.payload,
      };
    case GET_SHOW_GENRES:
      return {
        ...state,
        showGenres: action.payload,
      };
    default:
      return state;
  }
};

export default showReducer;
