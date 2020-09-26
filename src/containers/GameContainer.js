import React from 'react';
import Games from '../components/Games';


class GameContainer extends React.Component {

  render(){
    console.log('game container render console', this.props)
    return (
      <div>
          <h1>Game Container</h1>
      </div>
    );
  }
}

 

export default (GameContainer)