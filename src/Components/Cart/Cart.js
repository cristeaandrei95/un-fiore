import React from "react";
import styles from "./Cart.module.scss";
import flowersArray from "../../Flowers.js";

const products = flowersArray.reduce((obj, cur) => {
    obj[cur.id] = { ...cur };
    return obj;
}, {});

const CartHeader = () => (
    <div className={styles.cartHeader}>
        <span>Produs</span>
        <span>Cantitate</span>
        <span>Subtotal</span>
    </div>
);

const CartProduct = ({ name, alt, src, quantity, price }) => (
    <div>
        <div className={styles.product}>
            <img className={styles.productImage} src={src} alt={alt} />
            <p className={styles.productName}>{name}</p>
        </div>
        <div>
            <div className={styles.quantity}>
                <button className={styles.quantityBtn}>-</button>
                <span>{quantity}</span>
                <button className={styles.quantityBtn}>+</button>
            </div>
            <div className={styles.subtotal}>
                <span className={styles.productPrice}>{price} lei</span>x
                <span className={styles.quantitySubtotal}>{quantity}</span>
                <span className={styles.subtotalPrice}>
                    {price * quantity} lei
                </span>
            </div>
        </div>
    </div>
);

const Cart = ({ cart }) => (
    <div className={styles.root}>
        <h2>Cos de cumparaturi</h2>
        <div>
            <CartHeader />
            {Object.entries(cart.products).map(
                ([key, { name, quantity, price }]) => (
                    <CartProduct
                        name={name}
                        alt={products[key].alt}
                        src={products[key].src}
                        quantity={quantity}
                        price={price}
                        key={key}
                    />
                )
            )}
        </div>
    </div>
);

export default Cart;
