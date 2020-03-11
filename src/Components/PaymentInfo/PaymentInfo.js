import React from "react";
import styles from "./PaymentInfo.module.scss";

const PaymentInfo = ({ form }) => (
  <div className={styles.root}>
    <h2 className={styles.title}>Metoda de plata</h2>
    <div className={styles.invoicing}>
      <input
        type="radio"
        id="paymentType"
        checked={form.values.paymentType === "card"}
        name="paymentType"
        value="card"
        onChange={() => form.setFieldValue("paymentType", "card")}
      />
      <label htmlFor="paymentType">Plata online prin card</label>
      <input
        type="radio"
        id="persoana-juridica"
        checked={form.values.paymentType === "BT"}
        name="paymentType"
        value="BT"
        onChange={() => form.setFieldValue("paymentType", "BT")}
      />
      <label htmlFor="persoana-juridica">Transfer bancar</label>
    </div>
    <div className="checkboxField">
      <input
        type="checkbox"
        id="termsAndConditionsAgreement"
        name="termsAndConditionsAgreement"
        onChange={form.handleChange}
        value={form.values.termsAndConditionsAgreement}
      />
      <label htmlFor="termsAndConditionsAgreement">
        Confirm ca am citit si sunt de acord cu conditiile de utilizare.
      </label>
    </div>
  </div>
);

export default PaymentInfo;
