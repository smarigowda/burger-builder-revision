import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import BuildControls from './BuildControls';

it('ORDER NOW button should be enabled', () => {
  const disabledInfo = {
    salad: false,
    meat: false,
    cheese: false,
    bacon: false,
  };

  const wrapper = mount(<BuildControls 
    price={4.0}
    addHandler={jest.fn()}
    removeHandler={jest.fn()}
    disabledInfo={disabledInfo}
    isDisabled={false}
    purchasable={true}/>);
  // wrapper.debug(); //?
  expect(wrapper.find('.OrderButton').prop('disabled')).toBe(false);
});

it('ORDER NOW button should be disabled', () => {
  const disabledInfo = {
    salad: false,
    meat: false,
    cheese: false,
    bacon: false,
  };

  const wrapper = mount(<BuildControls 
    price={4.0}
    addHandler={jest.fn()}
    removeHandler={jest.fn()}
    disabledInfo={disabledInfo}
    isDisabled={false}
    purchasable={false}/>);
  // wrapper.debug();
  expect(wrapper.find('.OrderButton').prop('disabled')).toBe(true);
});