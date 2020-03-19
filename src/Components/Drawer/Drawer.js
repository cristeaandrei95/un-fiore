import React from "react";
import classnames from "classnames";
import styles from "./Drawer.module.scss";

const Drawer = ({ drawer, closeDrawer }) => (
    <nav className={classnames(styles.root, { [styles.open]: drawer, [styles.closed]: !drawer })} onClick={closeDrawer}>
        <ul className={styles.list} onClick={e => e.stopPropagation()}>
            <li className={styles.item}>
                <a className={styles.link} href="#">
                    Blog
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#">
                    Faq
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#">
                    Despre noi
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#">
                    Termeni si conditii
                </a>
            </li>
        </ul>
    </nav>
);

export default Drawer;
