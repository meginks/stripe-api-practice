import React from "react";
import axios from "axios";
import { CardElement, injectStripe } from "react-stripe-elements";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
  }

  submit = () => {
    // User clicked submit
    let { token } = this.props.stripe.createToken({
      number: "Number",
      name: "name"
    });
    axios
      .post("http://localhost:5000/charge", token.id, {
        headers: { "Content-Type": "text/plain" }
      })
      .then(res => {
        this.setState({ complete: true });
        console.log("res", res);
      })
      .catch(error => {
        console.log("failed", error);
      });
  };

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
