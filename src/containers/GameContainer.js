import React from 'react';
import BoardContainer from './BoardContainer';
import UIContainer from './UIContainer';
import { connect } from 'react-redux';
import { fetchAddGame } from '../actions/fetchAddGame';
import { fetchUpdatePlayer } from '../actions/fetchUpdatePlayer';

//first container for the start of an ongoing game
class Game extends React.Component {

  render(){
    //console.log('Game start container render console', this.props)
    return (
      <div>
         <BoardContainer playerOrder = {this.props.playerOrder} currentPlayer = {this.props.currentPlayer} updateCurrentPlayer ={ this.props.updateCurrentPlayer} updatePlayer={this.props.updatePlayer}/>
         <UIContainer players = {this.props.players} playerOrder = {this.props.playerOrder} updatePlayersOrder={this.props.updatePlayersOrder} currentPlayer = {this.props.currentPlayer} updateCurrentPlayer ={ this.props.updateCurrentPlayer} updatePlayer={this.props.updatePlayer} addGame={this.props.addGame} turns= {this.props.turns} updateTurns = {this.props.updateTurns} winUpdate = {this.props.winUpdate}  />
      </div>
    );
  }
}
 
const mapStateToProps = (store) => {
    return {
      playerOrder: store.newGameReducer.playerOrder,
      currentPlayer: store.newGameReducer.currentPlayer,
      turns: store.newGameReducer.turns,
      players: store.playersReducer.players,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
    updateCurrentPlayer: (player) => { dispatch({type: 'UPDATE_CURRENT_PLAYER', payload: player})},
    updatePlayer: (player) => { dispatch({type: 'UPDATE_PLAYER_INSIDE_ORDER', payload: player})},
    updatePlayersOrder: (players) => { dispatch({type: 'UPDATE_PLAYERS_ORDER', payload: players})},
    updateTurns: (turns) => { dispatch({type: 'UPDATE_TURNS', payload: turns})},
    addGame: (game) => dispatch(fetchAddGame(game)),
    winUpdate: (player) => (fetchUpdatePlayer(player))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Game)