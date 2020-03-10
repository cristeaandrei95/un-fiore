import React from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import CartProductList from "../Components/CartProductList/CartProductList";
import SenderInfo from "../Components/SenderInfo/SenderInfo";
import ReceiverInfo from "../Components/ReceiverInfo/ReceiverInfo";
import Button from "../Components/Button/Button";
import { incrementProductQuantity, decrementProductQuantity, removeFromCart } from "../store/actions/cart";

const Checkout = ({ cart, incrementProductQuantity, decrementProductQuantity, removeFromCart }) => {
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
      receiverAddress: "",
      receiverCounty: "",
      receiverCity: ""
    },
    onSubmit: values => {
      console.log(values);
      return values;
    }
  });

  console.log(form);

  const cartTotal = Object.entries(cart.products).reduce(
    (sum, [key, product]) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      {Object.entries(cart.products).length ? (
        <form onSubmit={form.handleSubmit}>
          <CartProductList
            cartTotal={cartTotal}
            cart={cart}
            incrementProductQuantity={incrementProductQuantity}
            decrementProductQuantity={decrementProductQuantity}
            removeFromCart={removeFromCart}
          />

          <SenderInfo form={form} />
          <ReceiverInfo form={form} />
          {/* <Deliveryinfo />
                    <PaymentInfo /> */}

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
