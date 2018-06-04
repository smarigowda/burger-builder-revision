import React from 'react';
import classes from './Order.css';

const order = props => {
  console.log('..props...');
  console.log(props);
  const ingredients = Object.keys(props.ingredients).map(key => {
    return {
      name: key,
      count: props.ingredients[key]
    }
  });
  const ingredientsJsx = ingredients.map(d => (<span key={d.name}>{d.name} ({d.count})</span>));
  return (
    <div className={classes.Order}>
      <h3>Ingredients</h3>
        { ingredientsJsx }
      <p>Price: <strong>£ {props.price.toFixed(2)}</strong></p>
    </div>
  );
}

export default order;