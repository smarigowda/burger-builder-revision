import React from 'react';
import { mount } from 'enzyme';
import ContactData from './ContactData';


jest.mock('../../../axios-order', () => {
  return {
    post: jest.fn(() => Promise.reject()),
  };
});

it('should post order deatils on click', async () => {
  const wrapper = mount(<ContactData ingredients={{}}/>);
  wrapper.find('button [btnType="Success"]').simulate('click');
})