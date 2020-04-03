import React from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CartProductList from "../../Components/CartProductList/CartProductList";
import SenderInfo from "../../Components/SenderInfo/SenderInfo";
import ReceiverInfo from "../../Components/ReceiverInfo/ReceiverInfo";
import Deliveryinfo from "../../Components/DeliveryInfo/DeliveryInfo";
import PaymentInfo from "../../Components/PaymentInfo/PaymentInfo";
import Button from "../../Components/Button/Button";
import styles from "./Checkout.module.scss";
import { incrementProductQuantity, decrementProductQuantity, removeFromCart } from "../../store/actions/cart";

const Checkout = ({ history, cart, incrementProductQuantity, decrementProductQuantity, removeFromCart }) => {
    const submitNewOrder = values => {
        console.log("submit new order with values:", values);
        history.push("/multumim");
    };

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
        onSubmit: values => {
            submitNewOrder(values);
        }
    });

    const cartTotal = Object.entries(cart.products).reduce(
        (sum, [key, product]) => sum + product.price * product.quantity,
        0
    );

    return (
        <div>
            {Object.entries(cart.products).length ? (
                <form className={styles.form} onSubmit={form.handleSubmit}>
                    <CartProductList
                        cartTotal={cartTotal}
                        cart={cart}
                        incrementProductQuantity={incrementProductQuantity}
                        decrementProductQuantity={decrementProductQuantity}
                        removeFromCart={removeFromCart}
                    />

                    <SenderInfo form={form} />
                    <ReceiverInfo form={form} />
                    <Deliveryinfo form={form} />
                    <PaymentInfo form={form} />

                    <div className={styles.submit}>
                        <Button type="submit">Finalizeaza comanda!</Button>
                    </div>
                </form>
            ) : (
                <div className="full-height-page">
                    <h2>Nu aveti produse in cos.</h2>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));
