import React from 'react';
import dice1 from '../images/dice1.png';
import dice2 from '../images/dice2.png';
import dice3 from '../images/dice3.png';
import dice4 from '../images/dice4.png';
import dice5 from '../images/dice5.png';
import dice6 from '../images/dice6.png';
//Game Mechanics and dice rendering component

class Dice extends React.Component {

    constructor(props){
        super()
        this.state = {url : {dice1}, counter: 0, turns: 0, gameOver: false}
    }

    startButton = () => {
      if (this.state.gameOver === false){
        return(<div className="playBttn">
          <button className="submitBttn" onClick={this.rollDice}>PLAY</button>
          </div>)
      }
    }

    resetButton = () => {
      if (this.state.gameOver === true){
        return(<div className="playBttn">
          <button className="submitBttn" onClick={this.reset}>RESET</button>
          </div>)
      }
    }

    reset = () =>{
      this.setState({url : {dice1}, counter: 0, turns: 0, gameOver: false}) 
      let player1 = {order: this.props.playerOrder[0].order, name: this.props.playerOrder[0].name, position: [-40,0], character: this.props.playerOrder[0].character, url: this.props.playerOrder[0].url}
      let player2 = {order: this.props.playerOrder[1].order, name: this.props.playerOrder[1].name, position: [-40,0], character: this.props.playerOrder[1].character, url: this.props.playerOrder[1].url}
      let player3 = {order: this.props.playerOrder[2].order, name: this.props.playerOrder[2].name, position: [-40,0], character: this.props.playerOrder[2].character, url: this.props.playerOrder[2].url}
      let player4 = {order: this.props.playerOrder[3].order, name: this.props.playerOrder[3].name, position: [-40,0], character: this.props.playerOrder[3].character, url: this.props.playerOrder[3].url}
      let players = [player1, player2, player3, player4]
      this.props.updatePlayersOrder(players)
      this.props.updateCurrentPlayer(players[0])
      alert ('games is reset')
    }

    addTurn = (turns) => {
      //console.log('turns:', turns)
      this.props.updateTurns(turns)
    }
    
    win = (currentPlayer) => {
      let realPlayer = {};
      //console.log('real player and current player', realPlayer, currentPlayer)
      if (this.props.players.length > 0){
        //console.log('players is more than 0', this.props.players.length > 0)
          this.props.players.forEach(player => {
           // console.log('inside map of players', player)
            if (player.name === this.props.capitalize(currentPlayer.name)){
              //console.log('names are equal', player.name === this.props.capitalize(currentPlayer.name))
              realPlayer = player
              realPlayer.wins = (realPlayer.wins + 1)
              console.log('real player and wins', realPlayer, realPlayer.wins)
              this.props.fetchUpdatePlayer(realPlayer)
            }
            
            })
      }
    }

    gameOver = (currentPlayer) => {
      //console.log('GAME OVER')
      this.setState({gameOver: true}) 
      this.win(currentPlayer)
      alert (`game over, player ${currentPlayer.name} Won`)
      let game = {turns: this.props.turns, player1: this.props.playerOrder[0].name, pokemon1: this.props.playerOrder[0].character.pokemon, player2: this.props.playerOrder[1].name, pokemon2: this.props.playerOrder[1].character.pokemon, player3: this.props.playerOrder[2].name, pokemon3: this.props.playerOrder[2].character.pokemon, player4: this.props.playerOrder[3].name, pokemon4: this.props.playerOrder[3].character.pokemon }
      this.props.addGame(game)
    }

    moving = (updatedPlayer) => {
      //console.log('player moving')
      this.props.updatePlayer(updatedPlayer)
    }

