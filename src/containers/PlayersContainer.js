import React from 'react';
import Players from '../components/Players';

//basis players container with info pass drown from records container
class PlayersContainer extends React.Component {

  players = () => {
    if (this.props.players.length !== 0){
    //console.log('container props not empty')
    return (
    <Players players = {this.props.players} fetchDeletePlayer = {this.props.fetchDeletePlayer} capitalize={this.props.capitalize}/>
    )
  }
}

  render(){
    //console.log('player container render console', this.props)
    return (
      <div id="players">
      {this.players()}
      </div>
    );
  }
}

export default (PlayersContainer)
