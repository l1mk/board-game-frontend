import React from 'react';

//order selection after rolling the dice
class OrderSelection extends React.Component {

        state = {rolls : []}

     rollDice = () => {
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
        this.setState({ rolls: [roll1, roll2, roll3, roll4] }) 
   
        let player1 = {order: roll1, name: this.props.selectedPlayers[0].player1.name, character: this.props.characters[0]}
        let player2 = {order: roll2, name: this.props.selectedPlayers[0].player2.name, character: this.props.characters[1]}
        let player3 = {order: roll3, name: this.props.selectedPlayers[0].player3.name, character: this.props.characters[2]}
        let player4 = {order: roll4, name: this.props.selectedPlayers[0].player4.name, character: this.props.characters[3]}
        
        this.orderPlayers(player1, player2, player3, player4 )
    }

    orderPlayers = (player1, player2, player3, player4 ) => {
        console.log("sorting players function",this.props) 
        let playerOrder = [player1, player2, player3, player4]
        let playerOrdered = playerOrder.sort((a, b)=> (a.order > b.order) ? 1 : -1)
        this.props.updatePlayersOrder(playerOrdered)
    }

    render(){
        console.log('order selection component', this.props, this.state)
        return (
            <div>
                <button onClick= {()=>this.rollDice()} >Roll Dice</button><br></br>
                <div>
                    <li>Player1: {this.state.rolls[0]}<br></br></li> 
                    <li>Player2: {this.state.rolls[1]}<br></br></li> 
                    <li>Player3: {this.state.rolls[2]}<br></br></li> 
                    <li>Player4: {this.state.rolls[3]}<br></br></li> 
               </div>
            </div>
        )
    }
}

export default OrderSelection