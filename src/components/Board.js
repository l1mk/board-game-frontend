import React from 'react';

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
    <div 
        style ={{
            position: 'absolute',
        }} 
    >
        {tiles.map((row, y) => (
            <div key = {y} style = {{display: 'flex' }}>
                {row.map((tile, x ) => (
                    <div key = {x}
                        style ={{
                            border: '1px solid white',
                            height: 38,
                            width: 38
                        }}
                    />
                ))}
            </div>
        ))}
    </div>
  );
}

export default Board