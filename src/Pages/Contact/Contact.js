import React, { useState } from "react";
import classnames from "classnames";
import { useFormik } from "formik";
import Button from "../../Components/Button/Button";
import styles from "./Contact.module.scss";
import contactUsImage from "../../assets/contact_us.svg";

const Contact = () => {
    const [isSubmittedOnce, setIsSubmittedOnce] = useState(false);
    const { values, handleChange, validateForm, errors } = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            subject: "",
            message: ""
        },
        validate: ({ name, surname, email, subject, message }) => {
            const errors = {};

            if (!name) errors.name = "Camp necesar";
            if (!surname) errors.surname = "Camp necesar";
            if (!email) errors.email = "Camp necesar";
            if (!subject) errors.subject = "Camp necesar";
            if (!message) errors.message = "Camp necesar";

            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    // require params
    const sendEmail = () => {
        console.log(values);
        console.log("POST message to emailing function");
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (isSubmittedOnce && !Object.keys(errors).length) {
            sendEmail();
        }

        setIsSubmittedOnce(true);
        validateForm();
    };

    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.col}>
                <img className={styles.image} src={contactUsImage} alt="logo" />
            </div>
            <div className={styles.col}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className="inputFieldRoot">
                        <input
                            className={classnames("inputField", { formError: isSubmittedOnce && !!errors.name })}
                            type="text"
                            name="name"
                            placeholder="Nume"
                            onChange={handleChange}
                            value={values.name}
                        />
                        {isSubmittedOnce && <p className="formErrorMessage">{errors.surname}</p>}
                    </div>
                    <div className="inputFieldRoot">
                        <input
                            className={classnames("inputField", { formError: isSubmittedOnce && !!errors.surname })}
                            type="text"
                            name="surname"
                            placeholder="Nume"
                            onChange={handleChange}
                            value={values.surname}
                        />
                        {isSubmittedOnce && <p className="formErrorMessage">{errors.surname}</p>}
                    </div>
                    <div className="inputFieldRoot">
                        <input
                            className={classnames("inputField", { formError: isSubmittedOnce && !!errors.email })}
                            type="text"
                            name="email"
                            placeholder="Adresa de email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        {isSubmittedOnce && <p className="formErrorMessage">{errors.email}</p>}
                    </div>
                    <div className="inputFieldRoot">
                        <input
                            className={classnames("inputField", { formError: isSubmittedOnce && !!errors.subject })}
                            type="text"
                            name="subject"
                            placeholder="subiect"
                            onChange={handleChange}
                            value={values.subject}
                        />
                        {isSubmittedOnce && <p className="formErrorMessage">{errors.subject}</p>}
                    </div>

                    <div className="inputFieldRoot">
                        <textarea
                            className={classnames("textareaField", { formError: isSubmittedOnce && !!errors.subject })}
                            type="text"
                            name="message"
                            placeholder="Mesajul tau pentru noi..."
                            onChange={handleChange}
                            value={values.message}
                        />
                        {isSubmittedOnce && <p className="formErrorMessage">{errors.message}</p>}
                    </div>

                    <div className={styles.submit}>
                        <Button type="submit" onClick={handleSubmit}>
                            Trimite mesajul!
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
