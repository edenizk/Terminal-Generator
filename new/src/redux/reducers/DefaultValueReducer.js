const INITIAL_STATE = Object.freeze({
  name: '',
  fontFace: '',
  fontWeight: '',
  cursorShape: 'bar',
  closeOnExit: 'graceful',
  icon: '',
  backgroundImage: '',
  backgroundImageOpacity: 50,
  backgroundImageAlignment: 'uniformToFill',
  backgroundImageStretchMode: 'none',
  background: '',
  useAcrylic: false,
  acrylicOpacity: 50,
  padding: '8, 8, 8, 8',
  scrollbarVisibility: true, // Property name: scrollbarState
  scrollToInput: true, // Property name: snapOnInput
  historySize: 9001
});

const defaultValueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default defaultValueReducer;