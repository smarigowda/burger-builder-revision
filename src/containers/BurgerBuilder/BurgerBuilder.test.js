import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import BurgerBuilder from './BurgerBuilder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BurgerBuilder />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('message should be displayed when no ingredients', () => {
  const state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
  };

  // const wrapper = shallow(<BurgerBuilder />);
  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(state);
  wrapper.debug();
  expect(wrapper.find('BurgerIngredient [type="bread-top"]')).toHaveLength(1);
  expect(wrapper.find('BurgerIngredient [type="bread-bottom"]')).toHaveLength(1);
  expect(wrapper.find('BurgerIngredient [type="cheese"]')).toHaveLength(0);
  expect(wrapper.find('BurgerIngredient [type="bacon"]')).toHaveLength(0);
  expect(wrapper.find('BurgerIngredient [type="salad"]')).toHaveLength(0);
  expect(wrapper.find('BurgerIngredient [type="meat"]')).toHaveLength(0);
  expect(wrapper.text()).toBe("Please add ingredients");
})

it('should render the burger with at least one ingredient', () => {
  const state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
  };
  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(state);
  wrapper.debug(); //?
  expect(wrapper.find('BurgerIngredient [type="salad"]')).toHaveLength(0);
  wrapper.find('.BuildControl .More').first().simulate('click'); 
  expect(wrapper.find('BurgerIngredient [type="salad"]')).toHaveLength(1);
  wrapper.find('.BuildControl .Less').first().simulate('click');
  expect(wrapper.find('BurgerIngredient [type="salad"]')).toHaveLength(0);
  expect(wrapper.state().totalPrice).toBe(4);
  wrapper.find('.BuildControl .Less').first().simulate('click');
  wrapper.find('.BuildControl .Less').first().simulate('click');
  wrapper.state() //?
  expect(wrapper.state().totalPrice).toBe(4);
})