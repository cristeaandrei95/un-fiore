import { ADD_TO_CART } from "./types";

export const addToCart = ({ id, ...productData }) => (dispatch, getState) => {
    const { cart } = getState();
    const { products } = cart;
    console.log(id);

    if (!cart.products[id]) {
        products[id] = { quantity: 1, productData };
    } else {
        products[id].quantity += 1;
    }

    dispatch({
        type: ADD_TO_CART,
        payload: { ...cart, products }
    });
};
