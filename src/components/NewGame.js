import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//newGame component
class NewGame extends React.Component {
  
    state = {
        player1: "AI1",
        player2: "AI2",
        player3: "AI3" ,
        player4: "AI4",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    submitHandler = (e) => {
        console.log('submit new player', this.state)
        e.preventDefault()
        this.props.selectPlayers(this.state)
        this.setState({ 
            player1: "AI1",
            player2: "AI2",
            player3: "AI3" ,
            player4: "AI4",
        })
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
             <input type = "submit" value = "Submit"></input>
          </form>
          <NavLink to="/selection"> Continue to... </NavLink>
        <div>
        </div>
        
      </div>


    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      selectPlayers: (players) => { dispatch({type: 'SELECTED_PLAYERS', selectedPlayers: players})}
    }
  }
 

export default connect(null, mapDispatchToProps) (NewGame)