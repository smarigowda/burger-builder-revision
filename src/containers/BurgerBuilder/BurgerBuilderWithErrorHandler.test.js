import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import BurgerBuilderWithErrorHandler from './BurgerBuilderWithErrorHandler';

// jest.mock('../../axios-order', () => {
//   return {
//     post: jest.fn(() => Promise.resolve()),
//     get: jest.fn(() => Promise.resolve()),
//     interceptors: {
//       request: {
//         use: () => 
//       }
//     }
//   };
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BurgerBuilderWithErrorHandler />, div);
  ReactDOM.unmountComponentAtNode(div);
});