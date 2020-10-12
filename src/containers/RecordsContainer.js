import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPlayers } from '../actions/fetchAllPlayers';
import { fetchAllGames } from '../actions/fetchAllGames';
import { fetchDeletePlayer } from '../actions/fetchDeletePlayer';
import { fetchDeleteGame } from '../actions/fetchDeleteGame';
import PlayersContainer from './PlayersContainer';
import GamesContainer from './GamesContainer';

//records page container with all functions to be pass for players and games list
class RecordsContainer extends React.Component {

  componentDidMount(){
    //console.log('component didmount for Records console', this.props)
    this.props.fetchAllPlayers()
    this.props.fetchAllGames()
  }

  capitalize = (str) => {
    if (str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }

  render(){
    //console.log('records container render console', this.props)
    return (
      <div className="main container" id="records">
        <PlayersContainer players = {this.props.players} fetchDeletePlayer = {this.props.fetchDeletePlayer} capitalize = {this.capitalize} />
        <GamesContainer games = {this.props.games} fetchDeleteGame = {this.props.fetchDeleteGame} capitalize = {this.capitalize} />
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
    fetchDeleteGame: (id) => dispatch(fetchDeleteGame(id)),
    fetchDeletePlayer: (id) => dispatch(fetchDeletePlayer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer)
