import React from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";
import Ripple from "react-ripples";

const Button = ({ children, onClick, className, ...rest }) => (
    <Ripple color="rgba(255, 255, 255, .3)">
        <button {...rest} className={classnames(styles.button, className)} onClick={onClick}>
            {children}
        </button>
    </Ripple>
);

export default Button;
