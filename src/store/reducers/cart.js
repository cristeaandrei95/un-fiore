import { ADD_TO_CART } from "../actions/types";
import preloadedState from "./preloadedState";

const initialState = {
    products: {},
    ...preloadedState
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default cart;
