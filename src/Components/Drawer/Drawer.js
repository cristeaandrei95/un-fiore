import React from "react";
import classnames from "classnames";
import styles from "./Drawer.module.scss";

const Drawer = ({ drawer, closeDrawer }) => (
    <nav className={classnames(styles.root, { [styles.open]: drawer, [styles.closed]: !drawer })} onClick={closeDrawer}>
        <ul className={styles.list} onClick={e => e.stopPropagation()}>
            <li className={styles.item}>
                <a className={styles.link} href="#a">
                    Blog
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#a">
                    Faq
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#a">
                    Despre noi
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#a">
                    Termeni si conditii
                </a>
            </li>
        </ul>
    </nav>
);

export default Drawer;
