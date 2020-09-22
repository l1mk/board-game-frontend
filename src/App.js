import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from './actions/fetchPlayersActions'
import PlayerInput from './components/PlayerInput';
import Players from './components/Players';



class App extends React.Component {

  componentDidMount(){
    console.log('component didmount console', this.props)
    this.props.fetchPlayers()
  }

  render(){
    console.log('app render console', this.props.players)
    return (
      <div className="App">
        <h1>App</h1>
        < PlayerInput />
        < Players players = {this.props.players}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(App)
