import React from 'react';
import NewGame from '../components/NewGame'


class NewGameContainer extends React.Component {

  render(){
    console.log('new game container render console')
    return (
      <div className="nav">
        <h1>NewGame Container</h1>
        <NewGame />
      </div>
    );
  }
}

 

export default (NewGameContainer)