import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';

const INGREDIENTS_PRICE = {
  salad: 0.3,
  bacon: 1.2,
  cheese: 0.8,
  meat: 2.1
}

class BurgerBuilder extends Component {
  // -- another way to set state --
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
    purchasing: false,
    totalPrice: 4,
    orderPlaced: false
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

  purchasingHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  purchaseContinueHandler = () => {
    //alert('great..lets continue !');
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Santosh Marigowa',
        address: {
          street: 'Baeconsfieldway',
          zipCode: 'RG6 5UR',
          country: 'UK'
        },
        email: 'san@gamil.com',
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
         .then(response => {
           console.log(response);
           this.setState({ orderPlaced: true });
         }).catch(error => {
           console.log(error);
         });
  }

  componentDidUpdate() {
    console.log('to help comp integration test');
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (const key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <=0; //?
    }
    return (
       <Aux>
         <Modal show={this.state.purchasing} purchaseCancelHandler={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelHandler={this.purchaseCancelHandler}
            purchaseContinueHandler={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}/>
         </Modal>
         <Burger ingredients={this.state.ingredients}/>
         <BuildControls
            price={this.state.totalPrice}
            addHandler={this.addHandler}
            removeHandler={this.removeHandler}
            disabledInfo={disabledInfo}
            purchasable={this.state.purchasable}
            purchasingHandler={this.purchasingHandler}
          />
       </Aux>
    )
  }
}

export default BurgerBuilder;