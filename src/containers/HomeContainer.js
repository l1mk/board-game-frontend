import React from 'react';
import homescreen from '../images/homescreen.jpg';


//Home container for image background
class HomeContainer extends React.Component {

  render(){
      console.log("home screen")
    return (
      <div >
        <img id="homescreen" src={homescreen} alt="homescreen" />
      </div>
    );
  }
}

export default (HomeContainer)



  