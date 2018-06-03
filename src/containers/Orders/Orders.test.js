import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Orders from './Orders';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Orders />, div);
  ReactDOM.unmountComponentAtNode(div);
});