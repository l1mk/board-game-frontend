const charactersReducer = (state = { characters: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_CHARACTERS':
        console.log('loading characters', action, state)
        return {
          ...state,
          characters: [...state.characters],
          loading: true
        }
      case 'ADD_CHARACTERS':
        console.log('all characters', action.characters, state)
        return {
          ...state,
          characters: action.characters,
          loading: false
        }

      default:
        return state;
    }
  }
   
  export default charactersReducer;