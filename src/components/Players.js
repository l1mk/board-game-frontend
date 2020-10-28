import React from 'react';

//players component to render all players created on the game inside the records page

class Players extends React.Component {
    //console.log('players component', props);
    
    constructor(props){
        super()
        let state = []
            props.players.map((player) => {
            let newPlayer = {name: player.name, id: player.id, wins: player.wins, loses: player.loses, counter: 0}
            state.push(newPlayer)
            })
        //console.log(props.players, state)
        this.state = {players: state}
    }
    
    vote = (e, id) => {
        let votedPlayer = this.state.players.find(player => {
            if (player.id === id) {
            console.log(player.name)
            return player
            }  
        }) 
        if (votedPlayer.counter === 0){
            votedPlayer.counter = 1 
            console.log(votedPlayer.counter)
        }  else if (votedPlayer.counter === 1) {
            votedPlayer.counter = 0
            console.log(votedPlayer.counter)
        }
    this.setState({...this.state})
    }

    render (){
        //console.log('render',this.props.players, this.state)
    return (
        <div className= "minicontainer">
            <div className="text ">
            <h4>Player Records </h4>
            {this.state.players.map(player => <li key={player.id}>
            Name: {this.props.capitalize(player.name)} - Wins: {player.wins} - Loses: {player.loses}<span>. . . . . .</span>
            <button className="button" onClick={() => this.props.fetchDeletePlayer(player.id)}>X</button>
            <button className="button" name={player.name} onClick={(e, id = player.id) => this.vote(e, id)}>{player.counter}</button>
            </li>)}

            </div>
        </div>
    );
            }
}

export default Players