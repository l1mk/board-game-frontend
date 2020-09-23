import React from 'react'
import { Link } from 'react-router-dom'

const Players = (props) => ( 
    <div>
    {console.log('Players component', props)}
    {props.players.map( player =>  
        <li key= {player.id} > 
            <Link to={`/players/${player.id}`}>{player.name}</Link>
        </li>   )}
    </div>
)

export default Players