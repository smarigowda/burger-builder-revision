import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerClickHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer show={this.state.showSideDrawer} sideDrawerClickHandler={this.sideDrawerClickHandler}/>
        <div>Toolbar, Side Drawer, Backdrop</div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}
export default Layout;