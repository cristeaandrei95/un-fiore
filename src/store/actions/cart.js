import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_PRODUCT_QUANTITY, DECREMENT_PRODUCT_QUANTITY } from "./types";

export const addToCart = ({ id, ...product }) => (dispatch, getState) => {
    const { cart } = getState();
    const products = { ...cart.products };

    if (!products[id]) {
        products[id] = { quantity: 1, ...product };
    } else {
        products[id].quantity += 1;
    }

    dispatch({
        type: ADD_TO_CART,
        payload: { ...cart, products }
    });
};

export const incrementProductQuantity = id => (dispatch, getState) => {
    const { cart } = getState();
    const products = { ...cart.products };
    const limit = 99;

    if (products[id].quantity < limit) {
        products[id].quantity += 1;
    }

    dispatch({
        type: INCREMENT_PRODUCT_QUANTITY,
        payload: { ...cart, products }
    });
};

export const decrementProductQuantity = id => (dispatch, getState) => {
    const { cart } = getState();
    const products = { ...cart.products };

    if (products[id].quantity > 1) {
        products[id].quantity -= 1;
    }

    dispatch({
        type: DECREMENT_PRODUCT_QUANTITY,
        payload: { ...cart, products }
    });
};

export const removeFromCart = id => (dispatch, getState) => {
    const { cart } = getState();
    const products = { ...cart.products };

    delete products[id];

    dispatch({
        type: REMOVE_FROM_CART,
        payload: { ...cart, products }
    });
};
