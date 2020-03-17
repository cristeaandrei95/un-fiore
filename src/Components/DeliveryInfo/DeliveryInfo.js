import React from "react";
import classnames from "classnames";
import DatePicker from "react-datepicker";
import styles from "./DeliveryInfo.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const DeliveryInfo = ({ form: { errors, handleChange, values, setFieldValue }, isSubmittedOnce }) => (
    <div className={styles.root}>
        <h2 className={styles.title}>Informatii despre livrare</h2>
        <div className="inputFieldRoot">
            <DatePicker
                className={classnames(styles.datePicker, { formError: isSubmittedOnce && !!errors.date })}
                minDate={new Date()}
                placeholderText="Data de livrare"
                maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
                selected={(values.date && new Date(values.date)) || null}
                onChange={val => setFieldValue("date", val)}
            />
            {isSubmittedOnce && <p className="formErrorMessage">{errors.date}</p>}
        </div>
        <div className="inputFieldRoot">
            <select
                className={classnames("selectField", { formError: isSubmittedOnce && !!errors.time })}
                name="time"
                value={values.time}
                onChange={handleChange}
            >
                <option value="" label="Intervalul orar de livrare" />
                <option value="08:00 - 10:00" label="08:00 - 10:00" />
                <option value="10:00 - 12:00" label="10:00 - 12:00" />
                <option value="12:00 - 14:00" label="12:00 - 14:00" />
                <option value="14:00 - 16:00" label="14:00 - 16:00" />
                <option value="16:00 - 18:00" label="16:00 - 18:00" />
                <option value="18:00 - 20:00" label="18:00 - 20:00" />
                <option value="20:00 - 22:00" label="20:00 - 22:00" />
            </select>
            {isSubmittedOnce && <p className="formErrorMessage">{errors.time}</p>}
        </div>
        <div className="inputFieldRoot">
            <textarea
                className={classnames("textareaField", { formError: isSubmittedOnce && !!errors.address })}
                type="text"
                name="address"
                placeholder="Strada, numar, bloc, et, ap..."
                onChange={handleChange}
                value={values.address}
            />
            {isSubmittedOnce && <p className="formErrorMessage">{errors.address}</p>}
        </div>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: isSubmittedOnce && !!errors.county })}
                type="text"
                name="county"
                placeholder="Judet"
                onChange={handleChange}
                value={values.county}
            />
            {isSubmittedOnce && <p className="formErrorMessage">{errors.county}</p>}
        </div>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: isSubmittedOnce && !!errors.city })}
                type="text"
                name="city"
                placeholder="oras"
                onChange={handleChange}
                value={values.city}
            />
            {isSubmittedOnce && <p className="formErrorMessage">{errors.city}</p>}
        </div>
        <textarea
            className="textareaField"
            type="text"
            name="optionalInfo"
            placeholder="Alte detalii... (optional)"
            onChange={handleChange}
            value={values.optionalInfo}
        />
    </div>
);

export default DeliveryInfo;
