import React from "react";
import { connect } from "react-redux";
import ProductList from "../../Components/ProductList/ProductList";
import { addToCart } from "../../store/actions/cart";

const Home = ({ addToCart }) => (
    <div>
        <ProductList addToCart={addToCart} />
    </div>
);

const mapStateToProps = ({ cart }) => ({
    cart
});

const mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
