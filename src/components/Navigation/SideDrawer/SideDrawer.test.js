import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import SideDrawer from './SideDrawer';

jest.mock('../../UI/Backdrop/Backdrop', () => {
  const ComponentToMock = () => <div />;
  return ComponentToMock;
});

jest.mock('../NavigationItems/NavigationItems', () => {
  const ComponentToMock = () => <div />;
  return ComponentToMock;
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div><SideDrawer show="true"/></div>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows the side drawer', () => {
  const wrapper = mount(<SideDrawer show/>);
  expect(wrapper.find('ComponentToMock [show=true]').length).toBe(1);
});

it('hides the side drawer', () => {
  const wrapper = mount(<div><SideDrawer/></div>);
  wrapper.find('[class*="Close"]');
  expect(wrapper.find('div [className="SideDrawer Close"]').length).toBe(1);
});
