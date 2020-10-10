import React from 'react';
import { NavLink } from 'react-router-dom';
import jigglypuff from '../images/jigglypuff.png';
import eevee from '../images/eevee.png';
import togepi from '../images/togepi.png';
import pikachu from '../images/pikachu.png';

//order selection after rolling the dice and image import for each pkm
class OrderSelection extends React.Component {

        state = {rolls : [], ready: false}

    gameStart = () => {
        if (this.state.ready === true){
            return (
                <div className="link" >
                <li><NavLink to="/game">START GAME</NavLink></li>
                </div>)
        }
    }
    
     rollDices = () => {
        //console.log("rolling dice")
        let roll1 = 1 + Math.floor(Math.random() * 6)
        let roll2 = 1 + Math.floor(Math.random() * 6)
            if (roll1 === roll2) {
                roll2 = 1 + Math.floor(Math.random() * 6)    
            }
        let roll3 = 1 + Math.floor(Math.random() * 6)
            if (roll3 === roll2 || roll3 === roll1) {
                roll3 = 1 + Math.floor(Math.random() * 6)    
            }
        let roll4 = 1 + Math.floor(Math.random() * 6)
            if (roll4 === roll3 || roll4 === roll2 || roll4 === roll1) {
                roll4 = 1 + Math.floor(Math.random() * 6)    
            }
        this.setState({ rolls: [roll1, roll2, roll3, roll4], ready: true }) 
   
        let player1 = {order: roll1, name: this.props.selectedPlayers[0].player1.name, position: [-40,0], character: this.props.characters[0], url: pikachu, wins: 0, loses: 0}
        let player2 = {order: roll2, name: this.props.selectedPlayers[0].player2.name, position: [-40,0], character: this.props.characters[1], url: eevee,  wins: 0, loses: 0}  
        let player3 = {order: roll3, name: this.props.selectedPlayers[0].player3.name, position: [-40,0], character: this.props.characters[2], url: jigglypuff,  wins: 0, loses: 0}
        let player4 = {order: roll4, name: this.props.selectedPlayers[0].player4.name, position: [-40,0], character: this.props.characters[3], url: togepi,  wins: 0, loses: 0}
        
        this.orderPlayers(player1, player2, player3, player4 )
    }

    orderPlayers = (player1, player2, player3, player4 ) => {
        //console.log("sorting players function",this.props) 
        let playerOrder = [player1, player2, player3, player4]
        let playerOrdered = playerOrder.sort((a, b)=> (a.order > b.order) ? 1 : -1)
        this.props.updatePlayersOrder(playerOrdered)
        //console.log('updating current player to', playerOrdered[0])
        this.props.updateCurrentPlayer(playerOrdered[0])
    }

    render(){
        //console.log('order selection component', this.props, this.state, pikachu)
        return (
            <div className="orderSelection">
           
                <div className="list">
                <h4>PLAYER ORDER SELECTION</h4>
                    <li><span>PLAYER</span> 1...( {this.state.rolls[0]} )<br></br></li> 
                    <li><span>PLAYER</span> 2...( {this.state.rolls[1]} )<br></br></li> 
                    <li><span>PLAYER</span> 3...( {this.state.rolls[2]} )<br></br></li> 
                    <li><span>PLAYER</span> 4...( {this.state.rolls[3]} )<br></br></li> 
                </div>
            <div><button id="rollDices" onClick= {()=>this.rollDices()} ><span></span></button><span id="dices" className="instructions">  . . . . Roll Dices</span><br></br></div>
               {this.gameStart()}
            </div>
        )
    }
}

export default OrderSelection