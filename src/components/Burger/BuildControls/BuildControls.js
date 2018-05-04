import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
]

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Total Price:  <strong>{props.price.toFixed(2)}</strong></p>
    { controls.map(d => {
      return <BuildControl
                key={d.label}
                label={d.label}
                addHandler={ () => props.addHandler(d.type) }
                removeHandler = { () => props.removeHandler(d.type)}
                isDisabled={props.disabledInfo[d.type]} />
    })}
  </div>
);

export default buildControls;