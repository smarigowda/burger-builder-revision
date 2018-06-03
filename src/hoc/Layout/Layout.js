import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

export class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClickHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  drawerToggleClickHandler = () => {
    console.log('drawerToggleClickHandler...');
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.showSideDrawer} sideDrawerClickHandler={this.sideDrawerClickHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}
export default Layout;