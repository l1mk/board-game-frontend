import React from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {

  render(){
    console.log('navbar render console')
    return (
      <div className="nav">
          <h5>Nav Bar:</h5>
      <NavLink to="/pokedex"> Pokedex </NavLink>
      <NavLink to="/records"> Records </NavLink>
      <NavLink to="/about"> About </NavLink>
        

      </div>
    );
  }
}

 

export default (Nav)
