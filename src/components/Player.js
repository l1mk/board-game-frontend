import React from 'react'

const Player = (props) => {

    console.log('Player component', props.player)
    let player = props.players.find(function (element) { 
        console.log(element.id, props.match.params.id); 
        return `${element.id}` === props.match.params.id;  });

         if (player) {
            return (
                <div>
                    <li>
                        Name: {player.name} - Wins: {player.wins} - Loses: {player.loses}

                    </li>
                </div>
            )

         } else {
             return (
                 <div></div>
             )
         }

} 



export default Player