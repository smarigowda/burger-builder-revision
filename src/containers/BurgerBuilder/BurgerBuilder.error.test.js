import React from 'react';
import { mount } from 'enzyme';
import BurgerBuilder from './BurgerBuilder';

jest.mock('../../axios-order', () => {
  return {
    post: jest.fn(() => Promise.reject()),
  };
});

it('error response should not update the state', async () => {
  const state = {
    purchasable: true, // enable Order Now button
  };
  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(state);
  wrapper.find('.OrderButton').simulate('click');
  wrapper.find('button .Success').simulate('click');
  await wrapper.instance().componentDidUpdate();
  expect(wrapper.state().orderPlaced).toBe(false);
});
