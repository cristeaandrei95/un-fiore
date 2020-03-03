import React from "react";
import { connect } from "react-redux";
import Minicart from "../Minicart/Minicart";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = ({ cart, setDrawer }) => (
    <header className={styles.root}>
        <Hamburger setDrawer={setDrawer} />
        <Logo />
        <div className='separator'></div>
        <Minicart cart={cart} />
    </header>
);

const mapStateToProps = ({ cart }) => ({
    cart
});

export default connect(mapStateToProps)(Header);
