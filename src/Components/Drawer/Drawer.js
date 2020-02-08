import React from "react";
import classnames from "classnames";
import styles from "./Drawer.module.scss";

const Drawer = ({ drawer, setDrawer }) => (
    <nav
        className={classnames(styles.root, { [styles.open]: drawer })}
        onClick={() => setDrawer(false)}>
        <ul className={styles.content} onClick={e => e.stopPropagation()}>
            <li className={styles.item}>Blog</li>
            <li className={styles.item}>Faq</li>
            <li className={styles.item}>Despre</li>
            <li className={styles.item}>Contact</li>
        </ul>
    </nav>
);

export default Drawer;
