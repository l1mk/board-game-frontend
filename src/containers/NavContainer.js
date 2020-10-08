import React from 'react';
import Nav from '../components/Nav'

//nav container with style to be pass down on the nav component
class NavContainer extends React.Component {

  render(){
    //console.log('nav container render console')
    return (
      <div className="nav">
          <Nav />
      </div>
    );
  }
}

export default (NavContainer)
