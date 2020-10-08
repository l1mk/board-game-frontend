import React from 'react';

//players component to render all players created on the game inside the records page
function Players(props) {

    //console.log('players component', props);

    return (
        <div>
            <h5>Player Records </h5>
            {props.players.map(player => <li key={player.id}>
                               Name: {props.capitalize(player.name)} - Wins: {player.wins} - Loses: {player.loses} <button onClick={() => props.fetchDeletePlayer(player.id)}>Delete</button>
            </li>)}
        </div>
    );
}

export default Players