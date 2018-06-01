import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Route } from 'react-router-dom';
import MockRouter from './mock-router';
import Checkout from './Checkout';

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
  const location = {
    search: '?bacon=1&cheese=1&meat=1&salad=1'
  }
  let checkoutWrapper = mount(
    <MockRouter push={push} goBack={goBack} location={location}>
      <Route render={(props) => (
        <Checkout {...props}/>
      )}/>
    </MockRouter>
  );

  checkoutWrapper.find('button [btnType="Danger"]').simulate('click');
  expect(goBack).toBeCalled();
})