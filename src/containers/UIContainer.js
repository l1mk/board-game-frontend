import React from 'react';
import Characters from '../components/Characters';
import Dice from '../components/Dice';


class UIContainer extends React.Component {

capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  render(){
    console.log('UI container render console', this.props)
    return (
      <div>
          <h1>UI Container</h1>
          <Characters playerOrder = {this.props.playerOrder} capitalize = {this.capitalize}/>
          <Dice />
      </div>
    );
  }
}

 

export default (UIContainer)