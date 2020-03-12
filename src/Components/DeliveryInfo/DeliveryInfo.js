import React from "react";
import DatePicker from "react-datepicker";
import styles from "./DeliveryInfo.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const DeliveryInfo = ({ form }) => (
    <div className={styles.root}>
        <h2 className={styles.title}>Informatii despre livrare</h2>
        <DatePicker
            className={styles.datePicker}
            minDate={new Date()}
            placeholderText="Data de livrare"
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
            selected={(form.values.date && new Date(form.values.date)) || null}
            onChange={val => form.setFieldValue("date", val)}
        />
        <select name="time" value={form.values.time} onChange={form.handleChange} onBlur={form.handleBlur}>
            <option value="" label="Intervalul orar de livrare" />
            <option value="08:00 - 10:00" label="08:00 - 10:00" />
            <option value="10:00 - 12:00" label="10:00 - 12:00" />
            <option value="12:00 - 14:00" label="12:00 - 14:00" />
            <option value="14:00 - 16:00" label="14:00 - 16:00" />
            <option value="16:00 - 18:00" label="16:00 - 18:00" />
            <option value="18:00 - 20:00" label="18:00 - 20:00" />
            <option value="20:00 - 22:00" label="20:00 - 22:00" />
        </select>
        <textarea
            className="textareaField"
            type="text"
            name="address"
            placeholder="Strada, numar, bloc, et, ap..."
            onChange={form.handleChange}
            value={form.values.address}
        />
        <input
            className="inputField"
            type="text"
            name="county"
            placeholder="Judet"
            onChange={form.handleChange}
            value={form.values.county}
        />
        <input
            className="inputField"
            type="text"
            name="city"
            placeholder="oras"
            onChange={form.handleChange}
            value={form.values.city}
        />
        <textarea
            className="textareaField"
            type="text"
            name="optionalInfo"
            placeholder="Alte detalii... (optional)"
            onChange={form.handleChange}
            value={form.values.optionalInfo}
        />
    </div>
);

export default DeliveryInfo;
