import React from 'react';
import Games from '../components/Games';

class GamesContainer extends React.Component {

  render(){
    console.log('games container render console', this.props)
    return (
      <div>
          <h1>Games Container</h1>
          <Games games = {this.props.games} fetchDeleteGame = {this.props.fetchDeleteGame} />
      </div>
    );
  }
}

export default (GamesContainer)