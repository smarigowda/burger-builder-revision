import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import URLSearchParams from 'url-search-params';
class Checkout extends Component {
  state = {
    ingredients: { },
    totalPrice: 0,
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for( let param of query.entries() ) {
      if(param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  checkoutContinuedHandler = () => {
    this.props.history.push('/checkout/contact-data');
  }
  checkoutCancelledHandler = () => {
    console.log('checkoutCancelled');
    this.props.history.goBack();
  }
  
  // ignore coverage
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}/>
        <Route
          path={this.props.match.path + '/contact-data'}
          render={ props => (<ContactData
                              {...props}
                              ingredients={this.state.ingredients}
                              price={this.state.totalPrice}/>) } />
      </div>
    )
  }
}

export default Checkout;