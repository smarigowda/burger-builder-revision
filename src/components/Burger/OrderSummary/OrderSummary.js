import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = props => {
  const list = Object.keys(props.ingredients)
                     .map(key => <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>)
  return (
    <Aux>
      <p><strong>Your delicious order with following ingredients:</strong></p>
      <ul>
        {list}
      </ul>
    </Aux>
  );
};

export default orderSummary;