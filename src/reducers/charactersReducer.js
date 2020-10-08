// list of pokemon avaible to be use in the game from api
const charactersReducer = (state = { characters: [], loadingChar: false }, action) => {
    switch(action.type) {
      case 'LOADING_CHARACTERS':
        //console.log('loading characters', action, state)
        return {
          ...state,
          characters: [...state.characters],
          loadingChar: true
        }
      case 'ADD_CHARACTERS':
        //console.log('all characters', action.characters, state)
        return {
          ...state,
          characters: action.characters,
          loadingChar: false
        }

      default:
        return state;
    }
  }
   
  export default charactersReducer;