import React from 'react';

//game list for records page
function Games(props) {

    //console.log('games component', props);

    return (
        <div>
            <h5>Games Played:</h5>
            {props.games.map(game => <li key={game.id}>
                <span>SESSION: {game.id} / TURNS: {game.turns} </span><br></br>
                <span>- PLAYER1: {props.capitalize(game.player1)} / {props.capitalize(game.pokemon1)} - PLAYER2: {props.capitalize(game.player2)} / {props.capitalize(game.pokemon2)} - PLAYER3: {props.capitalize(game.player3)}/ {props.capitalize(game.pokemon3)} - PLAYER4: {props.capitalize(game.player4)}/ {props.capitalize(game.pokemon4)} </span>
                <button onClick={() => props.fetchDeleteGame(game.id)}>Delete</button>
            </li>)}
        </div>
    );
}

export default Games