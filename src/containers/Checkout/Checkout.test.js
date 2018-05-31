import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { BrowserRouter, Route } from 'react-router-dom';
// import MockRouter from 'react-mock-router';
import MockRouter from './mock-router';

import Checkout from './Checkout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Checkout /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('click on continue', () => {
  const push = jest.fn();
  const goBack = jest.fn();
  const checkoutWrapper = mount(
    <MockRouter push={push} goBack={goBack}>
      <Route render={(props) => (
        <Checkout {...props}/>
      )}/>
    </MockRouter>
  );

  checkoutWrapper.find('button [btnType="Success"]').simulate('click');
  expect(push).toBeCalledWith('/checkout/contact-data');
});

it('click on cancel', () => {
  const push = jest.fn();
  const goBack = jest.fn();
  let checkoutWrapper = mount(
    <MockRouter push={push} goBack={goBack}>
      <Route render={(props) => (
        <Checkout {...props}/>
      )}/>
    </MockRouter>
  );

  checkoutWrapper.find('button [btnType="Danger"]').simulate('click');
  expect(goBack).toBeCalled();

})