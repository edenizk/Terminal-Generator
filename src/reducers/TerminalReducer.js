const INITIAL_STATE = Object.freeze({
    tabTitle: '',
    fontFace: 'Cascadia Mono',
    fontWeight: 'Normal',
    cursor: 'bar ( ┃ )',
    closeOnExit: 'graceful',
    scrollbarVisibility: true,
    icon: ''
});
  

const terminalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_TITLE':
        return {
          ...state,
          tabTitle: action.payload,
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
      case 'SET_CLOSE_ON_EXIT':
        return {
          ...state,
          closeOnExit: action.payload,
        };  
      case 'SET_SCROLLBAR_VISIBILITY':
        return {
          ...state,
          scrollbarVisibility: action.payload,
        };  
      case 'SET_ICON':
        return {
          ...state,
          icon: action.payload,
        };  
      default:
        return state;
    }
  }

export default terminalReducer;