    updatePositionOfCurrent = (currentPlayer, dice) => {
      //console.log('update position for', currentPlayer, dice)
      let currentX = currentPlayer.position[0];
      let currentY = currentPlayer.position[1];
      let updatedPlayer = currentPlayer;
      for (let i= 0; i < dice ; i++){
        //console.log('inside loop', i)
        if (currentX < 760 && currentY === 0 ){
          //(console.log('increase of 40 for x', updatedPlayer.position))
          currentX = currentX + 40;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 800);
        } else if (currentX <= 760 && currentX > 0 && currentY === 40){
          //(console.log('decrease of 40 for x', updatedPlayer.position))
          currentX = currentX - 40;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 800);
        } else if (currentX === 0 && currentY === 40){
          //(console.log('increase of 40 for y', updatedPlayer.position))
          currentY = currentY + 40;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 800);
        } else if (currentX >= 0 && currentX < 760 && currentY === 80){
          //(console.log('increase of 40 for x', updatedPlayer.position))
          currentX = currentX + 40;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 800);    
        } else if (currentX === 760 && currentY === 80){
          //(console.log('increase of 40 for y', updatedPlayer.position))
          currentY = currentY + 40;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 800);  
        } else if (currentX <= 760 && currentX >0 && currentY === 120){
          //(console.log('decrease of 40 for x', updatedPlayer.position))
          currentX = currentX - 40;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 800); 
        } else if (currentX === 0 && currentY === 120){
          //(console.log('increase of 40 for y', updatedPlayer.position))
          currentY = currentY + 40;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 800);           
        } else if (currentX >= 0 && currentX < 760 && currentY === 160){
          //(console.log('increase of 40 for x', updatedPlayer.position))
          currentX = currentX + 40;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 800);  
        } else if (currentX === 760 && currentY === 160){
          return( 
            this.gameOver(currentPlayer)
          )
        } else if (currentX === 760 && currentY === 0) {
          currentY = currentY + 40;
          updatedPlayer.position = [currentX, currentY]
          setTimeout(() => {
            this.moving(updatedPlayer);
            }, 800);
        
        }
    }
  }

    updateCurrentPlayer = (counter) => {
      //console.log('update current player to', this.props.playerOrder[counter])
      this.props.updateCurrentPlayer(this.props.playerOrder[counter])
    }


    rollDice = () => {
      
      let dice =  1 + Math.floor(Math.random() * 6)
      switch (dice){
          case 1:
            this.setState({url: dice1, counter: this.state.counter, turns: this.state.turns, gameOver: this.state.gameOver})
          break;
          case 2:
            this.setState({url: dice2, counter: this.state.counter, turns: this.state.turns, gameOver: this.state.gameOver})
          break;
          case 3:
            this.setState({url: dice3, counter: this.state.counter, turns: this.state.turns, gameOver: this.state.gameOver})
          break;
          case 4:
            this.setState({url: dice4, counter: this.state.counter, turns: this.state.turns, gameOver: this.state.gameOver})
          break;
          case 5:
            this.setState({url: dice5, counter: this.state.counter, turns: this.state.turns, gameOver: this.state.gameOver})
          break;
          case 6:
            this.setState({url: dice6, counter: this.state.counter, turns: this.state.turns, gameOver: this.state.gameOver})
          break;
          default:
            this.setState({url: dice1, counter: this.state.counter, turns: this.state.turns, gameOver: this.state.gameOver})
      }
 
      let counter = this.state.counter
      let turns = this.state.turns
      if (counter < 3){
        counter ++
      } else {
        counter = 0
        turns ++
      }
    this.setState({counter: counter, turns: turns}) 
    this.updatePositionOfCurrent(this.props.currentPlayer, dice)
    this.updateCurrentPlayer(counter)
    this.addTurn(turns)
    }

    render (){
        //console.log('dice component', this.state, 'with props', this.props, 'real players', this.props.players );
        return (
            <div>
              <div className="UI">
                <div id="current"><h4>Current Turn is for: <span>{this.props.capitalize(this.props.currentPlayer.name)}</span></h4></div>
                {this.startButton()}
                {this.resetButton()}
                </div>
                <div
                    style = {{
                        position: 'absolute',
                        right: '40px',
                        bottom: '200px',
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