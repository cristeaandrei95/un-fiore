import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = ({ vertical, onClick, ...rest }) => (
    <nav {...rest} className={classnames(styles.root, { [styles.vertical]: vertical })}>
        <Link onClick={onClick} className={styles.link} to="/intrebari-frecvente">
            Intrebari frecvente
        </Link>
        <Link onClick={onClick} className={styles.link} to="/despre-noi">
            Despre noi
        </Link>
        <Link onClick={onClick} className={styles.link} to="/contact">
            Contact
        </Link>
    </nav>
);

export default Navigation;
