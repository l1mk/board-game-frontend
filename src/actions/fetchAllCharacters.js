export const fetchAllCharacters = () => {
    //action to read all characters from api
    return (dispatch) => {
      dispatch({ type: 'LOADING_CHARACTERS'})
      fetch('http://localhost:3000/characters')
      .then(response => {return response.json()})
      .then(characters => { dispatch({ type: 'ADD_CHARACTERS', characters: characters }) })
    }
  }