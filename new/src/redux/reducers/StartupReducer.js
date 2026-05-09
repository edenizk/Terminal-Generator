const INITIAL_STATE = Object.freeze({
  startOnUserLogin: false,
  firstWindowPreference: 'defaultProfile',
  launchMode: 'default',
  windowingBehavior: 'useNew',
  initialCols: 120,
  initialRows: 30,
  initialPosition: ',',
  centerOnLaunch: false,
  startupActions: '',
  allowHeadless: false,
});

const startupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_START_ON_USER_LOGIN':
    return { ...state, startOnUserLogin: action.payload };
  case 'SET_FIRST_WINDOW_PREFERENCE':
    return { ...state, firstWindowPreference: action.payload };
  case 'SET_LAUNCH_MODE':
    return { ...state, launchMode: action.payload };
  case 'SET_WINDOWING_BEHAVIOR':
    return { ...state, windowingBehavior: action.payload };
  case 'SET_INITIAL_COLS':
    return { ...state, initialCols: action.payload };
  case 'SET_INITIAL_ROWS':
    return { ...state, initialRows: action.payload };
  case 'SET_INITIAL_POSITION':
    return { ...state, initialPosition: action.payload };
  case 'SET_CENTER_ON_LAUNCH':
    return { ...state, centerOnLaunch: action.payload };
  case 'SET_STARTUP_ACTIONS':
    return { ...state, startupActions: action.payload };
  case 'SET_ALLOW_HEADLESS':
    return { ...state, allowHeadless: action.payload };
  default:
    return state;
  }
};

export default startupReducer;
