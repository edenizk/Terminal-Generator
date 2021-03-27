const INITIAL_STATE = Object.freeze({
  filterIndex: 0,
  fontFaces: [],
  fontWeights: [],
  fontObject: {}
});

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_FILTER_INDEX':
    return {
      ...state,
      filterIndex: action.payload,
    }; 
  case 'SET_FONT_FACES':
    return {
      ...state,
      fontFaces: action.payload,
    }; 
  case 'SET_FONT_WEIGHTS':
    return {
      ...state,
      fontWeights: action.payload,
    }; 
  case 'SET_FONT_OBJECT':
    return {
      ...state,
      fontObject: action.payload,
    }; 
  default:
    return state;
  }
};

export default filterReducer;