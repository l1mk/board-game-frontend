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
          width: '800px',
          backgroundColor: 'grey',
          border: '1px solid black',
          margin: '20px auto'
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