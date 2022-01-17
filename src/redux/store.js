import { createStore, applyMiddleware, compose } from "redux";
import { productsReducer } from "./reducers";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(productsReducer, composeEnhancers(applyMiddleware(thunk)));