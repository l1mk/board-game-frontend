import React from 'react';

//about component info inside the about page
function About() {

  //console.log('about render console');

  return (
    <div className="text">
      <h4>About :</h4>
      <p>Welcome to my React Redux Project, im working on a Pokemon Board game, using as inspiration games that I used to build as a kid with similar set of rules as a regular RPG game but include on a board game.<br></br>
        I'll be posting updates, bugfixes and other stuff in this part.</p><br></br>
        
        <h4>Current State:</h4>
        <p>Game starting and creation work perfectly with minor css, game consist on selecting the amount of players and computer to start, each game is required of 4 pokemons competing to reach the end of the map faster.</p><br></br>

        <p>After selecting players, and typing a name for each player. Is necessary to roll the dice to select the order to start. then pressing continue to go the actual game page.</p><br></br>

        <p>The game page is composed by the UI that shows the characters attributes and the dice. and the Board that comprise the player rendering and the board map. </p><br></br>

        <p>To play the game just press play and look at your character move to the corresponding tile. Game has no animation but is properly tracking the current player and following the order of who has the lowest number in the dice on the previous scree.</p><br></br>

        <p>Plus the game allows the player to see how many turns and who is currently the one to roll the dice. Game ends when one of the characters arrives at the end.</p><br></br>

        <p>At this point a game model is created and sent on the api for later reference in the record page. You can reset and play again or just leave the game using any of the link in the nav bar.</p><br></br>

        <h4>Next additions to the game:</h4>
        <li>pokemon orientation animation</li>
        <li>Pokemon duels when arriving on an occupy tile</li>
        <li>Pokemon leveling up and experience progression</li>
        <li>Tiles traps and obstacles</li>
        <li>Battle points collection</li>
        <li>Lost tracking record for real players</li>
        <li>AI </li>

      <h4>Developer :</h4>
      <p>Juan Siu - 34 years old - Engineer, Salesman, Business Owner, Photographer, Designer, and now Full stack Web Developer</p>

    </div>
  );
}

export default About
