import { ADD_TO_CART } from "./types";

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
