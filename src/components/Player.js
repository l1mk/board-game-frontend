import React from 'react';


//Player rendering and game start
class Player extends React.Component {

    constructor(props){
        console.log('constructor', props.url)
        super()
        this.state = {position : props.position}
    }
    
    render(){

      return (
        <div 
         style = {{
             position: 'absolute',
             objectFit: 'cover',
             top: this.state.position[1],
             left: this.state.position[0],
             backgroundImage: `url(${this.props.url})`,
             backgroundPosition: '0 0',
             width: '23px',
             height: '23px'
         }}
        >
    
        </div>
      );

    }

}

export default Player