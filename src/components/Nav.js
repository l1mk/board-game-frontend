import React from 'react';
import { NavLink } from 'react-router-dom';

//nav component to render all links in the menu
function Nav () {

    console.log('navbar render console')

    return (
      <div>
          <h5>Nav Bar </h5>
      <NavLink to="/"> Home </NavLink> 
      <NavLink to="/pokedex"> Pokedex </NavLink>
      <NavLink to="/records"> Records </NavLink>
      <NavLink to="/about"> About </NavLink>
        

      </div>
    );
  }

export default Nav
