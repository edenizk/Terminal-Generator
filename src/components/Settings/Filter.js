import React, { Component } from 'react';
import { Sliders, Image, Crop, Command, Sidebar } from 'react-feather';

class Filter extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="filter">
                <ul className="filter__icons">
                    <li className="filter__icon">
                        <Sliders/>
                    </li>
                    <li className="filter__icon">
                        <Image/>
                    </li>
                    <li className="filter__icon">
                        <Crop/>
                    </li>
                    <li className="filter__icon">
                        <div className="filter__colorWheel"></div>
                    </li>
                    <li className="filter__icon">
                        <Command/>
                    </li>
                    <li className="filter__icon">
                        <Sidebar/>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Filter;