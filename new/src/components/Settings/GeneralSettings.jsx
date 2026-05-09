import React from 'react';
import { Input, Dropdown, GoogleFontsDropdown, Checkbox } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setFontWeight, setCursorShape, setFontObject, setFontFace, setFontWeights,
  setStartOnUserLogin, setFirstWindowPreference, setLaunchMode, setWindowingBehavior,
  setStartupActions, setAllowHeadless } from '../../redux/actions';
import FONT_WEIGHT from '../../helpers/FontWeight';
import AdvancedCarousel from './AdvancedCarousel';

const GeneralSettings = () => {
  const dispatch = useDispatch();

  const cursorShapeOptions = {
    bar: 'bar ( ┃ )', 
    vintage: 'vintage ( ▃ )', 
    underscore: 'underscore ( ▁ )', 
    filledBox: 'filledBox ( █ )', 
    emptyBox: 'emptyBox ( ▯ )'
  };

  const filterReducer = useSelector(state => state.filterReducer);
  const terminalReducer  = useSelector(state => state.terminalReducer);
  const s = useSelector(state => state.startupReducer);

  const firstWindowOptions = ['defaultProfile', 'persistedWindowLayout'];
  const launchModeOptions = ['default', 'maximized', 'fullscreen', 'focus', 'maximizedFocus'];
  const windowingBehaviorOptions = ['useNew', 'useExisting', 'useAnyExisting'];

  const generalAdvanced = (
    <>
      <Checkbox
        name="Launch on Machine Startup"
        isChecked={s.startOnUserLogin}
        event={(value) => dispatch(setStartOnUserLogin(value))}
      />
      <Dropdown
        title="First Window Preference"
        options={firstWindowOptions}
        activeOption={s.firstWindowPreference}
        event={(value) => dispatch(setFirstWindowPreference(value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#behavior-when-starting-a-new-terminal-session"
      />
      <Dropdown
        title="Launch Mode"
        options={launchModeOptions}
        activeOption={s.launchMode}
        event={(value) => dispatch(setLaunchMode(value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#launch-mode"
      />
      <Dropdown
        title="New Instance Behavior"
        options={windowingBehaviorOptions}
        activeOption={s.windowingBehavior}
        event={(value) => dispatch(setWindowingBehavior(value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#new-instance-behavior"
      />
      <Input
        title="Startup Actions"
        value={s.startupActions}
        event={(e) => dispatch(setStartupActions(e.target.value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#startup-actions"
      />
      <Checkbox
        name="Continue Running in Background"
        isChecked={s.allowHeadless}
        event={(value) => dispatch(setAllowHeadless(value))}
      />
    </>
  );

  const onNameChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const onFontChange = (font) => {
    dispatch(setFontObject(font));
    dispatch(setFontFace(font.family));
    dispatch(setFontWeights(font.variants));
    dispatch(setFontWeight(font.variants[0]));
    setDOMFontFace(font);
  };

  const setDOMFontFace = (font) => {
    const url = `https://fonts.googleapis.com/css2?family=${font.family}`
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  const onFontWeightChange = (value) => {
    const fontWeight = FONT_WEIGHT[value];
    dispatch(setFontWeight(fontWeight ?? ''));
  };

  const onCursorShapeChange = (value) => {
    value = value.replace( /\s\([^)]*\)/gm, '');
    dispatch(setCursorShape(value));
  };

  // const onCloseOnExitChange = (value) => {
  //   dispatch(setTitle(value));
  // };

  // const onScrollbarVisibilityChange = (value) => {
  //   dispatch(setScrollbarVisibility(value));
  // };

  return (
    <AdvancedCarousel title="General Settings" advancedContent={generalAdvanced}>
      <Input
        title="Tab Title"
        event={onNameChange}
        value={terminalReducer.name ?? ''} required
        link="https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-general#name"
      />
      <GoogleFontsDropdown
        title="Font Face"
        options={
          !filterReducer.fontFaces ?
            ['Loading...'] :
            filterReducer.fontFaces
        }
        activeOption={terminalReducer.fontFace === '' ? 'Choose a Font Face' : terminalReducer.fontFace}
        event={onFontChange}
        link="https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#font-face"
      />
      <Dropdown
        title="Font Weight"
        options={
          !filterReducer.fontWeights ?
            (terminalReducer.fontFace === '' ? ['Choose a Font Face First'] : ['Loading...']) :
            filterReducer.fontWeights
        }
        activeOption={terminalReducer.fontWeight.length === 0
          ? 'Choose a Font Weight'
          : terminalReducer.fontWeight}
        event={onFontWeightChange}
        link="https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#font-weight"
      />
      <Dropdown
        title="Cursor Shape"
        options={Object.values(cursorShapeOptions)}
        activeOption={cursorShapeOptions[terminalReducer.cursorShape ?? 'bar']}
        event={onCursorShapeChange}
        link="https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#cursor-shape"
      />
    </AdvancedCarousel>
  );
};

export default GeneralSettings;