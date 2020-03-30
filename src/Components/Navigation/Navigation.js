import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = ({ children, onClick, className, ...rest }) => (
    <nav className={styles.root}>
        <Link className={styles.link} to="/despre-noi">
            Despre noi
        </Link>
        <Link className={styles.link} to="/intrebari-frecvente">
            Intrebari frecvente
        </Link>
        <Link className={styles.link} to="/contact">
            Contact 
        </Link>
    </nav>
);

export default Navigation;
