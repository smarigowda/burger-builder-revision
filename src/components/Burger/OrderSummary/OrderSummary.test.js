import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import OrderSummary from './OrderSummary';

it('renders without crashing', () => {
  const state = {
    purchasable: true,
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    }, // enable Order Now button
  };
  const div = document.createElement('div');
  ReactDOM.render(<OrderSummary
                    ingredients={state.ingredients}
                    totalPrice={4} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should continue order summary', () => {
  const state = {
    purchasable: true,
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    }, // enable Order Now button
  };
  const continueHandler = jest.fn();
  const wrapper = mount(<OrderSummary
                          ingredients={state.ingredients}
                          totalPrice={4}
                          purchaseContinueHandler={continueHandler} />);
  wrapper.find('button [btnType="Success"]').simulate('click');
});

it('should cancel order summary', () => {
  const state = {
    purchasable: true,
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    }, // enable Order Now button
  };
  const purchaseCancelHandler = jest.fn();
  const wrapper = mount(<OrderSummary
                          ingredients={state.ingredients}
                          totalPrice={4}
                          purchaseCancelHandler={purchaseCancelHandler} />);
  wrapper.find('button [btnType="Danger"]').simulate('click');
});