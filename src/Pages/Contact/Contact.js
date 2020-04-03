import React, { useState } from "react";
import classnames from "classnames";
import { useFormik } from "formik";
import Button from "../../Components/Button/Button";
import styles from "./Contact.module.scss";
import contactUsImage from "../../assets/contact_us.svg";

const Contact = () => {
    const [isFormSubmitted, setIsFormSubmited] = useState(false);
    // require params
    const handleFormSubmission = () => {
        setIsFormSubmited(true);
        console.log(values);
        console.log("POST message to emailing function");
    };

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            subject: "",
            message: ""
        },
        validateOnChange: false,
        validateOnBlur: false,
        validate: ({ name, surname, email, subject, message }) => {
            const errors = {};

            if (!name) errors.name = "Camp necesar";
            if (!surname) errors.surname = "Camp necesar";
            if (!email) errors.email = "Camp necesar";
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
                errors.email = "Email-ul introdus nu este valid";
            if (!subject) errors.subject = "Camp necesar";
            if (!message) errors.message = "Camp necesar";

            return errors;
        },
        onSubmit: values => {
            handleFormSubmission(values);
        }
    });

    return !isFormSubmitted ? (
        <div className={styles.root}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.col}>
                <img className={styles.image} src={contactUsImage} alt="logo" />
            </div>
            <div className={styles.col}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className="inputFieldRoot">
                        <input
                            className={classnames("inputField", { formError: !!errors.name })}
                            type="text"
                            name="name"
                            placeholder="Nume"
                            onChange={handleChange}
                            value={values.name}
                        />
                        {<p className="formErrorMessage">{errors.name}</p>}
                    </div>
                    <div className="inputFieldRoot">
                        <input
                            className={classnames("inputField", { formError: !!errors.surname })}
                            type="text"
                            name="surname"
                            placeholder="Prenume"
                            onChange={handleChange}
                            value={values.surname}
                        />
                        {<p className="formErrorMessage">{errors.surname}</p>}
                    </div>
                    <div className="inputFieldRoot">
                        <input
                            className={classnames("inputField", { formError: !!errors.email })}
                            type="text"
                            name="email"
                            placeholder="Adresa de email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        {<p className="formErrorMessage">{errors.email}</p>}
                    </div>
                    <div className="inputFieldRoot">
                        <input
                            className={classnames("inputField", { formError: !!errors.subject })}
                            type="text"
                            name="subject"
                            placeholder="subiect"
                            onChange={handleChange}
                            value={values.subject}
                        />
                        {<p className="formErrorMessage">{errors.subject}</p>}
                    </div>

                    <div className="inputFieldRoot">
                        <textarea
                            className={classnames("textareaField", { formError: !!errors.subject })}
                            type="text"
                            name="message"
                            placeholder="Mesajul tau pentru noi..."
                            onChange={handleChange}
                            value={values.message}
                        />
                        {<p className="formErrorMessage">{errors.message}</p>}
                    </div>

                    <div className={styles.submit}>
                        <Button type="submit" onClick={handleSubmit}>
                            Trimite mesajul!
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    ) : (
        <div className="full-height-page">
            <h2>Mesajul tau a fost trimis!</h2>
        </div>
    );
};

export default Contact;
