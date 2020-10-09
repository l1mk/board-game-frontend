import React from 'react';
import Games from '../components/Games';

//games container with props from records to pass down and show the all games played
class GamesContainer extends React.Component {

  render(){
    //console.log('games container render console', this.props)
    return (
      <div id="games">
          <Games games = {this.props.games} fetchDeleteGame = {this.props.fetchDeleteGame} capitalize={this.props.capitalize} />
      </div>
    );
  }
}

export default (GamesContainer)