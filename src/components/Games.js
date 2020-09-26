import React from 'react'

//game list for records page
const Games = (props) => {

    console.log('games component', props)

    return (
    <div>
        {props.games.map( game =>  
        <li key= {game.id} > 
        Session: {game.id} - PLAYER1 : {game.player1} /PIKACHU - PLAYER2 : {game.player2} /EEVEE - PLAYER3 : {game.player3}/JIGGLYPUFF - PLAYER4 : {game.player4}/TOGEPI <button onClick= {() => props.fetchDeleteGame} >Delete</button>
        </li>   )}
    </div>
    )}

export default Games