import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Order from './Order';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const oneOrder = { price: 4.0, ingredients: { bacon: 1, cheese: 1, meat: 0, salad: 0 } };
  ReactDOM.render(<Order {...oneOrder}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});