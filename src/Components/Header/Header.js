import React from "react";
import Minicart from "../Minicart/Minicart";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = ({ cart, updateCart, setDrawer }) => (
    <header className={styles.root}>
        <Hamburger setDrawer={setDrawer}/>
        <Logo />
        <div className='separator'></div>
        <Minicart cart={cart} updateCart={updateCart} />
    </header>
);

export default Header;
