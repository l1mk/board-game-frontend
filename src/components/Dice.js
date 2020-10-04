import React from 'react';
import dice1 from '../images/dice1.png';
import dice2 from '../images/dice2.png';
import dice3 from '../images/dice3.png';
import dice4 from '../images/dice4.png';
import dice5 from '../images/dice5.png';
import dice6 from '../images/dice6.png';

//Characters list inside the UI

class Dice extends React.Component {

    constructor(){
        super()
        this.state = {url : {dice1}}
    }
    
    rollDice = () => {
      let dice =  1 + Math.floor(Math.random() * 6)
      if (dice === 1){
          console.log(dice)
          this.setState({url: dice1})
      } else if (dice === 2){
        console.log(dice)
        this.setState({url: dice2})
      } else if (dice === 3){
        console.log(dice)
        this.setState({url: dice3})
      } else if (dice === 4){
        console.log(dice)
        this.setState({url: dice4})
      } else if (dice === 5){
        console.log(dice)
        this.setState({url: dice5})
      } else if (dice === 6){
        console.log(dice)
        this.setState({url: dice6})
      }
    }
    render (){
        console.log('dice component', this.state);
        return (
            <div>
                <button onClick={this.rollDice}>PLAY</button>
                <div
                    style = {{
                        position: 'absolute',
                        right: '16px',
                        bottom: '80px',
                        backgroundImage: `url(${this.state.url})`,
                        width: '100px',
                        height: '100px',
                    }}
                />
            </div>
        );
    }
}

export default Dice