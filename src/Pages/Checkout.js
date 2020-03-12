import React from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import CartProductList from "../Components/CartProductList/CartProductList";
import SenderInfo from "../Components/SenderInfo/SenderInfo";
import ReceiverInfo from "../Components/ReceiverInfo/ReceiverInfo";
import Deliveryinfo from "../Components/DeliveryInfo/DeliveryInfo";
import PaymentInfo from "../Components/PaymentInfo/PaymentInfo";
import Button from "../Components/Button/Button";
import { incrementProductQuantity, decrementProductQuantity, removeFromCart } from "../store/actions/cart";

const Checkout = ({ cart, incrementProductQuantity, decrementProductQuantity, removeFromCart }) => {
    const senderForm = useFormik({
        initialValues: {
            name: "",
            surname: "",
            phone: "",
            email: "",
            SMSNotificationConfirmation: "",
            NewsletterConfirmation: "",
            isCompany: false
        }
    });

    const receiverForm = useFormik({
        initialValues: {
            name: "",
            surname: "",
            phone: "",
            message: ""
        }
    });

    const deliveryForm = useFormik({
        initialValues: {
            date: "",
            time: "",
            address: "",
            city: "",
            county: "",
            optionalInfo: ""
        }
    });

    const paymentForm = useFormik({
        initialValues: {
            paymentType: true,
            termsAndConditionsAgreement: false
        }
    });

    const cartTotal = Object.entries(cart.products).reduce(
        (sum, [key, product]) => sum + product.price * product.quantity,
        0
    );

    const handleSubmit = () => {};

    return (
        <div>
            {Object.entries(cart.products).length ? (
                <form onSubmit={handleSubmit}>
                    <CartProductList
                        cartTotal={cartTotal}
                        cart={cart}
                        incrementProductQuantity={incrementProductQuantity}
                        decrementProductQuantity={decrementProductQuantity}
                        removeFromCart={removeFromCart}
                    />

                    <SenderInfo form={senderForm} />
                    <ReceiverInfo form={receiverForm} />
                    <Deliveryinfo form={deliveryForm} />
                    <PaymentInfo form={paymentForm} />

                    <Button type="submit">Finalizeaza comanda!</Button>
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
