const INITIAL_STATE = Object.freeze({
  name: '',
  fontFace: 'Cascadia Mono',
  fontWeight: 'Normal',
  cursorShape: 'bar',
  closeOnExit: 'graceful',
  scrollbarVisibility: true,
  icon: ''
});

const terminalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'SET_FONTFACE':
      return {
        ...state,
        fontface: action.payload,
      };
    case 'SET_CURSORSHAPE':
      return {
        ...state,
        cursorShape: action.payload,
      };  
    default:
      return state;
  }
}