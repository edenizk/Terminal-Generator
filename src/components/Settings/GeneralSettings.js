import React, { Component } from 'react';
import Input from '../Input/Input';

class GeneralSettings extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="general-settings">
                <h2 className="general-settings__title settings-title">General Settings</h2>
                <div className="general-settings__content content">
                    <Input title="Tab Title"></Input>
                    <Input title="Tab Title"></Input>
                    <Input title="Tab Title"></Input>
                    <Input title="Tab Title"></Input>
                    <Input title="Tab Title"></Input>
                    <Input title="Tab Title"></Input>
                    <Input title="Tab Title"></Input>
                    <Input title="Tab Title"></Input>
                    <Input title="Tab Title"></Input>
                    <Input title="Tab Title"></Input>

                </div>
            </div>
         );
    }
}
 
export default GeneralSettings;