import React from "react";
import { connect } from "react-redux";
import Cart from "../Components/Cart/Cart";
import {
    incrementProductQuantity,
    decrementProductQuantity,
    removeFromCart
} from "../store/actions/cart";

const Checkout = ({
    cart,
    incrementProductQuantity,
    decrementProductQuantity,
    removeFromCart
}) => (
    <div>
        {
            <Cart
                cart={cart}
                incrementProductQuantity={incrementProductQuantity}
                decrementProductQuantity={decrementProductQuantity}
                removeFromCart={removeFromCart}
            />
        }
    </div>
);
const mapStateToProps = ({ cart }) => ({ cart });
const mapDispatchToProps = dispatch => ({
    incrementProductQuantity: id => dispatch(incrementProductQuantity(id)),
    decrementProductQuantity: id => dispatch(decrementProductQuantity(id)),
    removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
