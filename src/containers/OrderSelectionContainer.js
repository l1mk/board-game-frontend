import React from 'react';
import OrderSelection from '../components/OrderSelection'

class OrderSelectionContainer extends React.Component {

  render(){
    console.log('order selection container render console', this.props)
    return (
      <div>
        <h1>Order Selection Container</h1>
      </div>
    );
  }
}


export default OrderSelectionContainer