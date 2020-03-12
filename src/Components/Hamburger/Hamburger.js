import React from "react";
import hamburger from "../../assets/hamburger.svg";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ setDrawer }) => (
    <div className={styles.root} onClick={setDrawer}>
        <img className={styles.image} src={hamburger} alt="Hamburger icon" />
    </div>
);

export default Hamburger;
