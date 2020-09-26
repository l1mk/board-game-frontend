import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import playersReducer from './playersReducer'
import charactersReducer from './charactersReducer'

//combination of all existing reducers
const rootReducer =  combineReducers({
    playersReducer,
    gamesReducer,
    charactersReducer
})

export default rootReducer; 