import React from 'react';
import { mount } from 'enzyme';

import Orders from './Orders';

jest.mock('../../axios-order', () => {
  return {
    get: jest.fn(() => Promise.reject()),
  };
});

it('render with mount', () => {
  const wrapper = mount(<Orders />);
})