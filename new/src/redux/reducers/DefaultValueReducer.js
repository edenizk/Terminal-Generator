const INITIAL_STATE = Object.freeze({
  name: '',
  fontFace: '',
  fontWeight: '',
  cursorShape: 'bar',
  closeOnExit: 'graceful',
  commandLine: '',
  icon: '',
  backgroundImage: '',
  backgroundImageOpacity: 100,
  backgroundImageAlignment: 'uniformToFill',
  backgroundImageStretchMode: 'none',
  background: '',
  foreground: '',
  tabColor: '',
  selectionBackground: '',
  cursorColor: '',
  adjustIndistinguishableColors: 'indexed',
  useAcrylic: false,
  acrylicOpacity: 50,
  padding: '8, 8, 8, 8',
  scrollbarState: true,
  snapOnInput: true,
  historySize: 9001
});

const defaultValueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default defaultValueReducer;