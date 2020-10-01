import React from 'react';

//order selection after rolling the dice
class OrderSelection extends React.Component {

    state = {rolls: []}
    
     rollDice = () => {
        let a = 1 + Math.floor(Math.random() * 6)
        let b = 1 + Math.floor(Math.random() * 6)
            if (a === b) {
            b = 1 + Math.floor(Math.random() * 6)    
            }
        let c = 1 + Math.floor(Math.random() * 6)
            if (c === b || c === a) {
            c = 1 + Math.floor(Math.random() * 6)    
            }
        let d = 1 + Math.floor(Math.random() * 6)
            if (d === b || d === a || d === c) {
            d = 1 + Math.floor(Math.random() * 6)    
            }
        console.log(a, b, c, d) 
        this.setState ({rolls: [a, b, c , d]  })
        this.orderPlayers()
    }

    orderPlayers = () => {
        console.log("order player function", this.state)
        
    }

    render(){
        console.log('order selection component', this.props, this.state)
        return (
            <div>
                <button onClick= {()=>this.rollDice()} >Roll Dice</button><br></br>
               - Player1: {this.state.rolls[0]}<br></br>
               - Player2: {this.state.rolls[1]}<br></br>
               - Player3: {this.state.rolls[2]}<br></br>
               - Player4: {this.state.rolls[3]}<br></br>
            </div>
        )
    }
}

export default OrderSelection