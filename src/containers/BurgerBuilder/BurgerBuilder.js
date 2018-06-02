import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import { burger as Burger } from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
    ingredients: null,
    purchasable: false,
    purchasing: false,
    totalPrice: 4,
    orderPlaced: false,
    loading: false,
    error: false,
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
    const clonedState = { ...this.state };
    clonedState.totalPrice += INGREDIENTS_PRICE[type];
    const oldCount = clonedState.ingredients[type];
    clonedState.ingredients[type] = oldCount + 1;
    this.setState(clonedState);
    this.updatePurchasable(clonedState.ingredients);
  }

  removeHandler = type => {
    const clonedState = { ...this.state };
    const oldCount = clonedState.ingredients[type];
    /* ignore coverage: 
        can not click on a disabled button
        just in case the user tries to enable and click
        try it out and see how it behaves */
    if(oldCount <= 0) {
      return;
    }
    clonedState.totalPrice -= INGREDIENTS_PRICE[type];
    clonedState.ingredients[type] = oldCount - 1;
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

  purchaseContinueHandler =  /* ignore coverage */ () => {
    const queryParams = [];
    for (let name in this.state.ingredients) {
      queryParams.push(encodeURIComponent(name) + '=' + encodeURIComponent(this.state.ingredients[name]));
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  componentDidUpdate() {
    console.log('to help comp integration test');
  }

  componentDidMount() {
    axios.get('/ingredients.json')
         .then(response => {
           this.setState({ingredients: response.data});
         }).catch(error => { 
           this.setState({error: true})
         });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (const key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <=0;
    }

    let orderSummary = null;

    let burger = this.state.error ? 'Ingredients can not be loaded' : <Spinner />
    
    if(this.state.ingredients) {
      burger =  (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            price={this.state.totalPrice}
            addHandler={this.addHandler}
            removeHandler={this.removeHandler}
            disabledInfo={disabledInfo}
            purchasable={this.state.purchasable}
            purchasingHandler={this.purchasingHandler}
          />
        </Aux>);

      orderSummary = <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancelHandler={this.purchaseCancelHandler}
        purchaseContinueHandler={this.purchaseContinueHandler}
        totalPrice={this.state.totalPrice} />
    }

    if(this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
       <Aux>
         <Modal show={this.state.purchasing} purchaseCancelHandler={this.purchaseCancelHandler}>
          {orderSummary}
         </Modal>
         {burger}
       </Aux>
    )
  }
}

export default BurgerBuilder;