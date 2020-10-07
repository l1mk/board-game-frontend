import React from 'react';
import BoardContainer from './BoardContainer';
import UIContainer from './UIContainer';
import { connect } from 'react-redux';
import { fetchAddGame } from '../actions/fetchAddGame';

class Game extends React.Component {

  render(){
    console.log('Game start container render console', this.props)
    return (
      <div>
          <h1>Game Container</h1>
         <BoardContainer playerOrder = {this.props.playerOrder} currentPlayer = {this.props.currentPlayer} updateCurrentPlayer ={ this.props.updateCurrentPlayer} updatePlayer={this.props.updatePlayer}/>
         <UIContainer playerOrder = {this.props.playerOrder} updatePlayersOrder={this.props.updatePlayersOrder} currentPlayer = {this.props.currentPlayer} updateCurrentPlayer ={ this.props.updateCurrentPlayer} updatePlayer={this.props.updatePlayer} addGame={this.props.addGame} turns= {this.props.turns} updateTurns = {this.props.updateTurns}  />
      </div>
    );
  }
}

 
const mapStateToProps = (store) => {
    return {
      playerOrder: store.newGameReducer.playerOrder,
      currentPlayer: store.newGameReducer.currentPlayer,
      turns: store.newGameReducer.turns,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
    updateCurrentPlayer: (player) => { dispatch({type: 'UPDATE_CURRENT_PLAYER', payload: player})},
    updatePlayer: (player) => { dispatch({type: 'UPDATE_PLAYER_INSIDE_ORDER', payload: player})},
    updatePlayersOrder: (players) => { dispatch({type: 'UPDATE_PLAYERS_ORDER', payload: players})},
    updateTurns: (turns) => { dispatch({type: 'UPDATE_TURNS', payload: turns})},
    addGame: (game) => dispatch(fetchAddGame(game))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Game)