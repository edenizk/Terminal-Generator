import terminalReducer from './TerminalReducer';
import filterReducer from './FilterReducer';
import defaultValueReducer from './DefaultValueReducer';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
  terminalReducer,
  filterReducer,
  defaultValueReducer,
});

export default mainReducer;