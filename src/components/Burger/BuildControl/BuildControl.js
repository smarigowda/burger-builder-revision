import React from 'react';
import classes from './BuildControl.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <div className={classes.Less} onClick={props.removeHandler}>Less</div>
    <div className={classes.More} onClick={props.addHandler}>More</div>
  </div>
);

export default buildControl;