const INITIAL_STATE = Object.freeze({
  tabTitle: '',
  fontFace: 'Cascadia Mono',
  fontWeight: 'Normal',
  cursor: 'bar',
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
    case 'SET_CURSOR':
      return {
        ...state,
        cursor: action.payload,
      };  
    default:
      return state;
  }
}