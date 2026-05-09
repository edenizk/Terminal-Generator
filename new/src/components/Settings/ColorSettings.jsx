import { useDispatch, useSelector } from 'react-redux';
import {
  setBackgroundColor, setForegroundColor, setTabColor,
  setSelectionBackground, setCursorColor, setAdjustIndistinguishableColors,
  setUseAcrylic, setAcrylicOpacity
} from '../../redux/actions';
import { Checkbox, SliderInput, Dropdown } from '../Input';
import ColorWheel from '../Input/ColorWheel';

const adjustOptions = ['always', 'indexed', 'never'];

const ColorSettings = () => {
  const dispatch = useDispatch();
  const {
    background, foreground, tabColor, selectionBackground, cursorColor,
    adjustIndistinguishableColors, useAcrylic, acrylicOpacity
  } = useSelector(state => state.terminalReducer);

  return (
    <div className="general-settings">
      <h1 className="general-settings__title settings-title">Color Settings</h1>
      <div className="general-settings__content content">
        <ColorWheel
          title="Background Color"
          value={background}
          event={(value) => dispatch(setBackgroundColor(value))}
          link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#background-color"
        />
        <ColorWheel
          title="Foreground Color"
          value={foreground}
          event={(value) => dispatch(setForegroundColor(value))}
          link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#foreground-color"
        />
        <ColorWheel
          title="Tab Color"
          value={tabColor}
          event={(value) => dispatch(setTabColor(value))}
          link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#tab-color"
        />
        <ColorWheel
          title="Selection Background"
          value={selectionBackground}
          event={(value) => dispatch(setSelectionBackground(value))}
          link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#selection-background-color"
        />
        <ColorWheel
          title="Cursor Color"
          value={cursorColor}
          event={(value) => dispatch(setCursorColor(value))}
          link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#cursor-color"
        />
        <Dropdown
          title="Adjust Indistinguishable Colors"
          options={adjustOptions}
          activeOption={adjustIndistinguishableColors}
          event={(value) => dispatch(setAdjustIndistinguishableColors(value))}
          link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#adjust-indistinguishable-colors"
        />
        <Checkbox
          name="Use Acrylic"
          isChecked={useAcrylic}
          event={(value) => dispatch(setUseAcrylic(value))}
        />
        <SliderInput
          title="Acrylic Opacity"
          value={acrylicOpacity}
          valueText={`${acrylicOpacity}%`}
          event={(value) => dispatch(setAcrylicOpacity(value))}
          link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-appearance#acrylic-opacity"
        />
      </div>
    </div>
  );
};

export default ColorSettings;