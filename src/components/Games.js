import React from 'react';

//game list for records page
function Games(props) {

    console.log('games component', props);

    return (
        <div>
            <h5>Games Played:</h5>
            {props.games.map(game => <li key={game.id}>
                <span>SESSION: {game.id} </span><br></br>
                <span>- PLAYER1: {game.player1} /PIKACHU - PLAYER2: {game.player2} /EEVEE - PLAYER3: {game.player3}/JIGGLYPUFF - PLAYER4: {game.player4}/TOGEPI </span>
                <button onClick={() => props.fetchDeleteGame(game.id)}>Delete</button>
            </li>)}
        </div>
    );
}

export default Games