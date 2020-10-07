import React from 'react';
import Players from '../components/Players';

class PlayersContainer extends React.Component {

  render(){
    console.log('player container render console', this.props)
    return (
      <div>
        <h1>Player Container</h1>
      <Players players = {this.props.players} fetchDeletePlayer = {this.props.fetchDeletePlayer} capitalize={this.props.capitalize}/>
      </div>
    );
  }
}

export default (PlayersContainer)
