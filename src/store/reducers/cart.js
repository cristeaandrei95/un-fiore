import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_PRODUCT_QUANTITY,
    DECREMENT_PRODUCT_QUANTITY
} from "../actions/types";
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
        case REMOVE_FROM_CART:
            return {
                ...action.payload
            };
        case INCREMENT_PRODUCT_QUANTITY:
            return {
                ...action.payload
            };
        case DECREMENT_PRODUCT_QUANTITY:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default cart;
