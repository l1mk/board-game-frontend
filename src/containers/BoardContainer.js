import React from 'react';
import Board from '../components/Board';
import Player from '../components/Player';
import pokeball from '../images/pokeball.jpg';

//board container with the styles that are pased to the board and the players, props are coming from game container
class BoardContainer extends React.Component {

  render(){
    //console.log('Board container render console', this.props)
    return (
      <div>
            <div style= {{
        position: 'relative',
        height: '200px',
        width: '840px',
        marginTop: '300px',
        marginLeft: '350px',
        marginRight: 'auto',
        }}>
            < Board />
            {this.props.playerOrder.map((player, index) =>  
                <div key ={index}>
                < Player position = {player.position} url = {player.url}/>
                </div>
               )}
            < Player position = {[-40, 0]} url = {pokeball} />
          </div>
      </div>
    );
  }
}

export default (BoardContainer)