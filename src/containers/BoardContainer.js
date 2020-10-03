import React from 'react';
import Board from '../components/Board';
import Player from '../components/Player';
import pikachu from '../images/pikachu.png';
import jigglypuff from '../images/jigglypuff.png';

class BoardContainer extends React.Component {

  render(){
    console.log('Board container render console')
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
          < Player position = {[0,0]} url = {jigglypuff} />
          < Player position = {[100,25]} url = {pikachu} />
          </div>
      </div>
    );
  }
}

export default (BoardContainer)