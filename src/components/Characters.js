import React from 'react';

//Characters list inside the UI
function Characters(props) {

    console.log('games component', props);

    return (
        <div>
            <h5>PLAYERS</h5>
           { props.playerOrder.map((player, index) => 
                               <div key = {index}>
                               <h4>{props.capitalize(player.name)}:</h4>
                               <li>{player.character.pokemon}</li>
                               <span>- ATK: {player.character.attack} - DEF: {player.character.defense} - SPD: {player.character.speed} - LCK: {player.character.luck} </span>
                               <span> BATTLEPOINTS: {player.character.battlepoints} </span>
                               <span> EXPERIENCE: {player.character.experience} </span>
                               </div>)}
        </div>
    );
}

export default Characters