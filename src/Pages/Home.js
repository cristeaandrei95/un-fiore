import React from "react";
import ProductList from "../Components/ProductList/ProductList";

export const Home = ({ updateCart }) => (
    <div>
        <ProductList updateCart={updateCart} />
    </div>
);
