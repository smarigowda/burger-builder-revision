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
    purchasable: false,
    totalPrice: 4
  }

  updatePurchasable = ingredients => {
    const sum = Object.keys(ingredients)
                      .map(key => ingredients[key])
                      .reduce((sum, ele) => {
                          return sum + ele;
                      }, 0);
    const purchasable = sum > 0;
    this.setState({ purchasable: purchasable });
  }
  
  addHandler = type => {
    console.log('you clicked, More ', type);
    const clonedState = { ...this.state };
    clonedState.totalPrice += INGREDIENTS_PRICE[type];
    const oldCount = clonedState.ingredients[type];
    clonedState.ingredients[type] = oldCount + 1;
    console.log(clonedState);
    this.setState(clonedState);
    this.updatePurchasable(clonedState.ingredients);
  }

  removeHandler = type => {
    console.log('you clicked, Less', type);
    const clonedState = { ...this.state };
    const oldCount = clonedState.ingredients[type];
    console.log(oldCount);
    /* ignore coverage: 
        can not click on a disabled button
        just in case the user tries to enable and click
        try it out and see how it behaves */
    if(oldCount <= 0) {
      console.log('no more ingredient...');
      console.log(clonedState);
      return;
    }
    clonedState.totalPrice -= INGREDIENTS_PRICE[type];
    clonedState.ingredients[type] = oldCount - 1;
    console.log(clonedState);
    this.setState(clonedState);
    this.updatePurchasable(clonedState.ingredients);
  }

  render() {
    // this.updatePurchasable();
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (const key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <=0; //?
    }
    return (
       <Aux>
         <Burger ingredients={this.state.ingredients}/>
         <BuildControls
            price={this.state.totalPrice}
            addHandler={this.addHandler}
            removeHandler={this.removeHandler}
            disabledInfo={disabledInfo}
            purchasable={this.state.purchasable}
          />
       </Aux>
    )
  }
}

export default BurgerBuilder;