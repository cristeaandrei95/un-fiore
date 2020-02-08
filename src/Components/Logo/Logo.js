import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Logo.module.scss";

const Logo = () => (
    <Link className={styles.root} to='/'>
        <img className={styles.logo} src={logo} alt='logo' />
    </Link>
);

export default Logo;
