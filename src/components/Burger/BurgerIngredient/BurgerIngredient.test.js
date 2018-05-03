import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
// import renderer from 'react-test-renderer';

import BurgerIngredient from './BurgerIngredient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BurgerIngredient />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Burger with meat, cheese, salad, bacon', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BurgerIngredient type="meat"/>, div);
  ReactDOM.render(<BurgerIngredient type="cheese"/>, div);
  ReactDOM.render(<BurgerIngredient type="salad"/>, div);
  ReactDOM.render(<BurgerIngredient type="bacon"/>, div);
});