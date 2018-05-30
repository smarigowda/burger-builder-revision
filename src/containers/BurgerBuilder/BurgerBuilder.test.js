import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import BurgerBuilder from './BurgerBuilder';

jest.mock('../../axios-order', () => {
  return {
    post: jest.fn(() => Promise.resolve()),
    get: jest.fn(() => Promise.resolve()),
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BurgerBuilder />, div);
  ReactDOM.unmountComponentAtNode(div);
  
});

it('message should be displayed when no ingredients', () => {
  const state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
  };

  // const wrapper = shallow(<BurgerBuilder />);
  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(state);
  wrapper.debug(); //?
  expect(wrapper.find('BurgerIngredient [type="bread-top"]')).toHaveLength(1);
  expect(wrapper.find('BurgerIngredient [type="bread-bottom"]')).toHaveLength(1);
  expect(wrapper.find('BurgerIngredient [type="cheese"]')).toHaveLength(0);
  expect(wrapper.find('BurgerIngredient [type="bacon"]')).toHaveLength(0);
  expect(wrapper.find('BurgerIngredient [type="salad"]')).toHaveLength(0);
  expect(wrapper.find('BurgerIngredient [type="meat"]')).toHaveLength(0);
  expect(wrapper.find('div.message').text()).toBe("Please add ingredients");
})

it('should render the burger with at least one ingredient', () => {
  const state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
  };
  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(state);
  wrapper.debug(); //?
  expect(wrapper.find('BurgerIngredient [type="salad"]')).toHaveLength(0);
  wrapper.find('.BuildControl .More').first().simulate('click'); 
  wrapper.find('.BuildControl .More').first().simulate('click'); 
  expect(wrapper.find('BurgerIngredient [type="salad"]')).toHaveLength(2);
  wrapper.find('.BuildControl .Less').first().simulate('click');
  wrapper.find('.BuildControl .Less').first().simulate('click');
  expect(wrapper.find('BurgerIngredient [type="salad"]')).toHaveLength(0);
  expect(wrapper.state().totalPrice).toBe(4);
  // can not click on a disabled button
  wrapper.find('.BuildControl .Less').first().simulate('click');
  wrapper.find('.BuildControl .Less').first().simulate('click');
  wrapper.find('.BuildControl .Less').first().simulate('click');
  wrapper.state() //?
  expect(wrapper.state().totalPrice).toBe(4);
})

it('should show the Modal', () => {
  const state = {
    purchasable: true,
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
  };
  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(state);
  // wrapper.debug(); //?
  wrapper.find('.OrderButton').simulate('click');
  wrapper.state() //?

});

it('should be able to cancel the order by clicling on backdrop', () => {
  const state = {
    purchasable: true, // enable Order Now button
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
  };
  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(state);
  wrapper.find('.OrderButton').simulate('click');
  expect(wrapper.find('Modal').props().show).toBe(true);
  wrapper.find('div .Backdrop').simulate('click');
  expect(wrapper.find('Modal').props().show).toBe(false);
  // wrapper.debug() //?
})

it('should be able to Cancel an order', async () => {
  const state = {
    purchasable: true, // enable Order Now button
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
  };
  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(state);
  wrapper.find('.OrderButton').simulate('click');
  expect(wrapper.find('Modal').props().show).toBe(true);
  wrapper.find('button .Danger').simulate('click');
  expect(wrapper.find('Modal').props().show).toBe(false);
});

it('should be able to Place an order', async () => {
  const state = {
    purchasable: true,
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    }, // enable Order Now button
  };
  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(state);
  wrapper.find('.OrderButton').simulate('click');
  wrapper.find('button .Success').simulate('click');
  await wrapper.instance().componentDidUpdate();
  expect(wrapper.state().orderPlaced).toBe(true);
});

it('should display spinner when loading is true', async () => {
  const stateLoading = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    loading: true,
    purchasing: true,
  }

  const stateLoaded = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    loading: false,
    purchasing: true,
  }

  const wrapper = mount(<BurgerBuilder />);
  wrapper.setState(stateLoading);
  wrapper.debug() //?
  expect(wrapper.find('spinner').length).toBe(1);
  wrapper.setState(stateLoaded);
  expect(wrapper.find('spinner').length).toBe(0);
});
