import React from 'react';
import { Input, Dropdown, GoogleFontsDropdown } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setFontWeight, setCursorShape, setFontObject, setFontFace, setFontWeights } from '../../redux/actions';

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
    dispatch(setFontWeight(value));
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
    <div className="general-settings">
      <h2 className="general-settings__title settings-title">General Settings</h2>
      <div className="general-settings__content content">
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
        {/* <Dropdown title="Close on Exit" options={['true', 'false']}></Dropdown> */}
        {/* <Checkbox name="Scrollbar visibility" isChecked={terminalReducer.isScrollbarVisible ?? true} event={onScrollbarVisibilityChange}></Checkbox> */}
      </div>
    </div>
  );
};

export default GeneralSettings;