import React from 'react'

//character list and description for pokedex page
const Pokedex = (props) => {

    console.log('pokedex component', props)

    return (
    <div>
        {props.characters.map( character =>  
        <li key= {character.id} > 
        {character.pokemon} - ATK : {character.attack} - DEF : {character.defense} - SPD : {character.speed} - LCK : {character.luck}
        </li>   )}
    </div>
    )}

export default Pokedex