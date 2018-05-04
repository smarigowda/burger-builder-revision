import React from 'react';
import classes from './BuildControl.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} onClick={props.removeHandler} disabled={props.isDisabled}>Less</button>
    <button className={classes.More} onClick={props.addHandler}>More</button>
  </div>
);

export default buildControl;