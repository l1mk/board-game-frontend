import React from 'react';
import BoardContainer from './BoardContainer';
import UIContainer from './UIContainer';
import { connect } from 'react-redux';


class Game extends React.Component {

  render(){
    console.log('Game container render console', this.props)
    return (
      <div>
          <h1>Game Container</h1>
         <BoardContainer playerOrder = {this.props.playerOrder} currentPlayer = {this.props.currentPlayer} updateCurrentPlayer ={ this.props.updateCurrentPlayer} updatePlayer={this.props.updatePlayer}/>
         <UIContainer playerOrder = {this.props.playerOrder} currentPlayer = {this.props.currentPlayer} updateCurrentPlayer ={ this.props.updateCurrentPlayer} updatePlayer={this.props.updatePlayer}/>
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
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Game)