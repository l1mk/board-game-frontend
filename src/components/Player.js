import React from 'react'


const Player = (props) => ( 
    <div>
    {console.log('Player component', props.player)}
    <h1>Player: </h1>
    {props.player.name}
    <h3>Bio: </h3>
    {props.player.bio}
    <h3>Favorite: </h3>
    {props.player.favorite}
    <h3>Wins: </h3>
    {props.player.wins}
    <h4>Loses: </h4>
    {props.player.loses}
    </div>
)

export default Player