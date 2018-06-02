import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css'
import axios from '../../../axios-order';
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    
    this.setState({loading: true});

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Santosh Marigowa',
        address: {
          street: 'Baeconsfieldway',
          zipCode: 'RG6 5UR',
          country: 'UK'
        },
        email: 'san@gamil.com',
      },
      deliveryMethod: 'fastest'
    }

    const postFn = () => {
      axios.post('/orders.json', order)
        .then(response => {
          this.setState({
            orderPlaced: true,
            loading: false,
          });
          this.props.history.push('/');
        }).catch(error => {
          this.setState({
            loading: false,
          });
        });
    }
    postFn();
  }

  render() {
    let form = (<form>
      <input type="text" name="name" placeholder="Your name"></input>
      <input type="email" name="email" placeholder="Your email"></input>
      <input type="text" name="street" placeholder="Your street"></input>
      <input type="text" name="postcode" placeholder="Your postcode"></input>
      <Button btnType="Success" onClickHandler={this.orderHandler}>ORDER NOW</Button>
    </form>);
    if(this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h1>Enter your contact info</h1>
        {form}
      </div>
    )
  }
}

export default ContactData;