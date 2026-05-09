import terminalReducer from './TerminalReducer';
import filterReducer from './FilterReducer';
import defaultValueReducer from './DefaultValueReducer';
import settingsReducer from './SettingsReducer';
import startupReducer from './StartupReducer';
import { combineReducers } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
  terminalReducer,
  filterReducer,
  defaultValueReducer,
  settingsReducer,
  startupReducer,
});

export default mainReducer;
