import React from 'react';
import Players from '../components/Players';



class PlayerContainer extends React.Component {


  render(){
    console.log('player container render console', this.props)
    return (
      <div>
        <h1>Player Container</h1>

      </div>
    );
  }
}


export default (PlayerContainer)
