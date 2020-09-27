import React from 'react';
import { connect } from 'react-redux';
import Selection from '../components/Selection';


class SelectionContainer extends React.Component {

  render(){
    console.log('Selection container render console', this.props)
    return (
      <div>
          <h1>Selection Container</h1>
          <Selection selectedPlayers = {this.props.selectedPlayers} playerOrder = {this.props.playerOrder} turns = {this.props.turns} currentPLayer = {this.props.currentPLayer}  />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
      selectedPlayers: store.newGameReducer.selectedPlayers,
      playerOrder: store.newGameReducer.playerOrder,
      turns: store.newGameReducer.turns,
      currentPLayer: store.newGameReducer.currentPLayer,
    }
  }

  export default connect(mapStateToProps)(SelectionContainer)
 