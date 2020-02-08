import React from "react";
import { Link } from "react-router-dom";
import minicart from "../../assets/minicart.svg";
import styles from "./Minicart.module.scss";

const Minicart = ({ cart, updateCart }) => (
    <div className={styles.root}>
        <Link className={styles.icon} to='/checkout'>
            <img className={styles.image} src={minicart} alt='minicart' />
            <span className={styles.badge}>{Object.keys(cart).length}</span>
        </Link>

        {/* <div className={styles.dropdown}>
            {Object.keys(cart).map(productID => (
                <MinicartProduct
                    key={productID}
                    product={cart[productID]}
                    updateCart={updateCart}
                />
            ))}
            <div className={styles.footer}>
                <div>
                    <span className={styles.total}>Total: </span>
                    <span className={styles.price}>100 Lei</span>
                </div>
                <Link className={styles.checkout} to='/checkout'>
                    Checkout
                </Link>
            </div>
        </div> */}
    </div>
);

// const MinicartProduct = ({ id, name, quantity, price }, updateCart) => {
//     const handleIncrement = () => updateCart(cart => (cart[id].quantity += 1));
//     const handleDecrement = () => updateCart(cart => (cart[id].quantity -= 1));

//     return (
//         <div>
//             <span>{name}</span>
//             <img src='./' alt={name} />
//             <div>
//                 <button className='increment' onClick={handleIncrement}>
//                     +1
//                 </button>
//                 <span>{quantity}</span>
//                 <button className='decrement' onClick={handleDecrement}>
//                     -1
//                 </button>
//             </div>
//             <span>{price}</span>
//         </div>
//     );
// };

export default Minicart;
