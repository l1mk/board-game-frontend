import React from 'react';
import NewGame from '../components/NewGame'
import { connect } from 'react-redux';

class NewGameContainer extends React.Component {

  render(){
    console.log('new game container render console', this.props)
    return (
      <div>
        <h1>NewGame Container</h1>
        <NewGame selectPlayers = {this.props.selectPlayers} />
      </div>
    );
  }
}

 
const mapDispatchToProps = dispatch => {
  return {
    selectPlayers: (players) => { dispatch({type: 'SELECTED_PLAYERS', payload: players})}
  }
}


export default connect(null, mapDispatchToProps) (NewGameContainer)