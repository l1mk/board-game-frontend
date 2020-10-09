import React from 'react';
import About from '../components/About';

//basis about container for about page
class AboutContainer extends React.Component {

  render(){
    //console.log('game container render console')
    return (
      <div className = "main">
          < About />
      </div>
    );
  }
}

export default (AboutContainer)