import React from "react";
import styles from "./ReceiverInfo.module.scss";

const ReceiverInfo = ({ form }) => (
  <div className={styles.root}>
    <h2 className={styles.title}>Cui trimiti cadoul?</h2>
    <input
      className="inputField"
      type="text"
      name="receiverName"
      placeholder="Nume"
      onChange={form.handleChange}
      value={form.values.receiverName}
    />
    <input
      className="inputField"
      type="text"
      name="receiverSurname"
      placeholder="Prenume"
      onChange={form.handleChange}
      value={form.values.receiverSurname}
    />
    <input
      className="inputField"
      type="text"
      name="receiverPhone"
      placeholder="Telefon"
      onChange={form.handleChange}
      value={form.values.receiverPhone}
    />
    <textarea
      className="textareaField"
      type="text"
      name="receiverAddress"
      placeholder="Strada, numar, bloc, ap..."
      onChange={form.handleChange}
      value={form.values.receiverAddress}
    />
    <input
      className="inputField"
      type="text"
      name="receiverCounty"
      placeholder="Judet"
      onChange={form.handleChange}
      value={form.values.receiverCounty}
    />
    <input
      className="inputField"
      type="text"
      name="receiverCity"
      placeholder="Oras"
      onChange={form.handleChange}
      value={form.values.receiverCity}
    />
  </div>
);

export default ReceiverInfo;
