import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import requester from "../../app/Apis/requester";
import Axios from "axios";

import { NOTIFY, GET_ORDER_ITEMS } from "../../app/Actions/index";

function CheckoutForm(props) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  
  const [isshippingFree, setIsshippingFree]=useState(true);
  
  const axiosInstance = axios.create({
    baseURL: "https://payment.sigmamedicalsupplies.co.uk",
    headers: { "Content-Type": "application/json" }
  });

  const createPaymentIntent = () => {
    // Create PaymentIntent as soon as the page loads
    var price =  parseInt(window.localStorage.getItem("totalPrice"));
    var extraFees = isshippingFree?  calculateShipping(): 0;
    console.log(isshippingFree +" shipping free")
    const params={amount: (price+extraFees)*100}
    setTimeout(()=>{
      console.log(extraFees);
      axiosInstance.post("/create-payment-intent",null ,{params:params}).then(data => {
        console.log(data.data.clientSecret)
        setClientSecret(data.data.clientSecret);
      });
    },3000)
   
      
  }

  const calculateShipping = () =>{
    
   if(props.gstate.getOrderItem.orderItems.prods){  var country = props.gstate.getOrderItem.orderItems.prods[0].country;
    console.log(country);
    if( country.toLowerCase()==="uk" || country.toLowerCase()==="united kingdom" || country.toLowerCase()==="england"){
      return parseInt(props.gstate.commData.all[9].value);
    }
    else {
      return parseInt(props.gstate.commData.all[10].value);
    }}
  }

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

      //incase of paymenyh success do the following : 
      window.localStorage.removeItem("locationId");
      window.localStorage.removeItem("totalPrice");
      props.NOTIFY({title:"Notification", body: " Payment Operation is Completed Successfully ",  kind:"success"});
      requester.get(`/order/orderPaid` , { params: {orderId:window.localStorage.getItem("orderId")} })
        .then(() => {
          props.NOTIFY({title:"Payment", body: "Payment process completed successfully",kind:"success"});
          
          window.localStorage.removeItem("orderId");
          props.history.push("./order-summary");
        })
        .catch((err) => {
          props.NOTIFY({title:"Notification", body: err.message, kind:"error"});
        });
      
    }
  };
  useEffect(()=>{
    
    if(props.gstate.getOrderItem.orderItems.prods){
      if(props.gstate.getOrderItem.orderItems.prods.length>0){
        console.log("shipping fees checking")
        shippingFeesChecker();
      }
     
    }
   
  },[props.gstate.getOrderItem.orderItems])

  const shippingFeesChecker = () =>{
    var isFreeShipping=true;
    props.gstate.getOrderItem.orderItems.prods && props.gstate.getOrderItem.orderItems.prods.map((product)=>{
      isFreeShipping= isFreeShipping && product.isFreeShipping;
      setIsshippingFree(isFreeShipping);
    })
    createPaymentIntent();
  }
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <div className="d-flex justify-content-between text-secondary font-weight-bold px-2 pt-2 ">
        <span >Total Price</span><span>{"£"+parseInt(window.localStorage.getItem("totalPrice")).toFixed(2)}</span>
      </div>
      <div className="d-flex justify-content-between text-secondary font-weight-bold px-2 pt-2">
        <span>Shipping Fees</span><span>{isshippingFree? "£0.00":`£${calculateShipping().toFixed(2)}`}</span>
      </div>
      <button
      className="PayBtn"
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : <span className="d-flex justify-content-between"><span>Grand Total</span><span>{`£${(parseInt(window.localStorage.getItem("totalPrice"))+calculateShipping()).toFixed(2) }`}</span></span>}
        </span>
        
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        <span>Payment succeeded</span>
      </p>
    </form>
  );
}

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { NOTIFY, GET_ORDER_ITEMS })(CheckoutForm);
