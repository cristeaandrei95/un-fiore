import React from "react";
import styles from "./SenderInfo.module.scss";
import classnames from "classnames";

const SenderInfo = ({ form: { setFieldValue, handleChange, values, errors }, isSubmittedOnce }) => (
    <div className={styles.root}>
        <h2 className={styles.title}>Datele tale</h2>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: isSubmittedOnce && !!errors.senderName })}
                type="text"
                name="senderName"
                placeholder="Nume"
                onChange={handleChange}
                value={values.senderName}
            />
            {isSubmittedOnce && <p className="formErrorMessage">{errors.senderName}</p>}
        </div>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: isSubmittedOnce && !!errors.senderSurname })}
                type="text"
                name="senderSurname"
                placeholder="Prenume"
                onChange={handleChange}
                value={values.senderSurname}
            />
            {isSubmittedOnce && <p className="formErrorMessage">{errors.senderSurname}</p>}
        </div>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: isSubmittedOnce && !!errors.senderPhone })}
                type="text"
                name="senderPhone"
                placeholder="telefon"
                onChange={handleChange}
                value={values.senderPhone}
            />
            {isSubmittedOnce && <p className="formErrorMessage">{errors.senderPhone}</p>}
        </div>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: isSubmittedOnce && !!errors.senderEmail })}
                type="text"
                name="senderEmail"
                placeholder="Email"
                onChange={handleChange}
                value={values.senderEmail}
            />
            {isSubmittedOnce && <p className="formErrorMessage">{errors.senderEmail}</p>}
        </div>
        <div className="checkboxField">
            <input
                type="checkbox"
                id="sms-notification-confirmation"
                name="SMSNotificationConfirmation"
                onChange={handleChange}
                value={values.SMSNotificationConfirmation}
            />
            <label htmlFor="newsletter-confirmation">Doresc sa fiu notificat prin SMS privind evolutia comenzii</label>
        </div>
        <div className="checkboxField">
            <input
                type="checkbox"
                id="newsletter-confirmation"
                name="NewsletterConfirmation"
                onChange={handleChange}
                value={values.NewsletterConfirmation}
            />
            <label htmlFor="newsletter-confirmation">
                Vreau sa primesc cele mai bune oferte. Confirm ca am peste 18 ani.
            </label>
        </div>
        <div className={styles.invoicing}>
            <p>Doresc facturarea comenzii pe:</p>
            <input
                type="radio"
                id="persoana-fizica"
                checked={values.isCompany === false}
                name="isCompany"
                value={true}
                onChange={() => setFieldValue("isCompany", false)}
            />
            <label htmlFor="persoana-fizica">Persoana fizica</label>
            <input
                type="radio"
                id="persoana-juridica"
                checked={values.isCompany === true}
                name="isCompany"
                value={false}
                onChange={() => setFieldValue("isCompany", true)}
            />
            <label htmlFor="persoana-juridica">Persoana juridica</label>
        </div>
        <p className={styles.electornicInvoice}>
            Factura se emite EXCLUSIV online si pe email. Nicio factura nu ajunge la beneficiarul cadoului.
        </p>
    </div>
);

export default SenderInfo;
