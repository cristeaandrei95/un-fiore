import React from "react";
import styles from "./Button.module.scss";
import Ripple from "react-ripples";

const Button = ({ label, onClick }) => (
    <div className={styles.root}>
        <Ripple color='rgba(255, 255, 255, .3)'>
            <div className={styles.button} onClick={onClick}>
                {label}
            </div>
        </Ripple>
    </div>
);

export default Button;
