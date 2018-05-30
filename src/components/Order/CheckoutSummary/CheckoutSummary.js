import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope it tases well !</h1>
      <div>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" onClickHandler>CANCEL</Button>
      <Button btnType="Success" onClickHandler>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary;