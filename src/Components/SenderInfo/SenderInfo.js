import React from "react";
import styles from "./SenderInfo.module.scss";

const SenderInfo = ({ form }) => (
  <div className={styles.root}>
    <h2 className={styles.title}>Datele tale</h2>
    <input
      className={styles.inputField}
      type="text"
      name="senderName"
      placeholder="Nume"
      onChange={form.handleChange}
      value={form.values.senderName}
    />
    <input
      className={styles.inputField}
      type="text"
      name="senderSurname"
      placeholder="Prenume"
      onChange={form.handleChange}
      value={form.values.senderSurname}
    />
    <input
      className={styles.inputField}
      type="text"
      name="senderPhone"
      placeholder="telefon"
      onChange={form.handleChange}
      value={form.values.senderPhone}
    />
    <input
      className={styles.inputField}
      type="text"
      name="senderEmail"
      placeholder="email"
      onChange={form.handleChange}
      value={form.values.senderEmail}
    />
    <div className={styles.checkboxField}>
      <input
        type="checkbox"
        id="sms-notification-confirmation"
        name="SMSNotificationConfirmation"
        onChange={form.handleChange}
        value={form.values.SMSNotificationConfirmation}
      />
      <label htmlFor="newsletter-confirmation">Doresc sa fiu notificat prin SMS privind evolutia comenzii</label>
    </div>
    <div className={styles.checkboxField}>
      <input
        type="checkbox"
        id="newsletter-confirmation"
        name="NewsletterConfirmation"
        onChange={form.handleChange}
        value={form.values.NewsletterConfirmation}
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
        checked={form.values.isCompany === false}
        name="isCompany"
        value={true}
        onChange={() => form.setFieldValue("isCompany", false)}
      />
      <label htmlFor="persoana-fizica">Persoana fizica</label>
      <input
        type="radio"
        id="persoana-juridica"
        checked={form.values.isCompany === true}
        name="isCompany"
        value={false}
        onChange={() => form.setFieldValue("isCompany", true)}
      />
      <label htmlFor="persoana-juridica">Persoana juridica</label>
    </div>
    <p className={styles.electornicInvoice}>
      Factura se emite EXCLUSIV online si pe email. Nicio factura nu ajunge la beneficiarul cadoului.
    </p>
  </div>
);

export default SenderInfo;