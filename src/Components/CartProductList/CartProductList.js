import React from "react";
import classnames from "classnames";
import TrashIcon from "../TrashIcon/TrashIcon";
import styles from "./CartProductList.module.scss";
import Button from "../Button/Button";
import flowersArray from "../../Flowers.js";

const products = flowersArray.reduce((obj, cur) => {
    obj[cur.id] = { ...cur };
    return obj;
}, {});

const Product = ({ id, name, quantity, price, incrementProductQuantity, decrementProductQuantity, removeFromCart }) => (
    <div className={styles.product}>
        <div className={styles.productHeader}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={products[id].src} alt={products[id].alt} />
            </div>
            <div className={styles.productInfo}>
                <h3 className={styles.productName}>{name}</h3>
                <span className={styles.productSKU}>sku: {id}</span>
            </div>
            <div className={styles.close} onClick={() => removeFromCart(id)}>
                &times;
            </div>
        </div>
        <div className={styles.productBody}>
            <div className={styles.infoBlock}>
                <span className={styles.infoBlockHeader}>cantitate</span>
                <div className={styles.selectQuantity}>
                    <Button type="button" className={styles.button} onClick={() => decrementProductQuantity(id)}>
                        -
                    </Button>
                    <span className={styles.quantity}>{quantity}</span>
                    <Button type="button" className={styles.button} onClick={() => incrementProductQuantity(id)}>
                        +
                    </Button>
                </div>
            </div>
            <div className={styles.infoBlock}>
                <span className={styles.infoBlockHeader}>pret unitar</span>
                <span className={styles.price}>{price} lei</span>
            </div>
            <div className={styles.infoBlock}>
                <span className={styles.infoBlockHeader}>subtotal</span>
                <span className={styles.price}>{price * quantity} lei</span>
            </div>
            <div className={classnames(styles.infoBlock, styles.trash)}>
                <span className={styles.infoBlockHeader}>sterge</span>
                <TrashIcon className={styles.trashIcon} onClick={() => removeFromCart(id)} />
            </div>
        </div>
    </div>
);

const CartProductList = ({ cartTotal, cart, incrementProductQuantity, decrementProductQuantity, removeFromCart }) => (
    <div className={styles.productList}>
        <h2>Cosul tau</h2>
        {Object.entries(cart.products).map(([key, { name, quantity, price }]) => (
            <Product
                key={key}
                id={key}
                name={name}
                quantity={quantity}
                price={price}
                incrementProductQuantity={incrementProductQuantity}
                decrementProductQuantity={decrementProductQuantity}
                removeFromCart={removeFromCart}
            />
        ))}
        <span className={styles.cartTotal}>Total comanda: {cartTotal} lei</span>
    </div>
);

export default CartProductList;
