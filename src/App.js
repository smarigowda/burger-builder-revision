import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
// import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import BurgerBuilderWithErrorHandler from './containers/BurgerBuilder/BurgerBuilderWithErrorHandler';

class App extends Component {
  state = {
    show: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({show: false});
    }, 10000)
  }
  render() {
    return (
      <div>
        <Layout>
          {this.state.show ? <BurgerBuilderWithErrorHandler /> : null }
        </Layout>
      </div>
    );
  }
}

export default App;
