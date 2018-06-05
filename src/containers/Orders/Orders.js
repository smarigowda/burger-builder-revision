import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { from } from 'rxjs'
export class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }
  cancelSource = null;
  componentDidMount() {
        const onNextHandler = response => {
            console.log(response);
            const fetchedOrders = [];
            for(let key in response.data) {
              fetchedOrders.push({
                ...response.data[key],
                id: key
              });
            }
            console.log(fetchedOrders);
            this.setState({
              loading: false,
              orders: fetchedOrders
            });
        }

        const onErrorHandler = error => {
          this.setState({
            loading: false
          })
        }

        const promise = axios.get('/orders.json');
        const result = from(promise);

        this.subscription = result.subscribe(onNextHandler, onErrorHandler);

  }
  componentWillUnmount() {
    // to avoid memory leak
    this.subscription.unsubscribe();
  }
  render() {
    return (
      <div>
        <h1>Orders</h1>
        {this.state.orders.map(order => (
          <Order
             key={order.id}
             ingredients={order.ingredients}
             price={+order.price}/>
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);