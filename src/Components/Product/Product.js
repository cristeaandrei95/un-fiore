import React from "react";
import styles from "./Product.module.scss";

const Product = ({ id, name, price, src, updateCart }) => {
    const addToCart = () => {
        updateCart(cart => ({
            ...cart,
            [id]: {
                name,
                price,
                quantity: 1
            }
        }));
    };
    return (
        <div className={styles.root}>
            <img className={styles.img} alt={name} src={src} />
            <h3 className={styles.name}>{name}</h3>
            <span className={styles.price}>{price}</span>
            <button className={styles.addToCart} onClick={addToCart}>
                Adauga in cos
            </button>
        </div>
    );
};

export default Product;
