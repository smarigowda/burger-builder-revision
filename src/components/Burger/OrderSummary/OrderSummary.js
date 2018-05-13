import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  
  componentWillUpdate = () => {
    // console.log('[OrderSummary] componentWillUpdate...');
  }
  render() {
    const list = Object.keys(this.props.ingredients)
                       .map(key => <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}</li>)
    return (
      <Aux>
        <p><strong>Your delicious order with following ingredients:</strong></p>
        <ul>
          {list}
        </ul>
        <p><strong>Total Price: {this.props.totalPrice.toFixed(2)} $</strong></p>
        <p>Continue to Checkout ?</p>
        <Button btnType="Success" onClickHandler={() => { this.props.purchaseContinueHandler(); } }>CONTINUE</Button>
        <Button btnType="Danger" onClickHandler={this.props.purchaseCancelHandler} >CANCEL</Button>
      </Aux>
    );
  }
}

export default OrderSummary;