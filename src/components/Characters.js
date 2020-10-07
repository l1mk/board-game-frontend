import React from 'react';

//Characters list inside the UI
function Characters(props) {

    console.log('characters UI component', props);

    return (
        <div 
            style = {{
                textAlign: 'right',
                position: 'absolute',
                right: '16px',
                top: '80px'
        }}>
            <h5>TURNS: {props.turns}</h5>

            <h5>PLAYERS</h5>
           { props.playerOrder.map((player, index) => 
                               <div key = {index}>
                               <h4>{props.capitalize(player.name)}:</h4>
                               <li>{props.capitalize(player.character.pokemon)}</li>
                               <span>ATK: {player.character.attack} - DEF: {player.character.defense}</span><br></br> 
                               <span>SPD: {player.character.speed} - LCK: {player.character.luck} </span><br></br>
                               <span>- BATTLEPOINTS: {player.character.battlepoints} </span><br></br>
                               <span>- EXPERIENCE: {player.character.experience} </span><br></br>
                               </div>)}
        </div>
    );
}

export default Characters