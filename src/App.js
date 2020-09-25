import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavContainer from './containers/NavContainer';
import GameContainer from './containers/GameContainer';
import PokedexContainer from './containers/PokedexContainer';
import RecordsContainer from './containers/RecordsContainer';
import AboutContainer from './containers/AboutContainer'

class App extends React.Component {



  render(){
    console.log('app render console')
    return (
      <div className="App">
        <h1>App</h1>
        <NavContainer />
        <GameContainer />
        <Switch>
        < Route path='/pokedex' component={PokedexContainer} />
        < Route path='/records' component={RecordsContainer} />
        < Route path='/about' component={AboutContainer} />
        </Switch>
      </div>
    );
  }
}

export default (App)
