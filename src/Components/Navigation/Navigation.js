import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = ({ children, onClick, className, ...rest }) => (
    <nav className={styles.root}>
        <Link className={styles.link} to="/blog">
            Blog
        </Link>
        <Link className={styles.link} to="/intrebari-frecvente">
            Intrebari frecvente
        </Link>
        <Link className={styles.link} to="/despre-noi">
            Despre noi
        </Link>
        <Link className={styles.link} to="/contact">
            Contact
        </Link>
    </nav>
);

export default Navigation;

// <nav className={classnames(styles.root, { [styles.open]: drawer })}>
// <ul className={styles.list} onClick={e => e.stopPropagation()}>
//     <li className={styles.item}>
//         <a className={styles.link} href="#a">
//             Blog
//         </a>
//     </li>
//     <li className={styles.item}>
//         <a className={styles.link} href="#a">
//             Faq
//         </a>
//     </li>
//     <li className={styles.item}>
//         <a className={styles.link} href="#a">
//             Despre noi
//         </a>
//     </li>
//     <li className={styles.item}>
//         <a className={styles.link} href="#a">
//             Termeni si conditii
//         </a>
//     </li>
// </ul>
// </nav>
