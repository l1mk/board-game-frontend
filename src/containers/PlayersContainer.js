import React from 'react';
import Players from '../components/Players';

//basis players container with info pass drown from records container
class PlayersContainer extends React.Component {

  render(){
    //console.log('player container render console', this.props)
    return (
      <div>
      <Players players = {this.props.players} fetchDeletePlayer = {this.props.fetchDeletePlayer} capitalize={this.props.capitalize}/>
      </div>
    );
  }
}

export default (PlayersContainer)
