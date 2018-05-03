import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';
const burger = props => {
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
  console.log(transformed);
  if(transformed.length === 0) {
    transformed = <div>Please add ingredients</div>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformed}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;