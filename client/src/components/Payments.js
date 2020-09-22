import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Mail Me"
        description="$5 for 5 email tokens"
        amount={500}
        token={(token) => actions.handleToken(token)} //token is an object which represents the entire charge, using the id we can make a follow up
        //request to the stripe servers to say we are going to bill this user X dollars
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
