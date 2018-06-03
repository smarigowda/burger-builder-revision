import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Orders from './Orders';

jest.mock('../../axios-order', () => {
  const response = {
    data: [ 
      { '1' : { price: 4.0 } },
      { '2' : { price: 5.0 } },
    ]
  }
  return {
    get: jest.fn(() => Promise.resolve(response)),
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Orders />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render with mount', () => {
  const wrapper = mount(<Orders />);
  wrapper.debug(); //?
  wrapper.state(); //?
  wrapper.instance().componentDidMount();
  wrapper.state(); //?
  
})