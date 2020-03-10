import React from "react";
import styles from "./Product.module.scss";
import Button from "../Button/Button";

const Product = ({ id, name, price, src, addToCart }) => (
    <div className={styles.root}>
        <img className={styles.img} alt={name} src={src} />
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>{price} lei</span>
        <div className={styles.buttonWrapper}>
            <Button
                className={styles.button}
                onClick={() =>
                    addToCart({
                        id,
                        name,
                        price,
                        src
                    })
                }>
                Adauga in cos
            </Button>
        </div>
    </div>
);

export default Product;
