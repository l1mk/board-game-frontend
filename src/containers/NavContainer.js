import React from 'react';
import Nav from '../components/Nav'


class NavContainer extends React.Component {

  render(){
    console.log('nav container render console')
    return (
      <div className="nav">
        <h1>Nav Container</h1>
          <Nav />
      </div>
    );
  }
}

 

export default (NavContainer)
