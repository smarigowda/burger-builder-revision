import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Layout from './Layout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays drawer toggle and calls the callback fn when clicked', () => {
  const wrapper = mount(<Layout />);
  expect(wrapper.state().showSideDrawer).toBe(false);
  wrapper.find('drawerToggle').simulate('click');
  expect(wrapper.state().showSideDrawer).toBe(true);
  wrapper.find('drawerToggle').simulate('click');
  expect(wrapper.state().showSideDrawer).toBe(false);
});

it('closes the side drawer when clicked on backdrop', () => {
  const wrapper = mount(<Layout />);
  expect(wrapper.state().showSideDrawer).toBe(false);
  wrapper.find('drawerToggle').simulate('click');
  expect(wrapper.state().showSideDrawer).toBe(true);
  wrapper.find('backdrop').simulate('click');
  expect(wrapper.state().showSideDrawer).toBe(false);
});

