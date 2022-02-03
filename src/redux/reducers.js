import { combineReducers } from "redux";
import actions from "../constants/action_constants";

// states

const allProductsState = {
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

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userCartState = {
  cart: cartItemsFromStorage,
  loading: false,
  error: null,
};

const categoryNamesState = {
  categoryNames: [],
  loading: false,
  error: null,
};

//Reducers

export const productsReducer = (state = allProductsState, action) => {
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

export const loginStatusReducer = (state = userLogedIn, action) => {
  switch (action.type) {
    case actions.UPDATE_LOGIN_STATUS:
      return { ...state, isLogedIn: action.payload };
    default:
      return state;
  }
};

//Category Names Reducer
export const categoryNamesReducer = (state = categoryNamesState, action) => {
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

// Single Product Reducer

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
    case actions.DELETE_PRODUCT_FROM_CART:
      const filtered = state.cart.filter(
        (x) => x.product.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(filtered));
      return {
        ...state,
        cart: state.cart.filter((x) => x.product.id !== action.payload),
      };
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  data: productsReducer,
  category: categoryReducer,
  categories: categoryNamesReducer,
  userStatus: loginStatusReducer,
  userCart: userCartReducer,
});
