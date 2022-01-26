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
      dispatch({ type: actions.GET_CATEGORY_NAME_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: actions.GET_CATEGORY_NAME_FAILURE,
        payload: err.message,
      });
    }
  };
};

export const getUserCart = () => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_USER_CART });
    try {
      const { data } = await axios.get("https://fakestoreapi.com/carts/user/1");
      const promises = data[0].products.map((item) =>
        axios.get(`https://fakestoreapi.com/products/${item.productId}`)
      );
      const responses = await axios.all(promises);
      const cart = responses.map((response, i) => {
        return {
          product: response.data,
          qty: data[0].products[i].quantity,
        };
      });
      dispatch({ type: actions.GET_USER_CART_SUCCESS, payload: cart });
    } catch (error) {
      dispatch({ type: actions.GET_USER_CART_FAILURE, payload: error.message });
    }
  };
};

export const addProductToCart = (product) => {
  return {
    type: actions.ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const deleteProductFromCart = (id) => {
  return {
    type: actions.DELETE_PRODUCT_FROM_CART,
    payload: id,
  };
};
