import React from 'react';
import { NavLink } from 'react-router-dom';

//nav component to render all links in the menu
function Nav () {

    //console.log('navbar render console')

    return (
      <div>
      <li><NavLink to="/home">   HOME   </NavLink></li>
      <li><NavLink to="/pokedex">   POKEDEX   </NavLink></li>
      <li><NavLink to="/records">   RECORDS   </NavLink></li>
      <li><NavLink to="/about">   INFO   </NavLink></li>
      </div>
    );
  }

export default Nav
