import React from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.scss";
import products from "../../Flowers.js";

const ProductList = ({ addToCart }) => (
    <ul className={styles.root}>
        {products.map(({ id, name, price, src }) => (
            <li className={styles.cols} key={id}>
                <Product addToCart={addToCart} id={id} name={name} price={price} src={src} />
            </li>
        ))}
    </ul>
);

export default ProductList;
