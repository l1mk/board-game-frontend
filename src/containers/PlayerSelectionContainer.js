import React from 'react';
import { connect } from 'react-redux';
import { fetchAddPlayer } from '../actions/fetchAddPlayer'
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
          <PlayerSelection selectedPlayers = {this.props.selectedPlayers} fetchAddPlayer={this.props.fetchAddPlayer} updateselectedPlayers={this.props.updateselectedPlayers} playerOrder={this.props.playerOrder} currentPLayer={this.props.currentPLayer} turns={this.props.turns}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
      selectedPlayers: store.newGameReducer.selectedPlayers,
      playerOrder: store.newGameReducer.playerOrder,
      currentPLayer: store.newGameReducer.currentPLayer,
      turns: store.newGameReducer.turns,
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
    fetchAddPlayer: (player) => dispatch(fetchAddPlayer(player)),
    updateselectedPlayers: (player) => { dispatch({type: 'UPDATE_SELECTED_PLAYERS', payload: player})}
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelectionContainer)