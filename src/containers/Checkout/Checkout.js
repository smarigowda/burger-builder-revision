import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
const URLSearchParams = require('url-search-params');
class Checkout extends Component {
  state = {
    ingredients: { }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for( let param of query.entries() ) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
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