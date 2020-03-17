import React, { useState } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import CartProductList from "../Components/CartProductList/CartProductList";
import SenderInfo from "../Components/SenderInfo/SenderInfo";
import ReceiverInfo from "../Components/ReceiverInfo/ReceiverInfo";
import Deliveryinfo from "../Components/DeliveryInfo/DeliveryInfo";
import PaymentInfo from "../Components/PaymentInfo/PaymentInfo";
import Button from "../Components/Button/Button";
import styles from "./Checkout.module.scss";
import { incrementProductQuantity, decrementProductQuantity, removeFromCart } from "../store/actions/cart";

const Checkout = ({ cart, incrementProductQuantity, decrementProductQuantity, removeFromCart }) => {
    const [isSubmittedOnce, setIsSubmittedOnce] = useState(false);
    const form = useFormik({
        initialValues: {
            senderName: "",
            senderSurname: "",
            senderPhone: "",
            senderEmail: "",
            SMSNotificationConfirmation: "",
            NewsletterConfirmation: "",
            isCompany: false,
            receiverName: "",
            receiverSurname: "",
            receiverPhone: "",
            message: "",
            date: "",
            time: "",
            address: "",
            city: "",
            county: "",
            optionalInfo: "",
            paymentType: false,
            termsAndConditionsAgreement: false
        },
        validate: ({
            senderName,
            senderSurname,
            senderPhone,
            senderEmail,
            receiverName,
            receiverSurname,
            receiverPhone,
            date,
            time,
            address,
            city,
            county,
            paymentType,
            termsAndConditionsAgreement
        }) => {
            const errors = {};

            if (!senderName) errors.senderName = "Camp necesar";
            if (!senderSurname) errors.senderSurname = "Camp necesar";
            if (!senderPhone) errors.senderPhone = "Camp necesar";
            if (!senderPhone.length === 10) errors.senderPhone = "Numarul introdus nu are 10 cifre";
            if (!senderEmail) errors.senderEmail = "Camp necesar";
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(senderEmail))
                errors.senderEmail = "Email-ul introdus nu este valid";
            if (!receiverName) errors.receiverName = "Camp necesar";
            if (!receiverSurname) errors.receiverSurname = "Camp necesar";
            if (!receiverPhone) errors.receiverPhone = "Camp necesar";
            if (!date) errors.date = "Camp necesar";
            if (!time) errors.time = "Camp necesar";
            if (!address) errors.address = "Camp necesar";
            if (!city) errors.city = "Camp necesar";
            if (!county) errors.county = "Camp necesar";
            if (!paymentType) errors.paymentType = "Camp necesar";
            if (!termsAndConditionsAgreement) errors.termsAndConditionsAgreement = "Camp necesar";

            return errors;
        },
        onSubmit: values => values
    });

    const cartTotal = Object.entries(cart.products).reduce(
        (sum, [key, product]) => sum + product.price * product.quantity,
        0
    );

    const handleSubmit = e => {
        setIsSubmittedOnce(true);
        // console.log(form);
        //console.log(form);
        form.validateForm();
        e.preventDefault();
    };

    return (
        <div>
            {Object.entries(cart.products).length ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <CartProductList
                        cartTotal={cartTotal}
                        cart={cart}
                        incrementProductQuantity={incrementProductQuantity}
                        decrementProductQuantity={decrementProductQuantity}
                        removeFromCart={removeFromCart}
                    />

                    <SenderInfo form={form} isSubmittedOnce={isSubmittedOnce} />
                    <ReceiverInfo form={form} isSubmittedOnce={isSubmittedOnce} />
                    <Deliveryinfo form={form} isSubmittedOnce={isSubmittedOnce} />
                    <PaymentInfo form={form} isSubmittedOnce={isSubmittedOnce} />

                    <div className={styles.submit}>
                        <Button type="submit">Finalizeaza comanda!</Button>
                    </div>
                </form>
            ) : (
                <p>Nu aveti produse in cos.</p>
            )}
        </div>
    );
};

const mapStateToProps = ({ cart }) => ({ cart });
const mapDispatchToProps = dispatch => ({
    incrementProductQuantity: id => dispatch(incrementProductQuantity(id)),
    decrementProductQuantity: id => dispatch(decrementProductQuantity(id)),
    removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
