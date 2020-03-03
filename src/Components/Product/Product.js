import React from "react";
import styles from "./Product.module.scss";
import { addToCart } from "../../store/actions";

const Product = ({ id, name, price, src, addToCart }) => (
    <div className={styles.root}>
        <img className={styles.img} alt={name} src={src} />
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>{price} lei</span>
        <button
            className={styles.addToCart}
            onClick={() => addToCart("string")}>
            Adauga in cos
        </button>
    </div>
);

export default Product;
