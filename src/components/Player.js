import React from 'react'
import { connect } from 'react-redux';
import ScoreContainer from '../containers/ScoreContainer'
import { deletePlayer } from '../actions/fetchDeletePlayer'

const Player = (props) => {

    console.log('Player component', props.player)
    let player = props.players.find(function (element) { 
        console.log(element.id, props.match.params.id); 
        return `${element.id}` === props.match.params.id;  });

        const onDelete = () => {
            props.deletePlayer(player.id)
        }

         if (player) {
            return (
                <div>
                    <li>
                        Name: {player.name} - Wins: {player.wins} - Loses: {player.loses} <button onClick= {onDelete} >Delete</button>
                    </li>
                    <ScoreContainer />
                </div>
            )

         } else {
             return (
                 <div></div>
             )
         }

} 


export default connect(null, {deletePlayer}) (Player)