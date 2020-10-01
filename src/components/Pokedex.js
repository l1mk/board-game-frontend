import React from 'react';

//character list and description for pokedex page
function Pokedex(props) {

    console.log('pokedex component', props);

    return (
        <div>
            <h5>Character List </h5>
            {props.characters.map(character => <li key={character.id}>
                {character.pokemon} - ATK: {character.attack} - DEF: {character.defense} - SPD: {character.speed} - LCK: {character.luck}
            </li>)}
        </div>
    );
}

export default Pokedex