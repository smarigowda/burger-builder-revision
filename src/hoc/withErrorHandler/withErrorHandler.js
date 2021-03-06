import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });
      /* ignore coverage, has Cypress test */
      this.respInterceptor = axios.interceptors.response.use(response => response, error => {
        this.setState({ error: error });
      })
    }

    errorConfirmedHandler = () => {
      /* ignore coverage, has Cypress test */
      this.setState({error: null});
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.respInterceptor);
    }

    render() {
      /* ignore coverage, has Cypress test */
      return (
        <Aux>
          <Modal show={this.state.error} purchaseCancelHandler={this.errorConfirmedHandler}>
            { this.state.error ? 'Something did not work !' : null }
          </Modal>
          <WrappedComponent {...this.props}/>
        </Aux>
      );
    }
  }
}

export default withErrorHandler;