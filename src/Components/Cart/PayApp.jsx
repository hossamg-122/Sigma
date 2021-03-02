import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./PayApp.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_live_51HHtXtA22exC8mZdIRXH9gueIlSi76uRsR5b8Wpwz5aiYYbDvXnKulIoemr6ZXJUL30of4ANGpSeNJtm3BSeWHOv00mfHzpOWj");

export default function PayApp() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
