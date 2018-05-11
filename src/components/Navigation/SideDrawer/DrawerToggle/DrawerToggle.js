import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = props => {
  return (
    <div 
      onClick={props.drawerToggleClickHandler}
      className={classes.MobileOnly}>MENU</div>
  )
}

export default drawerToggle;