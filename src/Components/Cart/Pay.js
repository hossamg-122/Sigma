import React, { Component } from "react";
import PayApp from "./PayApp";
import { connect } from "react-redux";
import axios from "axios";
import OrderItem from "../Order/OrderItem";
import requester from "../../app/Apis/requester";

import { NOTIFY, GET_ORDER_ITEMS } from "../../app/Actions/index";
import Footer from "../Footer/Footer";
class Pay extends Component {
  componentDidMount() {
  
    this.props.GET_ORDER_ITEMS(window.localStorage.getItem("orderId"));

    if (!window.localStorage.getItem("totalPrice")) {
      this.props.history.push("/");
    }

  //   if (!window.localStorage.getItem("payment-reloaded")) {
  //     window.localStorage.setItem("payment-reloaded", "done");
  //     window.location.reload();
  //   }

  //   this.paymentProcess();
  // }

  // componentWillUnmount() {
  //   window.localStorage.removeItem("payment-reloaded");
  }

  paymentProcess = () => {
    var that = this;

    var payButton = document.getElementById("pay-button");
    var form = document.getElementById("payment-form");
    var Frames = window.Frames;
    Frames.init("pk_test_f1e3247d-9e83-487c-959d-219e02d5b56e");

    var logos = generateLogos();
    function generateLogos() {
      var logos = {};
      logos["card-number"] = {
        src: "card",
        alt: "card number logo",
      };
      logos["expiry-date"] = {
        src: "exp-date",
        alt: "expiry date logo",
      };
      logos["cvv"] = {
        src: "cvv",
        alt: "cvv logo",
      };
      return logos;
    }

    var errors = {};
    errors["card-number"] = "Please enter a valid card number";
    errors["expiry-date"] = "Please enter a valid expiry date";
    errors["cvv"] = "Please enter a valid cvv code";

    Frames.addEventHandler(
      Frames.Events.FRAME_VALIDATION_CHANGED,
      onValidationChanged
    );
    function onValidationChanged(event) {
      var e = event.element;

      if (event.isValid || event.isEmpty) {
        if (e === "card-number" && !event.isEmpty) {
          showPaymentMethodIcon();
        }
        setDefaultIcon(e);
        clearErrorIcon(e);
        clearErrorMessage(e);
      } else {
        if (e === "card-number") {
          clearPaymentMethodIcon();
        }
        setDefaultErrorIcon(e);
        setErrorIcon(e);
        setErrorMessage(e);
      }
    }

    function clearErrorMessage(el) {
      var selector = ".error-message__" + el;
      var message = document.querySelector(selector);
      message.textContent = "";
    }

    function clearErrorIcon(el) {
      var logo = document.getElementById("icon-" + el + "-error");
      logo.style.removeProperty("display");
    }

    function showPaymentMethodIcon(parent, pm) {
      if (parent) parent.classList.add("show");

      var logo = document.getElementById("logo-payment-method");
      if (pm) {
        var name = pm.toLowerCase();
        logo.setAttribute("src", "images/card-icons/" + name + ".svg");
        logo.setAttribute("alt", pm || "payment method");
      }
      logo.style.removeProperty("display");
    }

    function clearPaymentMethodIcon(parent) {
      if (parent) parent.classList.remove("show");

      var logo = document.getElementById("logo-payment-method");
      logo.style.setProperty("display", "none");
    }

    function setErrorMessage(el) {
      var selector = ".error-message__" + el;
      var message = document.querySelector(selector);
      message.textContent = errors[el];
    }

    function setDefaultIcon(el) {
      var selector = "icon-" + el;
      var logo = document.getElementById(selector);
      logo.setAttribute("src", "images/card-icons/" + logos[el].src + ".svg");
      logo.setAttribute("alt", logos[el].alt);
    }

    function setDefaultErrorIcon(el) {
      var selector = "icon-" + el;
      var logo = document.getElementById(selector);
      logo.setAttribute(
        "src",
        "images/card-icons/" + logos[el].src + "-error.svg"
      );
      logo.setAttribute("alt", logos[el].alt);
    }

    function setErrorIcon(el) {
      var logo = document.getElementById("icon-" + el + "-error");
      logo.style.setProperty("display", "block");
    }

    Frames.addEventHandler(
      Frames.Events.CARD_VALIDATION_CHANGED,
      cardValidationChanged
    );
    function cardValidationChanged(event) {
      payButton.disabled = !Frames.isCardValid();
    }

    Frames.addEventHandler(
      Frames.Events.CARD_TOKENIZATION_FAILED,
      onCardTokenizationFailed
    );
    function onCardTokenizationFailed(error) {
      Frames.enableSubmitForm();
    }

    Frames.addEventHandler(Frames.Events.CARD_TOKENIZED, onCardTokenized);
    function onCardTokenized(event) {
      const instance = axios.create({
        baseURL: "https://payment.sigmamedicalsupplies.co.uk/api",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });


      var formData = new FormData();
      formData.append("Amount", (window.localStorage.getItem("totalPrice")*100).toString());
      formData.append("CardToken", event.token);
      instance
        .post("pay", formData)
        .then(() => {
          window.localStorage.removeItem("locationId");
          window.localStorage.removeItem("totalPrice");
          that.props.NOTIFY({title:"Notification", body: " Payment Operation is Completed Successfully ",  kind:"success"});
          requester.get(`/order/orderPaid` , { params: {orderId:window.localStorage.getItem("orderId")} })
            .then(() => {
              that.props.NOTIFY({title:"Payment", body: "Payment process completed successfully", kind:"success"});
              that.props.history.push("./order-summary");
              window.localStorage.removeItem("orderId");
            })
            .catch((err) => {
              that.props.NOTIFY({title:"Notification", body: err.message,  kind:"error"});
            });
        })
        .catch((err) => {
          that.props.NOTIFY({title:"Notification", body: err.message,  kind:"error"});
        });
    }

    Frames.addEventHandler(
      Frames.Events.PAYMENT_METHOD_CHANGED,
      paymentMethodChanged
    );
    function paymentMethodChanged(event) {
      var pm = event.paymentMethod;
      let container = document.querySelector(".icon-container.payment-method");

      if (!pm) {
        clearPaymentMethodIcon(container);
      } else {
        clearErrorIcon("card-number");
        showPaymentMethodIcon(container, pm);
      }
    }

    form.addEventListener("submit", onSubmit);
    function onSubmit(event) {
      event.preventDefault();
      Frames.submitCard();
    }
  };
  render() {
    return (
      <div>
      <PayApp/>
           <div
          style={{ width: "100%", margin: "1% 1%", display: "inline-block" }}
        >
          <h3 style={{ textAlign: "center", margin: "1% auto" }}>
            {this.props.gstate.getOrderItem.orderItems.prods && "Order Items"}{" "}
          </h3>
          {this.props.gstate.getOrderItem.orderItems.prods
            ? this.props.gstate.getOrderItem.orderItems.prods.map((order) => {
                return (
                  <OrderItem item={order} paymentDetails={false} />
                );
              })
            : null}
        </div>
      </div>
      //   <form
      //     id="payment-form"
      //     method="POST"
      //     action="https://merchant.com/charge-card"
      //   >
      //     <label htmlFor="card-number">Card number</label>
      //     <div className="input-container card-number">
      //       <div className="icon-container">
      //         <img
      //           id="icon-card-number"
      //           src="images/card-icons/card.svg"
      //           alt="PAN"
      //         />
      //       </div>
      //       <div className="card-number-frame"></div>
      //       <div className="icon-container payment-method">
      //         <img id="logo-payment-method" />
      //       </div>
      //       <div className="icon-container">
      //         <img
      //           id="icon-card-number-error"
      //           src="images/card-icons/error.svg"
      //         />
      //       </div>
      //     </div>

      //     <div className="date-and-code">
      //       <div>
      //         <label htmlFor="expiry-date">Expiry date</label>
      //         <div className="input-container expiry-date">
      //           <div className="icon-container">
      //             <img
      //               id="icon-expiry-date"
      //               src="images/card-icons/exp-date.svg"
      //               alt="Expiry date"
      //             />
      //           </div>
      //           <div className="expiry-date-frame"></div>
      //           <div className="icon-container">
      //             <img
      //               id="icon-expiry-date-error"
      //               src="images/card-icons/error.svg"
      //             />
      //           </div>
      //         </div>
      //       </div>

      //       <div>
      //         <label htmlFor="cvv">Security code</label>
      //         <div className="input-container cvv">
      //           <div className="icon-container">
      //             <img
      //               id="icon-cvv"
      //               src="images/card-icons/cvv.svg"
      //               alt="CVV"
      //             />
      //           </div>
      //           <div className="cvv-frame"></div>
      //           <div className="icon-container">
      //             <img id="icon-cvv-error" src="images/card-icons/error.svg" />
      //           </div>
      //         </div>
      //       </div>
      //     </div>

      //     <button id="pay-button" disabled="">
      //       PAY{" "}
      //       {window.localStorage.getItem("totalPrice") ? (
      //         <span>
      //           {" "}
      //           £{Math.ceil(window.localStorage.getItem("totalPrice")).toFixed(2)}{" "}
      //         </span>
      //       ) : null}
      //     </button>

      //     <div>
      //       <span className="error-message error-message__card-number"></span>
      //       <span className="error-message error-message__expiry-date"></span>
      //       <span className="error-message error-message__cvv"></span>
      //     </div>

      //     <p className="success-payment-message"></p>
      //   </form>

        // <div
        //   style={{ width: "100%", margin: "1% 1%", display: "inline-block" }}
        // >
        //   <h3 style={{ textAlign: "center", margin: "5% auto" }}>
        //     {this.props.gstate.getOrderItem.orderItems.prods && "Order Items"}{" "}
        //   </h3>
        //   {this.props.gstate.getOrderItem.orderItems.prods
        //     ? this.props.gstate.getOrderItem.orderItems.prods.map((order) => {
        //         return (
        //           <OrderItem item={order} paymentDetails={true} />
        //           // <>
        //           // <p>{order.productName} ----  QTY : {order.productQuantity}</p>
        //           // <img src={order.productImage}></img>
        //           // </>
        //         );
        //       })
        //     : null}
        // </div>
    
    );
  }
}
const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { NOTIFY, GET_ORDER_ITEMS })(Pay);
