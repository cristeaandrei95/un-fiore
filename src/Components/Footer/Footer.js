import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => (
    <footer>
        <section className={styles.linksSection}>
            <div className={styles.innerLinksSection}>
                <div className={styles.cols}>
                    <h4 className={styles.title}>Link-uri utile</h4>
                    <Link className={styles.footerLink} to="/despre-noi">
                        Despre noi
                    </Link>
                    <Link className={styles.footerLink} to="/intrebari-frecvente">
                        Intrebari frecvente 
                    </Link>
                    <Link className={styles.footerLink} to="/termeni-si-conditii">
                        Termeni si conditii 
                    </Link>
                    <Link className={styles.footerLink} to="/contact">
                        Contact 
                    </Link>
                    <a className={styles.footerLink} href="http://www.anpc.ro">
                        ANPC 
                    </a>
                </div>
                <div className={styles.cols}>
                    <h4 className={styles.title}>Informatii utile</h4>
                    <Link className={styles.footerLink} to="/intrebari-frecvente#cum-comand">
                        Cum comand?
                    </Link>
                    <Link className={styles.footerLink} to="/intrebari-frecvente#informatii-comanda">
                        Care este status-ul comenzii mele? 
                    </Link>
                    <Link className={styles.footerLink} to="/intrebari-frecvente#cum-platesc">
                        Cum plătesc?
                    </Link>
                    <Link className={styles.footerLink} to="/intrebari-frecvente#politica-confidentialitate">
                        Politica de confidențialitate
                    </Link>
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
