import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: ''
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h1>Enter your contact info</h1>
        <form>
          <input type="text" name="name" placeholder="Your name"></input>
          <input type="email" name="email" placeholder="Your email"></input>
          <input type="text" name="street" placeholder="Your street"></input>
          <input type="text" name="postcode" placeholder="Your postcode"></input>
          <Button btnType="Success">ORDER NOW</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;