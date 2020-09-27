import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import playersReducer from './playersReducer'
import charactersReducer from './charactersReducer'
import newGameReducer from './newGameReducer'

//combination of all existing reducers
const rootReducer =  combineReducers({
    playersReducer,
    gamesReducer,
    charactersReducer,
    newGameReducer
})

export default rootReducer; 