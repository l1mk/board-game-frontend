import React from 'react';
import pika from '../images/pika.png'

//Player rendering and game start
function Player() {

    let position = [0, 0]

  return (
    <div 
     style = {{
         position: 'absolute',
         top: position[1],
         left: position[0],
         backgroundImage: `url('${pika}')`,
         backgroundPosition: '0 0',
         width: '23px',
         height: '23px'
     }}
    >

    </div>
  );
}

export default Player