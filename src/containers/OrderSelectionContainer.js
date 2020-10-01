import React from 'react';
import OrderSelection from '../components/OrderSelection'

class OrderSelectionContainer extends React.Component {



  render(){
    console.log('order selection container render console', this.props)
    return (
      <div>
        <h1>Order Selection Container</h1>
        <OrderSelection  selectedPlayers = {this.props.selectedPlayers} playerOrder={this.props.playerOrder} currentPLayer={this.props.currentPLayer} turns={this.props.turns}/>
      </div>
    );
  }
}


export default OrderSelectionContainer