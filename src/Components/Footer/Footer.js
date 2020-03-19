import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => (
    <footer>
        <section className={styles.linksSection}>
            <div className={styles.innerLinksSection}>
                <div className={styles.cols}>
                    <h4 className={styles.title}>Link-uri utile</h4>
                    <a className={styles.footerLink} href="#a">
                        Despre noi
                    </a>
                    <a className={styles.footerLink} href="#a">
                        Despre livrare
                    </a>
                    <a className={styles.footerLink} href="#a">
                        Despre securitate
                    </a>
                    <a className={styles.footerLink} href="#a">
                        Satisfacție 100%
                    </a>
                    <a className={styles.footerLink} href="#a">
                        Contact
                    </a>
                </div>
                <div className={styles.cols}>
                    <h4 className={styles.title}>Informatii generale</h4>
                    <a className={styles.footerLink} href="#a">
                        Cum comand?
                    </a>
                    <a className={styles.footerLink} href="#a">
                        Cum plătesc?
                    </a>
                    <a className={styles.footerLink} href="#a">
                        Politica cookies
                    </a>
                    <a className={styles.footerLink} href="#a">
                        Politica de confidențialitate
                    </a>
                    <a className={styles.footerLink} href="#a">
                        Politica de returnare
                    </a>
                    <a className={styles.footerLink} href="#a">
                        Termeni si Condiții
                    </a>
                    <a className={styles.footerLink} href="#a">
                        comanda mea
                    </a>
                    <a className={styles.footerLink} href="#a">
                        ANPC
                    </a>
                </div>
                <div className="separator"></div>
                <div className={styles.cols}>
                    <h4 className={styles.title}>Contact</h4>
                    <span className={styles.footerLink}>
                        Telefon: <strong>0775 500 533</strong>
                    </span>
                    <span className={styles.footerLink}>
                        Email: <strong>office@unfiore.ro</strong>
                    </span>
                    <h4 className={styles.title}>Program</h4>
                    <span className={styles.footerLink}>Luni - Vineri: 08:00 - 20:00</span>
                    <span className={styles.footerLink}>Sambata: 08:00 - 14:00</span>
                    <span className={styles.footerLink}>Duminica: Inchis</span>
                </div>
            </div>
        </section>
        <section className={styles.copywrite}>
            <p className={styles.copywriteMessage}>&copy; {new Date().getFullYear()} - Un Fiore</p>
        </section>
    </footer>
);

export default Footer;
