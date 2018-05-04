import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
  salad: 0.3,
  bacon: 1.2,
  cheese: 0.8,
  meat: 2.1
}

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  addHandler = type => {
    console.log('you clicked, More ', type);
    const clonedState = { ...this.state };
    clonedState.totalPrice += INGREDIENTS_PRICE[type];
    const oldCount = clonedState.ingredients[type];
    clonedState.ingredients[type] = oldCount + 1;
    console.log(clonedState);
    this.setState(clonedState);
  }

  removeHandler = type => {
    console.log('you clicked, Less', type);
    const clonedState = { ...this.state };
    const oldCount = clonedState.ingredients[type];
    console.log(oldCount);
    if(oldCount <= 0) {
      console.log('no more ingredient...');
      console.log(clonedState);      
      return;
    }
    clonedState.totalPrice -= INGREDIENTS_PRICE[type];
    clonedState.ingredients[type] = oldCount - 1;
    console.log(clonedState);
    this.setState(clonedState);
  }

  render() {
    return (
       <Aux>
         <Burger ingredients={this.state.ingredients}/>
         <BuildControls
            addHandler={this.addHandler}
            removeHandler={this.removeHandler}
          />
       </Aux>
    )
  }
}

export default BurgerBuilder;