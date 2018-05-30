import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import BurgerBuilderWithErrorHandler from './BurgerBuilderWithErrorHandler';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BurgerBuilderWithErrorHandler />, div);
  ReactDOM.unmountComponentAtNode(div);
});