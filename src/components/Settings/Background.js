import React from 'react';
import { Input, Dropdown, Checkbox, SliderInput } from '../Input';
import { useDispatch, useSelector } from 'react-redux'
import { setBackgroundImageOpacity } from '../../redux/actions'

const Background = () => {
  const dispatch = useDispatch();
  const backgroundImageOpacity = useSelector(state => state.terminalReducer.backgroundImageOpacity)

  const setSliderValue = (value) => {
    dispatch(setBackgroundImageOpacity(value))
  }

  return (
    <div className="general-settings">
      <h2 className="general-settings__title settings-title">Background</h2>
      <div className="general-settings__content content">
        <SliderInput title="Background Image Opacity" event={setSliderValue} value={backgroundImageOpacity} valueText={backgroundImageOpacity / 100}></SliderInput>
      </div>
    </div>
  );
}

export default Background;