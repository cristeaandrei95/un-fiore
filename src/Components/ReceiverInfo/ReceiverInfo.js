import React from "react";
import styles from "./ReceiverInfo.module.scss";
import classnames from "classnames";

const ReceiverInfo = ({ form: { errors, handleChange, values } }) => (
    <div className={styles.root}>
        <h2 className={styles.title}>Cui trimiti cadoul?</h2>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: !!errors.receiverName })}
                type="text"
                name="receiverName"
                placeholder="Nume"
                onChange={handleChange}
                value={values.receiverName}
            />
            <p className="formErrorMessage">{errors.receiverName}</p>
        </div>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: !!errors.receiverSurname })}
                type="text"
                name="receiverSurname"
                placeholder="Prenume"
                onChange={handleChange}
                value={values.receiverSurname}
            />
            <p className="formErrorMessage">{errors.receiverSurname}</p>
        </div>
        <div className="inputFieldRoot">
            <input
                className={classnames("inputField", { formError: !!errors.receiverPhone })}
                type="text"
                name="receiverPhone"
                placeholder="Telefon"
                onChange={handleChange}
                value={values.receiverPhone}
            />
            <p className="formErrorMessage">{errors.receiverPhone}</p>
        </div>
        <textarea
            className="textareaField"
            type="text"
            name="message"
            placeholder="Mesajul tau pe scrisoare... (optional)"
            onChange={handleChange}
            value={values.message}
        />
    </div>
);

export default ReceiverInfo;
