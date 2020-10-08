import React from 'react';
import OrderSelection from '../components/OrderSelection'

//order selection container with props from player selection 
class OrderSelectionContainer extends React.Component {

    componentDidMount(){
        //console.log('component didmount for characters console', this.props)
        this.props.fetchAllCharacters()
    }

  render(){
    //console.log('order selection container render console', this.props)
    return (
      <div>
        <OrderSelection  selectedPlayers = {this.props.selectedPlayers} updatePlayersOrder={this.props.updatePlayersOrder} playerOrder={this.props.playerOrder} currentPlayer={this.props.currentPlayer} turns={this.props.turns} characters = {this.props.characters} updateCurrentPlayer={this.props.updateCurrentPlayer}/>
      </div>
    );
  }
}

export default OrderSelectionContainer