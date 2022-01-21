import { combineReducers } from "redux";
import actions from "../constants/action_constants";

const productsState = {
  products: [],
  loading: false,
  error: null,
};

const categoriesState = {
  categories: [],
  loading: false,
  error: null,
};

const userLogedIn = {
  isLogedIn: false,
};

const userCartState = {
  cart: [],
  loading: false,
  error: null,
};

const categoryNamesState = {
  categoryNames: [],
  loading: false,
  error: null,
};

export const productsReducer = (state = productsState, action) => {
  switch (action.type) {
    case actions.DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actions.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case actions.DATA_FETCHING_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export const categoryReducer = (state = categoriesState, action) => {
  switch (action.type) {
    case actions.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: null,
      };
    case actions.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        categories: [],
        error: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export const logninStatusReducer = (state = userLogedIn, action) => {
  switch (action.type) {
    case actions.UPDATE_LOGIN_STATUS:
      return { ...state, isLogedIn: action.payload };
    default:
      return state;
  }
};
const categoryNamesReducer = (state = categoryNamesState, action) => {
  switch (action.type) {
    case actions.GET_CATEGORY_NAME:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CATEGORY_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryNames: action.payload,
        error: null,
      };
    case actions.GET_CATEGORY_NAME_FAILURE:
      return {
        ...state,
        loading: false,
        categoryNames: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const userCartReducer = (state = userCartState, action) => {
  switch (action.type) {
    case actions.GET_USER_CART:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_USER_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        error: null,
      };
    case actions.GET_USER_CART_FAILURE:
      return {
        ...state,
        loading: false,
        cart: [],
        error: action.payload,
      };
    case actions.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  data: productsReducer,
  category: categoryReducer,

  userStatus: logninStatusReducer,

  categories: categoryNamesReducer,
  userCart: userCartReducer,

  categories: categoryNamesReducer,
});
