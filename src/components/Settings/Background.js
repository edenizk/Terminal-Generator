import React from 'react';
import { SliderInput } from '../Input';
import { AddImage } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setBackgroundImageOpacity, setBackgroundImage } from '../../redux/actions';
import { setTerminalBackgroundImage } from '../../redux/reducers/SettingsReducer'

const Background = () => {
  const dispatch = useDispatch();
  const backgroundImageOpacity = useSelector(state => state.terminalReducer.backgroundImageOpacity);
	const settingsReducer = useSelector((state) => state.settingsReducer);
  const image = settingsReducer.backgroundImage;

  const setSliderValue = (value) => {
    dispatch(setBackgroundImageOpacity(value));
  };

  const setBackgroundImageValue = (src, fileName) => {
    dispatch(setTerminalBackgroundImage(src));
    dispatch(setBackgroundImage(fileName));
  };

  return (
    <div className="general-settings">
      <h2 className="general-settings__title settings-title">Background</h2>
      <div className="general-settings__content content">
        <SliderInput 
          title="Image Opacity" 
          event={setSliderValue} 
          value={backgroundImageOpacity}
          link="https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#background-image-opacity"
        />
        <AddImage 
          title="Background Image" 
          event={setBackgroundImageValue} 
          imageSrc={image}
          link="https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#background-image-path"
        />
      </div>
    </div>
  );
};

export default Background;