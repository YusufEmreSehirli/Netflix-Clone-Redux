import Actions from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  genres: [],
};

const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.GENRES_LOADING:
      return { ...state, isLoading: true };

    case Actions.GENRES_ERROR:
      return { ...stat, isLoading: false, error: payload };

    case Actions.GENRES_SUCCES:
      return { ...state, isLoading: false, error: null, genres: payload };

    default:
      return state;
  }
};

export default genreReducer;
