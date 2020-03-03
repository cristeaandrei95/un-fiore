import { combineReducers } from "redux";
import { ADD_TO_CART } from "../actions/types";
import preloadedState from "./preloadedState";

const cart = (state = preloadedState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default combineReducers({
    cart
});
