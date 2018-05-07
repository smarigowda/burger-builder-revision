import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const list = Object.keys(props.ingredients)
                     .map(key => <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>)
  return (
    <Aux>
      <p><strong>Your delicious order with following ingredients:</strong></p>
      <ul>
        {list}
      </ul>
      <p><strong>Total Price: {props.totalPrice.toFixed(2)} $</strong></p>
      <p>Continue to Checkout ?</p>
      <Button btnType="Success" onClickHandler={() => { props.purchaseContinueHandler(); } }>CONTINUE</Button>
      <Button btnType="Danger" onClickHandler={props.purchaseCancelHandler} >CANCEL</Button>
    </Aux>
  );
};

export default orderSummary;