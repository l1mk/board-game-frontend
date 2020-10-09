import React from 'react';
import { NavLink } from 'react-router-dom';

//newGame component
class NewGame extends React.Component {
  
    state = {
      playerSelected : [
          {player1: {name: "AI1"},
          player2: {name: "AI2"},
          player3: {name:"AI3"},
          player4: {name:"AI4"}},
      ],
      ready: false
    }
    gameReady = () => {
      if (this.state.ready === true){
          return (
            <div className="link">
            <li><NavLink to="/player-selection">NEXT</NavLink></li>
            </div>
          )
      }
    }

    changeHandler = (e) => {
        //console.log("player name", {[e.target.name]: {name: e.target.value}} )
        let player = {[e.target.name]: {name: e.target.value}}
        let state = this.state.playerSelected[0]
        let updatedPlayer = Object.assign(state, player)
        this.setState({ playerSelected: [...this.state.playerSelected, {updatedPlayer}]})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.selectPlayers(this.state.playerSelected[0])
        this.setState({ 
          playerSelected : [
            {player1: {name: "AI1"},
            player2: {name: "AI2"},
            player3: {name:"AI3"},
            player4: {name:"AI4"}},
        ] , ready: true
        })
    }

  render(){
    //console.log('new game player selection render console')
    return (
      <div>
          <form onSubmit={this.submitHandler}>
             <h3>Select Players:</h3>
            <label>- Player 1:</label> 
            <div className ="dropdown">
             <select name="player1" onChange={this.changeHandler}>
                 <option value = "AI1">CPU</option>
                 <option value = "player1">Player</option>
             </select><br></br>
             </div>
             <label>- Player 2:</label>
             <div className ="dropdown">
             <select name="player2" onChange={this.changeHandler}>
                 <option value = "AI2">CPU</option>
                 <option value = "player2">Player</option>
             </select><br></br>
             </div>
             <label>- Player 3:</label> 
             <div className ="dropdown">
             <select name="player3" onChange={this.changeHandler}>
                 <option value = "AI3">CPU</option>
                 <option value = "player3">Player</option>
             </select><br></br>
             </div>
             <label>- Player 4:</label> 
             <div className ="dropdown">
             <select name="player4" onChange={this.changeHandler}>
                 <option value = "AI4">CPU</option>
                 <option value = "player4">Player</option>
             </select><br></br>
             </div>
             <input className="submitBttn" type = "submit" value = "Submit"></input>
          </form><br></br>
          {this.gameReady()}
        <div>
        </div>
        
      </div>


    );
  }
}
 
export default (NewGame)