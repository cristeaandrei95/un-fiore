import React, { useState } from "react";
import styles from "./Footer.module.scss";

const ObfuscatedNumber = () => {
    const [numberVisibility, setNumberVisibility] = useState(false);
    return (
        <div onClick={() => setNumberVisibility(true)}>
            {numberVisibility && <span>0720 000 000</span>}
            <span>phone</span>
        </div>
    );
};

const Footer = () => (
    <footer>
        <section className={styles.linksSection}>
            <div className={styles.innerLinksSection}>
                <div className={styles.cols}>
                    <h4>Link-uri utile</h4>
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
                    <h4>Informatii generale</h4>
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
                <div className={styles.cols}>
                    <h4>Contact</h4>
                    <span>Mon - Fri: 8AM - midnight</span>
                    <br />
                    <span>Sat: 8AM - 8PM</span>
                    <br />
                    <span>Sun: 9AM - 6PM</span>
                    <br />
                    <ObfuscatedNumber />
                </div>
            </div>
        </section>
        <section className={styles.copywrite}>
            <p>&copy; {new Date().getFullYear()} - floraria vesela</p>
        </section>
    </footer>
);

export default Footer;
