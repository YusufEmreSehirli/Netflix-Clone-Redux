import api from "../../utils/api";
import Actions from "../actionTypes";

export const getPopular = () => (dispatch) => {
  dispatch({
    type: Actions.MOVIES_LOADING,
  });

  api
    .get("/movie/popular")
    .then((res) =>
      dispatch({ type: Actions.MOVIES_SUCCES, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({
        type: Actions.MOVIES_ERROR,
        payload: err.message,
      })
    );
};

export const getGenres = () => (dispatch) => {
  dispatch({
    type: Actions.GENRES_LOADING,
  });
  api
    .get("/genre/movie/list")
    .then((res) =>
      dispatch({ type: Actions.GENRES_SUCCES, payload: res.data.genres })
    )
    .catch(() =>
      dispatch({ type: Actions.GENRES_ERROR, payload: err.message })
    );
};
