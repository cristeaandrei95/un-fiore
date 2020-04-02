import React from "react";
import classnames from "classnames";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ isDrawerOpen, setIsDrawerOpen }) => (
    <div
        className={styles.root}
        onClick={() => {
            setIsDrawerOpen(!isDrawerOpen);
        }}
    >
        <button className={classnames(styles.hamburger, { [styles.isActive]: isDrawerOpen })} type="button">
            <span className={styles.hamburgerBox}>
                <span className={styles.hamburgerInner}></span>
            </span>
        </button>
        <div className={classnames(styles.closeStrip, { [styles.open]: isDrawerOpen })}></div>
    </div>
);

export default Hamburger;
