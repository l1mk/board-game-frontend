import React from 'react';

//Board rendering and game start
function Board() {

  console.log('board render console');

    const tiles = []
    let id = 0

    for (let y=0; y < 500; y = y + 25){
        const row = []
        for (let x=0; x < 500; x = x + 25){
            row.push({ x, y, id: id++})
        }
        tiles.push(row)
    }
    console.dir(tiles)

  //const squares = []
  //for (let i=0; i<20; i++){
  //    squares.push(<div style={{relative: 'absolute', border: 'solid 1px black', height: 23, width: 23}}>row {i+1}</div>)
  //}

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
                            height: 23,
                            width: 23
                        }}
                    />
                ))}
            </div>
        ))}
    </div>
  );
}

export default Board