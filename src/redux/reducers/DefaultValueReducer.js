const INITIAL_STATE = Object.freeze({
  name: 'test',
  fontFace: 'Cascadia Mono',
  fontWeight: 'Normal',
  cursorShape: 'bar',
  closeOnExit: 'graceful',
  icon: '',
  backgroundImage: '',
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

const defaultValueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default defaultValueReducer;