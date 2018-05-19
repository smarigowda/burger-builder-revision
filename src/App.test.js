import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';

// jest.mock('./axios-order', () => {
//   return {
//     interceptors: {
//       request: {
//         use: jest.fn()
//       }
//     },
//     post: jest.fn(() => Promise.resolve()),
//   };
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('should be able to order', () => {
//   const wrapper = mount(<App />);
//   wrapper.find('.OrderButton').simulate('click');
//   wrapper.find('button .Success').simulate('click');
//   // wrapper.debug(); //?
// });
