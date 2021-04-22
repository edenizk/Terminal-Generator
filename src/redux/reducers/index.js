import terminalReducer from './TerminalReducer';
import filterReducer from './FilterReducer';
import defaultValueReducer from './DefaultValueReducer';
import settingsReducer from './SettingsReducer'
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
  terminalReducer,
  filterReducer,
  defaultValueReducer,
  settingsReducer,
});

export default mainReducer;