import React from 'react';
import { connect } from 'react-redux';
import { fetchAddPlayer } from '../actions/fetchAddPlayer';
import { fetchAllCharacters } from '../actions/fetchAllCharacters';
import PlayerSelection from '../components/PlayerSelection';




class PlayerSelectionContainer extends React.Component {

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  render(){
    console.log('Selection container render console', this.props)
    return (
      <div>
          <h1>Selection Container</h1>
          <PlayerSelection selectedPlayers = {this.props.selectedPlayers} fetchAddPlayer={this.props.fetchAddPlayer} updateselectedPlayers={this.props.updateselectedPlayers} updatePlayersOrder={this.props.updatePlayersOrder} playerOrder={this.props.playerOrder} currentPlayer={this.props.currentPlayer} turns={this.props.turns} characters = {this.props.characters} fetchAllCharacters={this.props.fetchAllCharacters} updateCurrentPlayer={this.props.updateCurrentPlayer}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
      selectedPlayers: store.newGameReducer.selectedPlayers,
      playerOrder: store.newGameReducer.playerOrder,
      currentPlayer: store.newGameReducer.currentPlayer,
      turns: store.newGameReducer.turns,
      characters: store.charactersReducer.characters,
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
    fetchAddPlayer: (player) => dispatch(fetchAddPlayer(player)),
    updateselectedPlayers: (player) => { dispatch({type: 'UPDATE_SELECTED_PLAYERS', payload: player})},
    updatePlayersOrder: (players) => { dispatch({type: 'UPDATE_PLAYERS_ORDER', payload: players})},
    updateCurrentPlayer: (player) => { dispatch({type: 'UPDATE_CURRENT_PLAYER', payload: player})},
    fetchAllCharacters: () => dispatch(fetchAllCharacters())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelectionContainer)
