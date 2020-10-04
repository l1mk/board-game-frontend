import React from 'react';
import Board from '../components/Board';
import Player from '../components/Player';
import pokeball from '../images/pokeball.jpg';


class BoardContainer extends React.Component {

    playerRendering = () =>{
        if (this.props.playerOrder.length !== 0 ){
            return (
            <div>
                < Player position = {this.props.playerOrder[0].position} url = {this.props.playerOrder[1].url}/>
                < Player position = {this.props.playerOrder[1].position} url = {this.props.playerOrder[1].url} />
                < Player position = {this.props.playerOrder[2].position} url = {this.props.playerOrder[2].url} />
                < Player position = {this.props.playerOrder[3].position} url = {this.props.playerOrder[3].url} />
      
            </div>)
        }
    }

  render(){
    console.log('Board container render console', this.props)
    return (
      <div>
          <h1>Board Container</h1>
          <div style= {{
          position: 'relative',
          height: '500px',
          width: '500px',
          backgroundColor: 'grey',
          border: '1px solid black',
          margin: '20px auto'
          }}>
          < Board />
          {this.playerRendering()}
          < Player position = {[-25, 0]} url = {pokeball} />
          </div>
      </div>
    );
  }
}

export default (BoardContainer)