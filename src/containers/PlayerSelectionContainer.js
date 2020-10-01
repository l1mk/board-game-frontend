import React from 'react';
import { connect } from 'react-redux';
import PlayerSelection from '../components/PlayerSelection';


class PlayerSelectionContainer extends React.Component {

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  render(){
    console.log('Selection container render console', this.props)
    return (
      <div>
          <h1>Selection Container</h1>
          <PlayerSelection selectedPlayers = {this.props.selectedPlayers} />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
      selectedPlayers: store.newGameReducer.selectedPlayers,
    }
  }

  export default connect(mapStateToProps)(PlayerSelectionContainer)
 