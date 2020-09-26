import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPlayers } from '../actions/fetchAllPlayers';
import { fetchAllGames } from '../actions/fetchAllGames';
import { fetchDeletePlayer } from '../actions/fetchDeletePlayer';
import { fetchDeleteGame } from '../actions/fetchDeleteGame';
import PlayerContainer from './PlayerContainer';
import GameContainer from './GameContainer';


class RecordsContainer extends React.Component {

  componentDidMount(){
    console.log('component didmount for Records console', this.props)
    this.props.fetchAllPlayers()
    this.props.fetchAllGames()
  }

  render(){
    console.log('records container render console', this.props)
    return (
      <div>
        <PlayerContainer players = {this.props.players} fetchDeletePlayer = {this.props.fetchDeletePlayer} />
        <GameContainer games = {this.props.games} fetchDeleteGame = {this.props.fetchDeleteGame} />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    players: store.playersReducer.players,
    loadingPlayer: store.playersReducer.loadingPlayer,
    games: store.gamesReducer.games,
    loadingGame: store.gamesReducer.loadingGame,
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchAllPlayers: () => dispatch(fetchAllPlayers()),
    fetchAllGames: () => dispatch(fetchAllGames()),
    fetchDeleteGame: () => dispatch(fetchDeleteGame()),
    fetchDeletePlayer: () => dispatch(fetchDeletePlayer())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer)
