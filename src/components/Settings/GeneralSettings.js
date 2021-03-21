import React from 'react';
import { Input, Dropdown, Checkbox } from '../Input';
import { useDispatch, useSelector } from 'react-redux'
import { setTitle, setCursorShape, setScrollbarVisibility } from '../../redux/actions'

const GeneralSettings = () => {
  const fontFaceOptions = ['test1', 'test2', 'test3']
  const cursorShapeOptions = {
    bar: 'bar ( ┃ )', 
    vintage: 'vintage ( ▃ )', 
    underscore: 'underscore ( ▁ )', 
    filledBox: 'filledBox ( █ )', 
    emptyBox: 'emptyBox ( ▯ )'
  }

  const dispatch = useDispatch();
  const terminalReducer  = useSelector(state => state.terminalReducer);
  const isScrollbarVisible = useSelector(state => state.terminalReducer.scrollbarVisibility)
  const cursorShape = useSelector(state => state.terminalReducer.cursorShape)

  const onNameChange = (e) => {
    dispatch(setTitle(e.target.value))
  }

  const onFontFaceChange = (value) => {
    dispatch(setTitle(value))
  }

  const onFontWeightChange = (value) => {
    dispatch(setTitle(value))
  }

  const onCursorShapeChange = (value) => {
    console.log(value)
    var value = value.replace( /\s\([^)]*\)/gm, "");
    dispatch(setCursorShape(value))
  }

  const onCloseOnExitChange = (value) => {
    dispatch(setTitle(value))
  }

  const onScrollbarVisibilityChange = (value) => {
    dispatch(setScrollbarVisibility(value))
  }

  return (
    <div className="general-settings">
      <h2 className="general-settings__title settings-title">General Settings</h2>
      <div className="general-settings__content content">
        <Input title="Tab Title" event={onNameChange} value={terminalReducer.name ?? ''} required></Input>
        <Dropdown title="Font Face" options={fontFaceOptions} activeOption={terminalReducer.fontFace}></Dropdown>
        <Dropdown title="Font Weight" options={fontFaceOptions}></Dropdown>
        <Dropdown 
          title="Cursor Shape" 
          options={Object.values(cursorShapeOptions)} 
          activeOption={cursorShapeOptions[terminalReducer.cursorShape ?? 'bar']} 
          event={onCursorShapeChange}
        />
        <Dropdown title="Close on Exit" options={fontFaceOptions}></Dropdown>
        <Checkbox name="Scrollbar visibility" isChecked={terminalReducer.isScrollbarVisible ?? true} event={onScrollbarVisibilityChange}></Checkbox>
      </div>
    </div>
  );
}

export default GeneralSettings;