import React from "react";
import { connect } from "react-redux";
import ProductList from "../Components/ProductList/ProductList";
import { addToCart } from "../store/actions";

const Home = ({ addToCart }) => (
    <div>
        <ProductList addToCart={addToCart} />
    </div>
);

const mapStateToProps = ({ cart }) => ({
    cart
});

const mapDispatchToProps = dispatch => ({
    addToCart
});

export default connect(mapStateToProps, { addToCart })(Home);
