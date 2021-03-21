const INITIAL_STATE = Object.freeze({
  name: 'Terminal Generator Shell',
  fontFace: 'Cascadia Mono',
  fontWeight: 'Normal',
  cursorShape: 'bar',
  closeOnExit: 'graceful',
  icon: null,
  backgroundImage: '/static/media/kity_space.9c0b8aa9.gif',
  backgroundImageOpacity: 50,
  backgroundImageAlignment: 'Center',
  backgroundImageStretchMode: 'None',
  backgroundColor: '#472148', // THIS SET AS ONLY BACKGROUND IN SETTINGS.JSON
  useAcrylic: true,
  acrylicOpacity: 50,
  padding: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8
  },
  scrollbarVisibility: true, // Property name: scrollbarState
  scrollToInput: true, // Property name: snapOnInput
  historySize: 9001
});
  

const terminalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_TITLE':
    return {
      ...state,
      name: action.payload,
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
      backgroundImageStretchMode: action.payload,
    };
  case 'SET_BACKGROUND_COLOR':
    return {
      ...state,
      backgroundColor: action.payload,
    };
  case 'SET_USE_ACRYLIC':
    return {
      ...state,
      useAcrylic: action.payload,
    };
  case 'SET_ACRYLIC_OPACITY':
    return {
      ...state,
      acrylicOpacity: action.payload,
    };
  case 'SET_PADDING_TOP':
    return {
      ...state,
      padding: {
        ...state.padding,
        top: action.payload
      }
    };
  case 'SET_PADDING_BOTTOM':
    return {
      ...state,
      padding: {
        ...state.padding,
        bottom: action.payload
      }
    };
  case 'SET_PADDING_LEFT':
    return {
      ...state,
      padding: {
        ...state.padding,
        left: action.payload
      }
    };
  case 'SET_PADDING_RIGHT':
    return {
      ...state,
      padding: {
        ...state.padding,
        right: action.payload
      }
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
};

export default terminalReducer;