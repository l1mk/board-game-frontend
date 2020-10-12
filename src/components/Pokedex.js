import React from 'react';
import pikachu from '../images/pokedex_pikachu.png'
import eevee from '../images/pokedex_eevee.png'
import jigglypuff from '../images/pokedex_jigglypuff.png'
import togepi from '../images/pokedex_togepi.png'


//character list and description for pokedex page
function Pokedex(props) {

    //console.log('pokedex component', props);

    const imageRender = (pokemon) => {
        if (pokemon === "pikachu"){
            return (
                <img className='image' alt={'pikachu'} src={pikachu} width={'320'} height={'180'} />
            )
        }
        if (pokemon === "eevee"){
            return (
                <img className='image' alt={'eevee'} src={eevee} width={'320'} height={'180'} />
            )
        }
        if (pokemon === "jigglypuff"){
            return (
                <img className='image' alt={'jigglypuff'} src={jigglypuff} width={'320'} height={'180'} />
            )
        }
        if (pokemon === "togepi"){
            return (
                <img className='image' alt={'togepi'} src={togepi} width={'320'} height={'180'} />
            )
        }
    }

    return (
        <div className="text">
            <h4>Character List </h4>
            {props.characters.map(character => 
                <div key={character.id} style={{display:'flex', marginBottom: '10px'}}>
                {imageRender(character.pokemon)}
                <div style={{textAlign: 'center', marginTop: '40px'}}>
                <span className="title"> STATS </span><br></br>
                - ATK: {character.attack}<br></br>
                - DEF: {character.defense}<br></br> 
                - SPD: {character.speed}<br></br> 
                - LCK: {character.luck}<br></br> 
                </div>
            </div>)}
        </div>
    );
}

export default Pokedex