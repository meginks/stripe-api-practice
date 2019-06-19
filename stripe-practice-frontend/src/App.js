import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./components/CheckoutForm";

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_AxIQDZnEX6YGmzlaAeLlbANu00G78Ji578">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
