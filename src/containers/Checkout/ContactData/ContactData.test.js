import React from 'react';
import { mount } from 'enzyme';
import { Route } from 'react-router-dom';
import MockRouter from '../mock-router';
import ContactData from './ContactData';

it('should render <ContactData/>', () => {
  const push = jest.fn();
  const goBack = jest.fn();
  const contactDataWrapper = mount(
    <MockRouter push={push} goBack={goBack}>
      <Route render={(props) => (
        <ContactData {...props}/>
      )}/>
    </MockRouter>
  );

  contactDataWrapper.find('button [btnType="Success"]').simulate('click');
});