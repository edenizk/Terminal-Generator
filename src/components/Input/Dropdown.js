import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'react-feather';

const Dropdown = (props) => {
  const { title, link, options, activeOption, event } = props;
  const [optionsActive, setOptionsActive] = useState(false);

  const setSelected = (value) => {
    setOptionsActive(false);
    event(value);
  };

  return ( 
    <div className="dropdown">
      <div className="dropdown__titleWrapper">
        <h3 className="dropdown__title input-title">{title}</h3>
        {
          link && link !== '' &&
            <a className="dropdown__help help-link" href={link} target="_blank" rel="noopener noreferrer"><HelpCircle/></a>
        }
      </div>
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
              onClick={ () => setSelected(option)}>{option}</li>;
          })}
      </ul>
    </div>
  );
    
}; 
export default Dropdown;