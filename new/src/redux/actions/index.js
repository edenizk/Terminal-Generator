export const setFilterIndex = (value) => {
  return {
    type: 'SET_FILTER_INDEX',
    payload: value
  };
};

export const setFontFaces = (value) => {
  return {
    type: 'SET_FONT_FACES',
    payload: value
  };
};

export const setFontWeights = (value) => {
  return {
    type: 'SET_FONT_WEIGHTS',
    payload: value
  };
};

export const setFontObject = (value) => {
  return {
    type: 'SET_FONT_OBJECT',
    payload: value
  };
};

export const setTitle = (title) => {
  return {
    type: 'SET_TITLE',
    payload: title
  };
};

export const setFontFace = (value) => {
  return {
    type: 'SET_FONT_FACE',
    payload: value
  };
};

export const setFontWeight = (value) => {
  return {
    type: 'SET_FONT_WEIGHT',
    payload: value
  };
};

export const setCursorShape = (value) => {
  return {
    type: 'SET_CURSORSHAPE',
    payload: value
  };
};

export const setCloseOnExit = (value) => {
  return {
    type: 'SET_CLOSE_ON_EXIT',
    payload: value
  };
};

export const setIcon = (value) => {
  return {
    type: 'SET_ICON',
    payload: value
  };
};

export const setBackgroundImage = (value) => {
  return {
    type: 'SET_BACKGROUND_IMAGE',
    payload: value
  };
};

export const setBackgroundImageOpacity = (value) => {
  return {
    type: 'SET_BACKGROUND_IMAGE_OPACITY',
    payload: value
  };
};

export const setBackgroundImageAlignment = (value) => {
  return {
    type: 'SET_BACKGROUND_IMAGE_ALIGNMENT',
    payload: value
  };
};

export const setBackgroundImageStretchMode = (value) => {
  return {
    type: 'SET_BACKGROUND_IMAGE_STRETCH',
    payload: value
  };
};

export const setBackgroundColor = (value) => {
  return {
    type: 'SET_BACKGROUND_COLOR',
    payload: value
  };
};

export const setUseAcrylic = (value) => {
  return {
    type: 'SET_USE_ACRYLIC',
    payload: value
  };
};

export const setAcrylicOpacity = (value) => {
  return {
    type: 'SET_ACRYLIC_OPACITY',
    payload: value
  };
};

export const setPadding = (value, direction) => {
  return {
    type: 'SET_PADDING_' + direction,
    payload: value
  };
};

export const setScrollbarVisibility = (value) => {
  return {
    type: 'SET_SCROLLBAR_VISIBILITY',
    payload: value
  };
};

export const setScrollToInput = (value) => {
  return {
    type: 'SET_SCROLL_TO_INPUT',
    payload: value
  };
};

export const setHistorySize = (value) => {
  return {
    type: 'SET_HISTORY_SIZE',
    payload: value
  };
};

export const setCommandLine = (value) => ({
  type: 'SET_COMMAND_LINE',
  payload: value
});

export const setForegroundColor = (value) => ({
  type: 'SET_FOREGROUND_COLOR',
  payload: value
});

export const setTabColor = (value) => ({
  type: 'SET_TAB_COLOR',
  payload: value
});

export const setSelectionBackground = (value) => ({
  type: 'SET_SELECTION_BACKGROUND',
  payload: value
});

export const setCursorColor = (value) => ({
  type: 'SET_CURSOR_COLOR',
  payload: value
});

export const setAdjustIndistinguishableColors = (value) => ({
  type: 'SET_ADJUST_INDISTINGUISHABLE_COLORS',
  payload: value
});

export const setStartOnUserLogin = (value) => ({ type: 'SET_START_ON_USER_LOGIN', payload: value });
export const setFirstWindowPreference = (value) => ({ type: 'SET_FIRST_WINDOW_PREFERENCE', payload: value });
export const setLaunchMode = (value) => ({ type: 'SET_LAUNCH_MODE', payload: value });
export const setWindowingBehavior = (value) => ({ type: 'SET_WINDOWING_BEHAVIOR', payload: value });
export const setInitialCols = (value) => ({ type: 'SET_INITIAL_COLS', payload: value });
export const setInitialRows = (value) => ({ type: 'SET_INITIAL_ROWS', payload: value });
export const setInitialPosition = (value) => ({ type: 'SET_INITIAL_POSITION', payload: value });
export const setCenterOnLaunch = (value) => ({ type: 'SET_CENTER_ON_LAUNCH', payload: value });
export const setStartupActions = (value) => ({ type: 'SET_STARTUP_ACTIONS', payload: value });
export const setAllowHeadless = (value) => ({ type: 'SET_ALLOW_HEADLESS', payload: value });