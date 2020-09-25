import React from 'react';
import About from '../components/About';


class AboutContainer extends React.Component {

  render(){
    console.log('game container render console')
    return (
      <div>
          <h1>About Container</h1>
          < About />
      </div>
    );
  }
}

 

export default (AboutContainer)