import React from 'react';
import ScoresInput from '../components/ScoresInput.js';
import Scores from '../components/Scores';


class ScoreContainer extends React.Component {

  render(){
    console.log('score container')
    return (
      <div>
        <h1>Score Container</h1>
        <ScoresInput />
        <Scores />
      </div>
    );
  }
}

export default (ScoreContainer)
