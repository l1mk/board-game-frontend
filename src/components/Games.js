import React from 'react';

//game list for records page
function Games(props) {

    //console.log('games component', props);

    return (
        <div className=" minicontainer">
            <div className="text ">
            <h4>Games Played:</h4>
            {props.games.map(game => <div key={game.id}>
                <span className = "title" >SESSION: {game.id} / TURNS: {game.turns} </span><br></br>
                <span>- PLAYER1:   {props.capitalize(game.player1)}   /   {props.capitalize(game.pokemon1)}   - PLAYER2: {props.capitalize(game.player2)} / {props.capitalize(game.pokemon2)} <br></br>- PLAYER3: {props.capitalize(game.player3)}/ {props.capitalize(game.pokemon3)} - PLAYER4: {props.capitalize(game.player4)}/ {props.capitalize(game.pokemon4)} </span>
                <button className="button" onClick={() => props.fetchDeleteGame(game.id)}>ERASE</button>
                </div>
            )}
            </div>
        </div>
    );
}

export default Games