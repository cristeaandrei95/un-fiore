import React from "react";
import classnames from "classnames";
import styles from "./PaymentInfo.module.scss";

const PaymentInfo = ({ form: { errors, handleChange, values, setFieldValue } }) => (
    <div className={styles.root}>
        <h2 className={styles.title}>Metoda de plata</h2>
        <div className={styles.invoicing}>
            <div className="radioField">
                <input
                    type="radio"
                    id="paymentType"
                    checked={values.paymentType === "card"}
                    name="paymentType"
                    value="card"
                    onChange={() => setFieldValue("paymentType", "card")}
                />
                <label htmlFor="paymentType">Plata online prin card</label>
            </div>
            <div className="radioField">
                <input
                    type="radio"
                    id="persoana-juridica"
                    checked={values.paymentType === "BT"}
                    name="paymentType"
                    value="BT"
                    onChange={() => setFieldValue("paymentType", "BT")}
                />
                <label htmlFor="persoana-juridica">Transfer bancar</label>
            </div>
            {<p className="formErrorMessage">{errors.paymentType}</p>}
        </div>
        <div className={classnames("checkboxField", styles.termsAndConditionsAgreement)}>
            <input
                type="checkbox"
                id="termsAndConditionsAgreement"
                name="termsAndConditionsAgreement"
                onChange={handleChange}
                value={values.termsAndConditionsAgreement}
            />
            <label htmlFor="termsAndConditionsAgreement">
                Confirm ca am citit si sunt de acord cu termenii si conditiile de utilizare.
            </label>

            {<p className="formErrorMessage">{errors.termsAndConditionsAgreement}</p>}
        </div>
    </div>
);

export default PaymentInfo;
