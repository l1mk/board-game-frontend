import React from 'react';
import { Route, Switch} from 'react-router-dom'
import NavContainer from './containers/NavContainer';
import PokedexContainer from './containers/PokedexContainer';
import RecordsContainer from './containers/RecordsContainer';
import AboutContainer from './containers/AboutContainer';
import NewGameContainer from './containers/NewGameContainer';
import PlayerSelectionContainer from './containers/PlayerSelectionContainer';
import GameContainer from './containers/GameContainer';
import HomeContainer from './containers/HomeContainer';
import start from './images/start.png'


//Main app component that setup all pages routes
class App extends React.Component {

  render(){
    //console.log('app render console')
    return (
      <div className="App">
        <button className="startBttn" onClick={()=> window.location.href='http://localhost:3001/newgame'}><img alt='start button' src={start} width={'100px'} height={'38px'} /></button>
        <NavContainer />
        <Switch>
        < Route path='/home' component={HomeContainer} />
        < Route path='/pokedex' component={PokedexContainer} />
        < Route path='/records' component={RecordsContainer} />
        < Route path='/about' component={AboutContainer} />
        < Route path='/newgame' component={NewGameContainer} />
        < Route path='/player-selection' component={PlayerSelectionContainer} />
        < Route path='/game' component={GameContainer} />
        </Switch>
      </div>
    );
  }
}

export default (App)
