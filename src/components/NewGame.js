import React from 'react';
import PlayerInput from './PlayerInput';

//newGame component
class NewGame extends React.Component {
  
    state = {
        player1: "AI1",
        player2: "AI2",
        player3: "AI3",
        player4: "AI4"
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        console.log('submit new player')
    }

  render(){
    console.log('about render console')
    return (
      <div>
          <form onSubmit={this.submitHandler}>
             <h3>Select Players:</h3>
            <label>- Player 1:</label> 
             <select name="player1" onChange={this.changeHandler}>
                 <option value = "AI1">CPU</option>
                 <option value = "player1">Player</option>
             </select><br></br>
             <label>- Player 2:</label> 
             <select name="player2" onChange={this.changeHandler}>
                 <option value = "AI2">CPU</option>
                 <option value = "player2">Player</option>
             </select><br></br>
             <label>- Player 3:</label> 
             <select name="player3" onChange={this.changeHandler}>
                 <option value = "AI3">CPU</option>
                 <option value = "player3">Player</option>
             </select><br></br>
             <label>- Player 4:</label> 
             <select name="player4" onChange={this.changeHandler}>
                 <option value = "AI4">CPU</option>
                 <option value = "player4">Player</option>
             </select><br></br>
             <input type = "submit" value = "Continue"></input>
          </form>
      </div>
    );
  }
}

 

export default (NewGame)