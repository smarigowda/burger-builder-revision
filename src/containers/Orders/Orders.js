import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
export class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }
  cancelSource = null;
  componentDidMount() {
         axios.get('/orders.json')
         .then(response => {
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
         })
         .catch(error => {
           this.setState({
               loading: false
           });
         });
  }
  componentWillUnmount() {
    // if the http request is still in flight then we need to cancel it here
    // may leak memory
    // or use redux to manage the state ?
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