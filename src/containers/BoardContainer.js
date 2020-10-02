import React from 'react';
import Board from '../components/Board';


class BoardContainer extends React.Component {

  render(){
    console.log('Board container render console')
    return (
      <div>
          <h1>Board Container</h1>
          < Board />
      </div>
    );
  }
}

 

export default (BoardContainer)