import React from 'react'

//players component to render all players on the game inside the records page
const Players = (props) => {

    console.log('players component', props)

    return (
    <div>
    {props.players.map( player =>  
        <li key= {player.id} > 
           Name: {player.name} - Wins: {player.wins} - Loses: {player.loses} <button onClick= {() => props.fetchDeletePlayer} >Delete</button>
        </li>   )}
    </div>
    )}

export default Players