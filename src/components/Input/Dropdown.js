import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';

const Dropdown = (props) => {
    const { title, options, activeOption, event } = props
    const [optionsActive, setOptionsActive] = useState(false);

    const setSelected = (value) => {
        setOptionsActive(false)
        event(value)
    }

    return ( 
        <div className="dropdown">
            <h3 className="dropdown__title input-title">{title}</h3>
            <div className="dropdown__label" onClick={() => setOptionsActive(!optionsActive)}>
                <span className="dropdown__selected">{ activeOption }</span>
                <ChevronDown className="dropdown__icon"></ChevronDown>
            </div>
            <ul className={`dropdown__options${ optionsActive ? ' dropdown__options--active' : '' }`} >
                { 
                options.map( (option, index) => {
                    return <li 
                    key={index}
                    className={`dropdown__option${ activeOption === option ? ' dropdown__option--selected' : '' }`} 
                    onClick={ () => setSelected(option)}>{option}</li>
                })}
            </ul>
        </div>
    );
    
}
 
export default Dropdown;