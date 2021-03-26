const INITIAL_STATE = Object.freeze({
  filterIndex: 0,
  fontFaces: []
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
  default:
    return state;
  }
};

export default filterReducer;