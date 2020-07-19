import React, { Component } from 'react';
import Input from '../Input/Input';
import Dropdown from '../Input/Dropdown';

class GeneralSettings extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="general-settings">
                <h2 className="general-settings__title settings-title">General Settings</h2>
                <div className="general-settings__content content">
                    <Input title="Tab Title"></Input>
                    <Dropdown title="Font Face" options={['test1', 'test2', 'test3']}></Dropdown>

                </div>
            </div>
         );
    }
}
 
export default GeneralSettings;