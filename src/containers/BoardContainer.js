import React from 'react';
import Board from '../components/Board';


class BoardContainer extends React.Component {

  render(){
    console.log('Board container render console')
    return (
      <div>
          <h1>Board Container</h1>
          <div style= {{
          position: 'relative',
          height: 500,
          width: 500,
          backgroundColor: 'grey',
          border: '1px solid black',
          objectFit: 'fit',
          display: 'flex',
          }}>

          < Board />
          </div>
      </div>
    );
  }
}

export default (BoardContainer)