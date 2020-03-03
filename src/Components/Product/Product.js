import React from "react";
import styles from "./Product.module.scss";
import Button from "../Button/Button";

const Product = ({ id, name, price, src, addToCart }) => (
    <div className={styles.root}>
        <img className={styles.img} alt={name} src={src} />
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>{price} lei</span>
        <Button
            label='Adauga in cos'
            onClick={() =>
                addToCart({
                    id,
                    name,
                    price,
                    src
                })
            }
        />
    </div>
);

export default Product;
