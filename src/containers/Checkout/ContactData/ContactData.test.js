import React from 'react';
import { mount } from 'enzyme';
import ContactData from './ContactData';


jest.mock('../../../axios-order', () => {
  return {
    post: jest.fn(() => Promise.resolve()),
  };
});


it('render <ContactData/> with mocked orderHandler', async () => {
  const wrapper = mount(<ContactData ingredients={{}}/>);
  wrapper.instance().orderHandler = jest.fn();
  const state = {
    name: 'Santosh',
    email: '',
    address: {
      street: '',
      postCode: ''
    }
  }
  wrapper.setState(state); // mocks orderHandler
  wrapper.find('button [btnType="Success"]').simulate('click');
  expect(wrapper.instance().orderHandler).toBeCalled();
});

it('should post order deatils on click', async () => {
  const wrapper = mount(<ContactData ingredients={{}}/>);
  wrapper.find('button [btnType="Success"]').simulate('click');
})