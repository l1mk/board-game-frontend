import React from 'react';

//players component to render all players created on the game inside the records page
function Players(props) {

    //console.log('players component', props);

    return (
        <div className= "minicontainer">
            <div className="text ">
            <h4>Player Records </h4>
            {props.players.map(player => <li key={player.id}>
                Name: {props.capitalize(player.name)} - Wins: {player.wins} - Loses: {player.loses}<span>. . . . . .</span> <button className="button" onClick={() => props.fetchDeletePlayer(player.id)}>X</button>
            </li>)}
            </div>
        </div>
    );
}

export default Players