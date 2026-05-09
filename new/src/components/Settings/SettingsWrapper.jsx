import React from 'react';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import GeneralSettings from './GeneralSettings';
import Background from './Background';
import Padding from './Padding';
import ColorSettings from './ColorSettings';
import KeyboardSettings from './KeyboardSettings';
import ScrollSettings from './ScrollSettings';

const SettingsWrapper = () => {
  const filterIndex = useSelector(state => state.filterReducer.filterIndex);

  const getCurrentSection = () => {
    switch (filterIndex) {
    case 0:
      return <GeneralSettings></GeneralSettings>;
    case 1:
      return <Background></Background>;
    case 2:
      return <Padding></Padding>;
    case 3:
      return <ColorSettings></ColorSettings>; 
    case 4:
      return <KeyboardSettings></KeyboardSettings>;
    case 5:
      return <ScrollSettings></ScrollSettings>;
    default:
      break;
    }
  };
  return (
    <div className="settings-wrapper">
      <Filter/>
      {
        getCurrentSection()
      }
    </div>
  );
    
};
 
export default SettingsWrapper;