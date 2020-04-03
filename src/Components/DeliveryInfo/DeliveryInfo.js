import React, { useState } from "react";
import classnames from "classnames";
import DatePicker from "react-datepicker";
import styles from "./DeliveryInfo.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const SelectDeliveryHours = ({ errors, values, handleChange }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const options = [
        "",
        "08:00 - 10:00",
        "10:00 - 12:00",
        "12:00 - 14:00",
        "14:00 - 16:00",
        "16:00 - 18:00",
        "18:00 - 20:00",
        "20:00 - 22:00"
    ];

    const handleSelectChange = e => {
        setSelectedOption(e.target.value);
        handleChange(e);
    };

    return (
        <select
            className={classnames("selectField", {
                formError: !!errors.time,
                [styles.selectDeliveryHours]: Boolean(selectedOption)
            })}
            name="time"
            value={values.time}
            onChange={handleSelectChange}
        >
            {options.map(option => (
                <option key={option} value={option} disabled={Boolean(!option)}>
                    {option || "Intervalul orar de livrare"}
                </option>
            ))}
        </select>
    );
};

const DeliveryInfo = ({ form: { errors, handleChange, values, setFieldValue }, isSubmittedOnce }) => (
    <div className={styles.root}>
        <h2 className={styles.title}>Informatii despre livrare</h2>
        <div className="inputFieldRoot">
            <DatePicker
                className={classnames(styles.datePicker, { formError: !!errors.date })}
                minDate={new Date()}
                placeholderText="Data de livrare"
                maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
                selected={(values.date && new Date(values.date)) || null}
                onChange={val => setFieldValue("date", val)}
            />
            {<p className="formErrorMessage">{errors.date}</p>}
        </div>
        <div className="inputFieldRoot">
            <SelectDeliveryHours
                isSubmittedOnce={isSubmittedOnce}
                errors={errors}
                values={values}
                handleChange={handleChange}
            />
            {<p className="formErrorMessage">{errors.time}</p>}
        </div>
        <div className="inputFieldRoot">
            <textarea
                className={classnames("textareaField", { formError: !!errors.address })}
                type="text"
                name="address"
                placeholder="Strada, numar, bloc, et, ap..."
                onChange={handleChange}
                value={values.address}
            />
            {<p className="formErrorMessage">{errors.address}</p>}
        </div>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: !!errors.county })}
                type="text"
                name="county"
                placeholder="Judet"
                onChange={handleChange}
                value={values.county}
            />
            {<p className="formErrorMessage">{errors.county}</p>}
        </div>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: !!errors.city })}
                type="text"
                name="city"
                placeholder="oras"
                onChange={handleChange}
                value={values.city}
            />
            {<p className="formErrorMessage">{errors.city}</p>}
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
