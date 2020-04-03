import React from "react";
import classnames from "classnames";
import { useFormik } from "formik";
import Button from "../../Components/Button/Button";
import styles from "./Contact.module.scss";
import contactUsImage from "../../assets/contact_us.svg";

const Contact = () => {
    // require params
    const sendEmail = () => {
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
            if (!subject) errors.subject = "Camp necesar";
            if (!message) errors.message = "Camp necesar";

            return errors;
        },
        onSubmit: values => {
            console.log(values);
            sendEmail(values);
        }
    });

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
    );
};

export default Contact;
