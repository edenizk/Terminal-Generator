import terminalReducer from './TerminalReducer'
import filterReducer from './FilterReducer'
import { combineReducers } from 'redux'

const mainReducer = combineReducers({
  terminalReducer,
  filterReducer
})

export default mainReducer