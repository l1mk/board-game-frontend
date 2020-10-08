import React from 'react';
import Characters from '../components/Characters';
import Dice from '../components/Dice';

//UI container component for dice and characters with props from game container
class UIContainer extends React.Component {

  capitalize = (str) => {
    if (str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }

  render(){
    //console.log('UI container render console', this.props)
    return (
      <div>
          <Characters playerOrder = {this.props.playerOrder} turns= {this.props.turns} capitalize = {this.capitalize}/>
          <Dice  players = {this.props.players} playerOrder = {this.props.playerOrder} updatePlayersOrder={this.props.updatePlayersOrder} currentPlayer = {this.props.currentPlayer} updateCurrentPlayer ={ this.props.updateCurrentPlayer} updatePlayer={this.props.updatePlayer} addGame={this.props.addGame} turns= {this.props.turns} updateTurns = {this.props.updateTurns} winUpdate = {this.props.winUpdate} capitalize = {this.capitalize}/>
      </div>
    );
  }
}

export default (UIContainer)