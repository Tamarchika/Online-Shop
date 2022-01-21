import actions from "../constants/action_constants";
import axios from "axios";
import url from "../constants/url_constants";

export const fetchData = () => {
  return async function (dispatch) {
    dispatch({ type: actions.DATA_FETCHING });
    try {
      const { data } = await axios.get(url.api);
      dispatch({ type: actions.DATA_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: actions.DATA_FETCHING_FAILURE, payload: err.message });
    }
  };
};

export const getCategories = (category) => {
  return async function (dispatch) {
    dispatch({ type: actions.GET_CATEGORIES });
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      dispatch({ type: actions.GET_CATEGORIES_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: actions.GET_CATEGORIES_FAILURE, payload: err.message });
    }
  };
};

export const updateLoginStatus = (status) => {
  return {
    type: actions.UPDATE_LOGIN_STATUS,
    payload: status,
  };
};
export const getCategoryNames = () => {
  return async function (dispatch) {
    dispatch({ type: actions.GET_CATEGORY_NAME });
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      console.log(data);
      dispatch({ type: actions.GET_CATEGORY_NAME_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: actions.GET_CATEGORY_NAME_FAILURE,
        payload: err.message,
      });
    }
  };
};
