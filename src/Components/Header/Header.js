import React from "react";
import { connect } from "react-redux";
import Minicart from "../Minicart/Minicart";
import Hamburger from "../Hamburger/Hamburger";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { setDrawer } from "../../store/actions/ui";

import styles from "./Header.module.scss";

const Header = ({ cart, isDrawerOpen, setIsDrawerOpen }) => (
    <header className={styles.root}>
        <div className={styles.inner}>
            <Hamburger isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            <Logo />
            <div className="separator"></div>
            <Navigation />
            <Minicart cart={cart} />
        </div>
    </header>
);

const mapStateToProps = ({ cart, ui: { drawer } }) => ({
    cart,
    drawer
});

const mapDispatchToProps = dispatch => ({
    setDrawer: value => dispatch(setDrawer(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
