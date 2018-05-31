import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }
  checkoutContinuedHandler = () => {
    console.log('checkoutContinued');
    this.props.history.push('/checkout/contact-data');
  }
  checkoutCancelledHandler = () => {
    console.log('checkoutCancelled');
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}/>
      </div>
    )
  }
}

export default Checkout;