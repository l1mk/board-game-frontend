import React from 'react';


//Player rendering on game start
class Player extends React.Component {
    
    render(){
//{console.log('player rendering component', this.props)}
      return (
        <div 
         style = {{
             position: 'absolute',
             objectFit: 'fit',
             marginTop: '15px',
             marginLeft: '12px',
             top: this.props.position[1],
             left: this.props.position[0],
             backgroundImage: `url(${this.props.url})`,
             backgroundPosition: '0 0',
             width: '38px',
             height: '38px'
         }}
        >
        </div>
      );
    }
}

export default Player