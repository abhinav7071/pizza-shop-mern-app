import React from 'react';
import { Button } from "react-bootstrap";
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";

 const Checkout = (subTotal) => {
    //get order state
    const orderState = useSelector(state => state.placeOrderReducer);
    const {loading,error,success} = orderState;
    const dispatch = useDispatch();
    const tokenHandler = (token) => {
        dispatch(placeOrder(token,subTotal));
    }

    return (
        <>
            {loading && <Loader />}
            {error && <Error error="something went wrong" />}
            {success && <Success success="order placed success" />}
            <StripeCheckout
                amount={subTotal * 100}
                shippingAddress
                billingAddress = {false}
                token={tokenHandler}
                currency = "INR"
                stripeKey = "pk_test_51AUx03G5gO5jxH2Tgn0EDzwcOny2zCDnptZlDbKIyq11RmBNiNE18Gw6uOwEj1w7uu3FI2qixL3BwL5N08B3lMAt00rsXvKBnR">
                <Button>Pay Now</Button>
            </StripeCheckout>
        </>
    )
}

export default Checkout;
