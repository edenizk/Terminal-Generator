const INITIAL_STATE = Object.freeze({
  filterIndex: 0
});

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_FILTER_INDEX':
    return {
      ...state,
      filterIndex: action.payload,
    }; 
  default:
    return state;
  }
};

export default filterReducer;