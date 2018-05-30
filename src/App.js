import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
// import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import BurgerBuilderWithErrorHandler from './containers/BurgerBuilder/BurgerBuilderWithErrorHandler';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <BurgerBuilderWithErrorHandler />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
