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