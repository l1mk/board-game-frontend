import React from 'react';
import map from '../images/map.png';

//Board rendering and game start
function Board() {

  //console.log('board render console');

    const tiles = []
    let id = 0

    for (let y=0; y < 200; y = y + 40){
        const row = []
        for (let x=0; x < 800; x = x + 40){
            row.push({ x, y, id: id++})
        }
        tiles.push(row)
    }
    //console.dir(tiles)

  return (
    <div className = "mapcontainer">    
        <div style= {{
        position: 'relative',
        height: '205px',
        width: '820px',
        backgroundImage: `url(${map})`,
        }}/>
    </div>

  );
}

export default Board