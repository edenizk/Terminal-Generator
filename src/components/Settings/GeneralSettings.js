import React from 'react';
import { Input, Dropdown, Checkbox, GoogleFontsDropdown } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setFontWeight, setCursorShape, setFontObject, setScrollbarVisibility, setFontFace, setFontWeights } from '../../redux/actions';

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
  // const isScrollbarVisible = useSelector(state => state.terminalReducer.scrollbarVisibility);
  // const cursorShape = useSelector(state => state.terminalReducer.cursorShape);


  const onNameChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const onFontChange = (font) => {
    dispatch(setFontObject(font));
    dispatch(setFontFace(font.family));
    dispatch(setFontWeights(font.variants));
    dispatch(setFontWeight(font.variants[0]));
  };

  const onFontWeightChange = (value) => {
    dispatch(setFontWeight(value));
  };

  const onCursorShapeChange = (value) => {
    var value = value.replace( /\s\([^)]*\)/gm, '');
    dispatch(setCursorShape(value));
  };

  const onCloseOnExitChange = (value) => {
    dispatch(setTitle(value));
  };

  const onScrollbarVisibilityChange = (value) => {
    dispatch(setScrollbarVisibility(value));
  };

  return (
    <div className="general-settings">
      <h2 className="general-settings__title settings-title">General Settings</h2>
      <div className="general-settings__content content">
        <Input title="Tab Title" event={onNameChange} value={terminalReducer.name ?? ''} required></Input>
        <GoogleFontsDropdown 
          title="Font Face" 
          options={
            !filterReducer.fontFaces ? 
              ['Loading...'] : 
              filterReducer.fontFaces
          } 
          activeOption={terminalReducer.fontFace} 
          event={onFontChange}
        />
        <Dropdown 
          title="Font Weight" 
          activeOption={terminalReducer.fontWeight} 
          options={
            !filterReducer.fontWeights ? 
              ['Loading...'] : 
              filterReducer.fontWeights
          } 
          event={onFontWeightChange}
        />
        <Dropdown 
          title="Cursor Shape" 
          options={Object.values(cursorShapeOptions)} 
          activeOption={cursorShapeOptions[terminalReducer.cursorShape ?? 'bar']} 
          event={onCursorShapeChange}
        />
        <Dropdown title="Close on Exit" options={['true', 'false']}></Dropdown>
        <Checkbox name="Scrollbar visibility" isChecked={terminalReducer.isScrollbarVisible ?? true} event={onScrollbarVisibilityChange}></Checkbox>
      </div>
    </div>
  );
};

export default GeneralSettings;