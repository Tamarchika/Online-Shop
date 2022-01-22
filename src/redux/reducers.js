import { combineReducers } from "redux";
import actions from "../constants/action_constants";

// states

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

const categoryNamesState = {
  categoryNames: [],
  loading: false,
  error: null,
};

const productState = {
  product: [],
  loading: false,
  error: null,
};

//Reducers

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

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_PRODUCT_SUCCES:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: null,
      };
    case actions.GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        product: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const allReducers = combineReducers({
  data: productsReducer,
  category: categoryReducer,
  categories: categoryNamesReducer,
  product: productReducer
});
