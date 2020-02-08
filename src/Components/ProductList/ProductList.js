import React from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.scss";
import products from "../../Flowers.js";

const ProductList = ({ updateCart }) => (
    <ul className={styles.root}>
        {products.map(({ id, name, price, src }) => (
            <li className={styles.cols} key={id}>
                <Product
                    id={id}
                    name={name}
                    price={price}
                    src={src}
                    updateCart={updateCart}
                />
            </li>
        ))}
    </ul>
);

export default ProductList;
