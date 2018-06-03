import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Layout } from './Layout';

jest.mock('../../components/Navigation/SideDrawer/SideDrawer', () => {
  const ComponentToMock = (props) => <div data-test-id="sideDrawer" onClick={props.sideDrawerClickHandler}/>;
  return ComponentToMock;
});

jest.mock('../../components/Navigation/Toolbar/Toolbar', () => {
  const ComponentToMock = (props) => <div data-test-id="drawerToggle" onClick={props.drawerToggleClickHandler}/>;
  return ComponentToMock;
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('closes the side drawer when clicked on drawer toggle', () => {
  const wrapper = mount(<Layout />);
  wrapper.setState({showSideDrawer: true});
  expect(wrapper.state().showSideDrawer).toBe(true);
  wrapper.find('[data-test-id="sideDrawer"]').simulate('click');
  expect(wrapper.state().showSideDrawer).toBe(false);
});

it('Opens the drawer toggle when clicked', () => {
  const wrapper = mount(<Layout />);
  expect(wrapper.state().showSideDrawer).toBe(false);
  wrapper.find('[data-test-id="drawerToggle"]').simulate('click');
  expect(wrapper.state().showSideDrawer).toBe(true);
});

