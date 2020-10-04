import React from 'react';
import BoardContainer from './BoardContainer';
import UIContainer from './UIContainer';
import { connect } from 'react-redux';


class Game extends React.Component {

  render(){
    console.log('Game container render console', this.props)
    return (
      <div>
          <h1>Game Container</h1>
         <BoardContainer playerOrder = {this.props.playerOrder}/>
         <UIContainer playerOrder = {this.props.playerOrder} />
      </div>
    );
  }
}

 
const mapStateToProps = (store) => {
    return {
      playerOrder: store.newGameReducer.playerOrder,
      currentPLayer: store.newGameReducer.currentPLayer,
      turns: store.newGameReducer.turns,
    }
  }

export default connect(mapStateToProps)(Game)