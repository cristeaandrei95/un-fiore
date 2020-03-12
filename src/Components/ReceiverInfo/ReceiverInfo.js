import React from "react";
import styles from "./ReceiverInfo.module.scss";

const ReceiverInfo = ({ form }) => (
    <div className={styles.root}>
        <h2 className={styles.title}>Cui trimiti cadoul?</h2>
        <input
            className="inputField"
            type="text"
            name="name"
            placeholder="Nume"
            onChange={form.handleChange}
            value={form.values.name}
        />
        <input
            className="inputField"
            type="text"
            name="surname"
            placeholder="Prenume"
            onChange={form.handleChange}
            value={form.values.surname}
        />
        <input
            className="inputField"
            type="text"
            name="phone"
            placeholder="Telefon"
            onChange={form.handleChange}
            value={form.values.phone}
        />
        <textarea
            className="textareaField"
            type="text"
            name="message"
            placeholder="Mesajul tau ..."
            onChange={form.handleChange}
            value={form.values.message}
        />
    </div>
);

export default ReceiverInfo;
