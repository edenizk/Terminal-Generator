import React, { Component } from 'react';
import Filter from './Filter';
import GeneralSettings from './GeneralSettings';

class SettingsWrapper extends Component {
    state = {  }
    render() { 
        return (
            <div className="settings-wrapper">
                <Filter/>
                <GeneralSettings></GeneralSettings>
            </div>
        );
    }
}
 
export default SettingsWrapper;