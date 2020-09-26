import React from 'react';

//about component info inside the about page
class About extends React.Component {

  render(){
    console.log('about render console')
    return (
      <div>
          <h5>About :</h5>
        <p>Welcome to my React Redux Project, im working on a Pokemon Board game, using as inspiration games that I used to build as a kid with similar set of rules as a regular RPG game but include on a board game.
            I'll be posting updates, bugfixes and other stuff in this part. 
        </p>
        <h5>Developer :</h5>
        <p>Juan Siu - 34 years old - Engineer, Salesman, Business Owner, Photographer, Designer, and now Full stack Web Developer</p>

      </div>
    );
  }
}

 

export default (About)
