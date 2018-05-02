import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';
const burger = props => {
  const ingList = Object.keys(props.ingredients)
                        .map((d, i) => {
                          let ele = [];
                          for(i=0; i < props.ingredients[d]; i++) {
                            ele.push(<BurgerIngredient type={d}/>);
                          }
                          return ele;
                        })
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingList}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;