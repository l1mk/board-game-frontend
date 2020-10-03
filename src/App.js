import React from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom'
import NavContainer from './containers/NavContainer';
import PokedexContainer from './containers/PokedexContainer';
import RecordsContainer from './containers/RecordsContainer';
import AboutContainer from './containers/AboutContainer';
import NewGameContainer from './containers/NewGameContainer';
import PlayerSelectionContainer from './containers/PlayerSelectionContainer';
import BoardContainer from './containers/BoardContainer';

class App extends React.Component {



  render(){
    console.log('app render console')
    return (
      <div className="App">
        <h1>App</h1>
        <button onClick={()=> window.location.href='http://localhost:3001/newgame'}>Start Game</button>
        <NavContainer />
        <Switch>
        < Route path='/pokedex' component={PokedexContainer} />
        < Route path='/records' component={RecordsContainer} />
        < Route path='/about' component={AboutContainer} />
        < Route path='/newgame' component={NewGameContainer} />
        < Route path='/player-selection' component={PlayerSelectionContainer} />
        < Route path='/board' component={BoardContainer} />
        </Switch>
      </div>
    );
  }
}

export default (App)
