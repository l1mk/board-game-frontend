import React from 'react'
import Player from './Player'

const Players = (props) => ( 
    <div>
    {console.log('Players component', props)}
    {props.players.map( player =>  <div key= {player.id} ><Player player = {player} /></div>   )}
    </div>
)

export default Players