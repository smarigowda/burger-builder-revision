import React from 'react';
import { withRouter } from 'react-router-dom';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';
export const burger = props => {
  console.log('burger', props)
  let transformed = Object.keys(props.ingredients)
                        .map((d, i) => {
                          let ele = [];
                          for(i=0; i < props.ingredients[d]; i++) {
                            ele.push(<BurgerIngredient key={`${d}_${i}`} type={d}/>);
                          }
                          return ele;
                        })
                        .reduce((arr, ele) => {
                          return arr.concat(ele);
                        }, [])
  // console.log(transformed);
  if(transformed.length === 0) {
    transformed = <div className="message">Please add ingredients</div>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformed}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
};

export default withRouter(burger);