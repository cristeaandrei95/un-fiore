import React from "react";
import styles from "./Cart.module.scss";
import Button from "../Button/Button";
import flowersArray from "../../Flowers.js";

const products = flowersArray.reduce((obj, cur) => {
    obj[cur.id] = { ...cur };
    return obj;
}, {});

const CartHeader = () => (
    <div className={styles.header}>
        <span>Produs</span>
        <span>Cantitate</span>
        <span>Subtotal</span>
    </div>
);

const CartProduct = ({
    name,
    alt,
    src,
    id,
    quantity,
    price,
    incrementProductQuantity,
    decrementProductQuantity,
    removeFromCart
}) => (
    <div className={styles.product}>
        <div className={styles.info}>
            <img className={styles.image} src={src} alt={alt} />
            <h3 className={styles.productName}>{name}</h3>
            <button className={styles.close} onClick={() => removeFromCart(id)}>
                &times;
            </button>
        </div>
        <div className={styles.controls}>
            <div className={styles.quantity}>
                <Button
                    onClick={() => decrementProductQuantity(id)}
                    className={styles.quantityBtn}>
                    -
                </Button>
                <span className={styles.quantityText}>{quantity}</span>
                <Button
                    onClick={() => incrementProductQuantity(id)}
                    className={styles.quantityBtn}>
                    +
                </Button>
            </div>
            <div className={styles.subtotal}>
                <span className={styles.productPrice}>
                    {price} lei x {quantity}
                </span>
                <span className={styles.quantitySubtotal}>=</span>
                <span className={styles.subtotalPrice}>
                    {price * quantity} lei
                </span>
            </div>
        </div>
    </div>
);

const Cart = ({
    cart,
    incrementProductQuantity,
    decrementProductQuantity,
    removeFromCart
}) => (
    <div className={styles.cart}>
        <h2>Cos de cumparaturi</h2>
        <div>
            <CartHeader />
            <ul className={styles.productList}>
                {Object.entries(cart.products).map(
                    ([key, { name, quantity, price }]) => (
                        <li className={styles.item} key={key}>
                            <CartProduct
                                name={name}
                                alt={products[key].alt}
                                src={products[key].src}
                                quantity={quantity}
                                id={key}
                                price={price}
                                incrementProductQuantity={
                                    incrementProductQuantity
                                }
                                decrementProductQuantity={
                                    decrementProductQuantity
                                }
                                removeFromCart={removeFromCart}
                            />
                        </li>
                    )
                )}
            </ul>
        </div>
    </div>
);

export default Cart;
