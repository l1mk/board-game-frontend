import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCharacters } from '../actions/fetchAllCharacters';
import Pokedex from '../components/Pokedex';



class PokedexContainer extends React.Component {
//fetch all characters after mounting component
  componentDidMount(){
    console.log('component didmount for characters console', this.props)
    this.props.fetchAllCharacters()

  }

//render character component
  render(){
    console.log('Pokedex container render console', this.props.characters)
    return (
      <div>
        <h1>Characters Container</h1>
        <Pokedex characters = {this.props.characters}/>
      </div>
    );
  }
}

//maps this.props. to state in the store
const mapStateToProps = (store) => {
  return {
    characters: store.charactersReducer.characters,
    loading: store.charactersReducer.loading
  }
}

//maps actions and dispatch them on the reducer
const mapDispatchToProps = dispatch => {
  return {
    fetchAllCharacters: () => dispatch(fetchAllCharacters())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer)
