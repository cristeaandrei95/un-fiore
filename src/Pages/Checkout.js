import React from "react";
import { connect } from "react-redux";
import Cart from "../Components/Cart/Cart";

const Checkout = ({ cart }) => <div>{<Cart cart={cart} />}</div>;
const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(Checkout);
