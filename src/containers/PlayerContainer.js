import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions/fetchPlayersActions';
import { Route } from 'react-router-dom'
import PlayerInput from '../components/PlayerInput';
import Players from '../components/Players';
import Player from '../components/Player'


class PlayerContainer extends React.Component {

  componentDidMount(){
    console.log('component didmount console', this.props)
    this.props.fetchPlayers()
  }

  render(){
    console.log('player container render console', this.props.players)
    return (
      <div className="App">
        <h1>Player Container</h1>
        < Route path='/players/new' component={PlayerInput} />
        < Route path='/players/:id' render={(routerProps)=> < Player {...routerProps} players = {this.props.players}/>}  />
        < Route exact path='/players' render={()=> < Players players = {this.props.players}/>}  />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchPlayers: () => dispatch(fetchPlayers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
