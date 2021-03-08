const INITIAL_STATE = Object.freeze({
    tabTitle: '',
    fontFace: 'Cascadia Mono',
    fontWeight: 'Normal',
    cursor: 'bar ( ┃ )',
    closeOnExit: 'graceful',
    icon: '',
    backgroundImage: '',
    backgroundImageOpacity: 0.5,
    backgroundImageAlignment: 'Center',
    backgroundImageStretch: 'None',
    backgroundColor: '#472148',
    enableAcrylic: true,
    transparency: 0.5,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    scrollbarVisibility: true,
    scrollToInput: true,
    historySize: 9001
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
      case 'SET_ICON':
        return {
          ...state,
          icon: action.payload,
        };
      case 'SET_BACKGROUND_IMAGE':
        return {
          ...state,
          backgroundImage: action.payload,
        };  
      case 'SET_BACKGROUND_IMAGE_OPACITY':
        return {
          ...state,
          backgroundImageOpacity: action.payload,
        };
      case 'SET_BACKGROUND_IMAGE_ALIGNMENT':
        return {
          ...state,
          backgroundImageAlignment: action.payload,
        };
      case 'SET_BACKGROUND_IMAGE_STRETCH':
        return {
          ...state,
          backgroundImageStretch: action.payload,
        };
      case 'SET_BACKGROUND_COLOR':
        return {
          ...state,
          backgroundColor: action.payload,
        };
      case 'SET_ENABLE_ACRYLIC':
        return {
          ...state,
          enableAcrylic: action.payload,
        };
      case 'SET_TRANSPARENCY':
        return {
          ...state,
          transparency: action.payload,
        };
      case 'SET_PADDING_TOP':
        return {
          ...state,
          paddingTop: action.payload,
        };
      case 'SET_PADDING_BOTTOM':
        return {
          ...state,
          paddingBottom: action.payload,
        };
    case 'SET_PADDING_LEFT':
      return {
        ...state,
        paddingLeft: action.payload,
      };
      case 'SET_PADDING_RIGHT':
        return {
          ...state,
          paddingRight: action.payload,
        };
      case 'SET_SCROLLBAR_VISIBILITY':
        return {
          ...state,
          scrollbarVisibility: action.payload,
        }; 
      case 'SET_SCROLL_TO_INPUT':
        return {
          ...state,
          scrollToInput: action.payload,
        };
      case 'SET_HISTORY_SIZE':
        return {
          ...state,
          historySize: action.payload,
        };  
      default:
        return state;
    }
  }

export default terminalReducer;