import React from 'react'
import { Link } from 'react-router-dom'

const Players = (props) => {

    return (
    <div>
    {console.log('Players component', props)}
    {props.players.map( player =>  
        <li key= {player.id} > 
           Name: {player.name} - Wins: {player.wins} - Loses: {player.loses} <button onClick= {() => props.fetchDeletePlayer} >Delete</button>
        </li>   )}
    </div>
    )
}

export default Players