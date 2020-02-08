import React from "react";
import styles from "./Cart.module.scss";

const CartHeader = () => (
    <div className={styles.cartHeader}>
        <span>Produs</span>
        <span>Cantitate</span>
        <span>Subtotal</span>
    </div>
);

const CartProduct = ({ product: { name, alt, src, quantity, price } }) => (
    <div>
        <div className={styles.product}>
            <img className={styles.productImage} src={src} alt={alt} />
            <p className={styles.productName}>{name}</p>
        </div>
        <div>
            <div className={styles.quantity}>
                <button className={styles.quantityBtn}>+</button>
                <span>{quantity}</span>
                <button className={styles.quantityBtn}>-</button>
            </div>
            <div className={styles.subtotal}>
                <span className={styles.productPrice}>{price}</span>x
                <span className={styles.quantitySubtotal}>{quantity}</span>
                <span className={styles.subtotalPrice}>{price * quantity}</span>
            </div>
        </div>
    </div>
);

const Cart = ({ products }) => (
    <div className={styles.root}>
        <h2>Cos de cumparaturi</h2>
        <div>
            <CartHeader />
            {products.map(({ name, alt, src, quantity, price }) => (
                <CartProduct
                    name={name}
                    alt={alt}
                    src={src}
                    quantity={quantity}
                    price={price}
                />
            ))}
        </div>
    </div>
);

export default Cart;
