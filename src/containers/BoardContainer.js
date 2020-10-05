import React from 'react';
import Board from '../components/Board';
import Player from '../components/Player';
import pokeball from '../images/pokeball.jpg';

class BoardContainer extends React.Component {

  render(){
    console.log('Board container render console', this.props)
    return (
      <div>
          <h1>Board Container</h1>
          <div style= {{
          position: 'relative',
          height: '500px',
          width: '500px',
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
          < Player position = {[-25, 0]} url = {pokeball} />
          </div>
      </div>
    );
  }
}

export default (BoardContainer)