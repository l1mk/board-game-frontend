import React from 'react'


const Pokedex = (props) => ( 
    <div>
        {console.log('inside pokedex render', props)}
    {props.characters.map( character =>  
        <li key= {character.id} > 
        {character.pokemon} - ATK : {character.attack} - DEF : {character.defense} - SPD : {character.speed} - LCK : {character.luck}
        </li>   )}

    </div>
)

export default Pokedex