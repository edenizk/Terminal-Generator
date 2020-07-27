import React from 'react';
import { Input, Dropdown, Checkbox } from '../Input';
import { useDispatch, useSelector } from 'react-redux'
import { setTitle, setCursor, setScrollbarVisibility } from '../../actions'

const GeneralSettings = () => {
  const fontFaceOptions = ['test1', 'test2', 'test3']
  const cursorOptions = ['bar ( ┃ )', 'vintage ( ▃ )', 'underscore ( ▁ )', 'filledBox ( █ )', 'emptyBox ( ▯ )']

  const dispatch = useDispatch();
  const isScrollbarVisible = useSelector(state => state.terminalReducer.scrollbarVisibility)
  const cursor = useSelector(state => state.terminalReducer.cursor)

  const onTabTitleChange = (e) => {
    dispatch(setTitle(e.target.value))
  }

  const onFontFaceChange = (value) => {
    dispatch(setTitle(value))
  }

  const onFontWeightChange = (value) => {
    dispatch(setTitle(value))
  }

  const onCursorChange = (value) => {
    console.log(value)
    dispatch(setCursor(value))
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
        <Input title="Tab Title" event={onTabTitleChange}></Input>
        <Dropdown title="Font Face" options={fontFaceOptions}></Dropdown>
        <Dropdown title="Font Weight" options={fontFaceOptions}></Dropdown>
        <Dropdown title="Cursor" options={cursorOptions} activeOption={cursor} event={onCursorChange}></Dropdown>
        <Dropdown title="Close on Exit" options={fontFaceOptions}></Dropdown>
        <Checkbox name="Scrollbar visibility" isChecked={isScrollbarVisible} event={onScrollbarVisibilityChange}></Checkbox>
      </div>
    </div>
  );
}

export default GeneralSettings;