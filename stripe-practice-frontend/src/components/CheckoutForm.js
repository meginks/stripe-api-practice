import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
  }

  async submit(ev) {
    // User clicked submit
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });
    if (response.ok) {
      this.setState({ complete: true });
      console.log("Purchase Complete!");
    }
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
