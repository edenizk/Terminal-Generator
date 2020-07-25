export const setTitle = (title) => {
  return {
    type: 'SET_TITLE',
    payload: title
  }
}

export const setFontFace = (value) => {
  return {
    type: 'SET_FONTFACE',
    payload: value
  }
}

export const setCursor = (value) => {
  return {
    type: 'SET_CURSOR',
    payload: value
  }
}

export const setCloseOnExit = (value) => {
  return {
    type: 'SET_CLOSE_ON_EXIT',
    payload: value
  }
}

export const setScrollbarVisibility = (value) => {
  return {
    type: 'SET_SCROLLBAR_VISIBILITY',
    payload: value
  }
}

export const setIcon = (value) => {
  return {
    type: 'SET_ICON',
    payload: value
  }
}