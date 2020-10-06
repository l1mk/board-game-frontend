import React from 'react';
import dice1 from '../images/dice1.png';
import dice2 from '../images/dice2.png';
import dice3 from '../images/dice3.png';
import dice4 from '../images/dice4.png';
import dice5 from '../images/dice5.png';
import dice6 from '../images/dice6.png';

//Characters list inside the UI

class Dice extends React.Component {

    constructor(props){
      console.log('dice constructor', props)
        super()
        this.state = {url : {dice1}, counter: 0}
    }

    moving = (updatedPlayer) => {
      console.log('player moving')
      this.props.updatePlayer(updatedPlayer)
    }

    updatePositionOfCurrent = (currentPlayer, dice) => {
      console.log('update position for', currentPlayer, dice)
      let currentX = currentPlayer.position[0];
      let currentY = currentPlayer.position[1];
      let updatedPlayer = currentPlayer;
      for (let i= 0; i < dice ; i++){
        console.log('inside loop', i)
        if (currentX < 475 && currentY === 0 ){
          (console.log('increase of 25 for x', updatedPlayer.position))
          currentX = currentX + 25;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 500);
        } else if (currentX <= 475 && currentX > 0 && currentY === 25){
          (console.log('decrease of 25 for x', updatedPlayer.position))
          currentX = currentX - 25;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 500);
        } else if (currentX === 0 && currentY === 25){
          (console.log('increase of 25 for y', updatedPlayer.position))
          currentY = currentY + 25;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 500);
        } else if (currentX >= 0 && currentX < 475 && currentY === 50){
          (console.log('increase of 25 for x', updatedPlayer.position))
          currentX = currentX + 25;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 500);    
        } else if (currentX === 475 && currentY === 50){
          (console.log('increase of 25 for y', updatedPlayer.position))
          currentY = currentY + 25;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 500);  
        } else if (currentX <= 475 && currentX >0 && currentY === 75){
          (console.log('decrease of 25 for x', updatedPlayer.position))
          currentX = currentX - 25;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 500); 
        } else if (currentX === 0 && currentY === 75){
          (console.log('increase of 25 for y', updatedPlayer.position))
          currentY = currentY + 25;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 500);           
        } else if (currentX >= 0 && currentX < 475 && currentY === 100){
          (console.log('increase of 25 for x', updatedPlayer.position))
          currentX = currentX + 25;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 500);  
        } else if (currentX === 475 && currentY === 100){
          console.log('GAME OVER')
          return( 
          alert (`game over, player ${currentPlayer.name} Won`)
          )
        } else if (currentX === 475 && currentY === 0) {
          currentY = currentY + 25;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 500);
        
        }
    }
  }

    updateCurrentPlayer = (counter) => {
      console.log('update current player to', this.props.playerOrder[counter])
      this.props.updateCurrentPlayer(this.props.playerOrder[counter])
    }


    rollDice = () => {
      
      let dice =  1 + Math.floor(Math.random() * 6)
      if (dice === 1){
          console.log(dice)
          this.setState({url: dice1, counter: this.state.counter})
      } else if (dice === 2){
        console.log(dice)
        this.setState({url: dice2, counter: this.state.counter})
      } else if (dice === 3){
        console.log(dice)
        this.setState({url: dice3, counter: this.state.counter})
      } else if (dice === 4){
        console.log(dice)
        this.setState({url: dice4, counter: this.state.counter})
      } else if (dice === 5){
        console.log(dice)
        this.setState({url: dice5, counter: this.state.counter})
      } else if (dice === 6){
        console.log(dice)
        this.setState({url: dice6, counter: this.state.counter})
      }
      let counter = this.state.counter

      if (counter < 3){
        counter ++
      } else {
        counter = 0
      }
      
    this.setState({counter: counter}) 
    this.updatePositionOfCurrent(this.props.currentPlayer, dice)
    this.updateCurrentPlayer(counter)
    }

    render (){
        console.log('dice component', this.state, 'with props', this.props);
        return (
            <div>
              <h4>Current Turn is for: {this.props.currentPlayer.name}</h4>
                <button onClick={this.rollDice}>PLAY</button>
                <div
                    style = {{
                        position: 'absolute',
                        right: '16px',
                        bottom: '80px',
                        backgroundImage: `url(${this.state.url})`,
                        width: '60px',
                        height: '60px',
                    }}
                />
            </div>
        );
    }
}

export default Dice