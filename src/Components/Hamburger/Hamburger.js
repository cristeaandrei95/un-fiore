import React from "react";
import classnames from "classnames";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ isDrawerOpen, setIsDrawerOpen }) => (
    <div
        className={classnames(styles.root, { [styles.open]: isDrawerOpen })}
        onClick={() => {
            console.log("here");
            setIsDrawerOpen(!isDrawerOpen);
        }}
    >
        <div className={classnames(styles.hamburger, { [styles.open]: isDrawerOpen })}>
            <div className={classnames(styles.line, styles.top)}></div>
            <div className={classnames(styles.line, styles.middle)}></div>
            <div className={classnames(styles.line, styles.bottom)}></div>
        </div>
        <div className={classnames(styles.closeStrip, { [styles.open]: isDrawerOpen })}></div>
    </div>
);

export default Hamburger;
