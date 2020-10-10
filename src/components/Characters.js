import React from 'react';

//Characters list inside the UI
function Characters(props) {

    //console.log('characters UI component', props);

    return (
        <div>
            <div className="UI"><span id="turn">TURNS: {props.turns}</span></div>
            <div 
            style = {{
                textAlign: 'left',
                position: 'absolute',
                left: '16px',
                top: '80px'
            }}>
            <h4>PLAYERS</h4>
           { props.playerOrder.map((player, index) => 
                            <div key = {index}>
                               <div  className='characters'>
                                    <li>{props.capitalize(player.name)}:</li>
                                    <h5>{props.capitalize(player.character.pokemon)}</h5>
                                    <div className='stats'>
                                    <span>ATK: {player.character.attack} - DEF: {player.character.defense}</span><br></br> 
                                    <span>SPD: {player.character.speed} - LCK: {player.character.luck} </span><br></br>
                                    <span>BATTLEPOINTS: {player.character.battlepoints} </span><br></br>
                                    <span>EXPERIENCE: {player.character.experience} </span><br></br>
                                    </div>
                               </div>
                            </div>)}
            </div>
        </div>
    );
}

export default Characters