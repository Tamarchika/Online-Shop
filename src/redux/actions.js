import actions from "../constants/action_constants";
import axios from "axios";
import url from "../constants/url_constants";


export const fetchData = () => {
    return async function(dispatch) {
        dispatch({ type: actions.DATA_FETCHING });
        try {
            const { data } = await axios.get(url.api);
            dispatch({ type: actions.DATA_SUCCESS, payload: data });
        } catch(err) {
            dispatch({ type: actions.DATA_FETCHING_FAILURE, payload: err.message });
        }
    }
}

export const getCategories = () => {
    return async function(dispatch) {
        dispatch({ type: actions.GET_CATEGORIES });
        try {
            const { categoryData } = await axios.get('https://fakestoreapi.com/products/electronics');
            dispatch({ type: actions.GET_CATEGORIES_SUCCESS, payload: categoryData }); console.log(categoryData)
        } catch(err) {
            dispatch({ type: actions.GET_CATEGORIES_FAILURE, payload: err.message });
        }
    }
}