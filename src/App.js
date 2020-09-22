import React from 'react';
import PlayerContainer from './containers/PlayerContainer';

class App extends React.Component {



  render(){
    console.log('app render console', this.props.players)
    return (
      <div className="App">
        <h1>App</h1>
        < PlayerContainer />
      </div>
    );
  }
}

export default (App)
