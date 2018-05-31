import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import BurgerBuilderWithErrorHandler from './containers/BurgerBuilder/BurgerBuilderWithErrorHandler';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/" component={BurgerBuilderWithErrorHandler} />
            </Switch>
            {/* <BurgerBuilderWithErrorHandler /> */}
            {/* <Checkout /> */}
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
