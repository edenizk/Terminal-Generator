import PAD_DIR from '../../helpers/PaddingDir'

const INITIAL_STATE = Object.freeze({
  name: 'Terminal Generator Shell',
  fontFace: '',
  fontWeight: '',
  cursorShape: 'bar',
  closeOnExit: 'graceful',
  commandLine: 'cmd.exe',
  icon: null,
  backgroundImage: 'kity_space.gif',
  backgroundImageOpacity: 50,
  backgroundImageAlignment: 'Center',
  backgroundImageStretchMode: 'None',
  backgroundColor: '#472148', // THIS SET AS ONLY BACKGROUND IN SETTINGS.JSON
  useAcrylic: true,
  acrylicOpacity: 50,
  padding: '8, 8, 8, 8',
  scrollbarVisibility: true, // Property name: scrollbarState
  scrollToInput: true, // Property name: snapOnInput
  historySize: 9001
});

const paddingString = (index, value, currPaddings) => {
  let paddings = currPaddings.split(',');
  paddings[index] = value;
  return paddings.join(',');
}
  

const terminalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_TITLE':
    return {
      ...state,
      name: action.payload,
    };
  case 'SET_FONT_FACE':
    return {
      ...state,
      fontFace: action.payload,
    };
  case 'SET_FONT_WEIGHT':
    return {
      ...state,
      fontWeight: action.payload,
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
      padding: paddingString(PAD_DIR.top, action.payload, state.padding)
    };
  case 'SET_PADDING_BOTTOM':
    return {
      ...state,
      padding: paddingString(PAD_DIR.bottom, action.payload, state.padding)

    };
  case 'SET_PADDING_LEFT':
    return {
      ...state,
      padding: paddingString(PAD_DIR.left, action.payload, state.padding)
    };
  case 'SET_PADDING_RIGHT':
    return {
      ...state,
      padding: paddingString(PAD_DIR.right, action.payload, state.padding)
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