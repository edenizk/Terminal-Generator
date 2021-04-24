import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';
// TODO: CHANGE THIS TO SEARCH DROP DOWN
const GoogleFontsDropdown = (props) => {
  const { title, options, activeOption, event } = props;
  const [optionsActive, setOptionsActive] = useState(false);
  const [limit, setlimit] = useState(20)
  const list = React.createRef();

  const setSelected = (value) => {
    setOptionsActive(false);
    event(value);
  };

  const handleScroll = () => {
    if (list.current.offsetHeight + list.current.scrollTop >= list.current.scrollHeight) {
      setlimit(limit + 10);
    }
  }

  return ( 
    <div className="dropdown">
      <h3 className="dropdown__title input-title">{title}</h3>
      <div className="dropdown__label" onClick={() => setOptionsActive(!optionsActive)}>
        <span className="dropdown__selected">{ activeOption }</span>
        <ChevronDown className="dropdown__icon"></ChevronDown>
      </div>
      <ul 
        className={`dropdown__options ${ optionsActive ? 'dropdown__options--active' : '' }`} 
        ref={list}
        onScroll={() => handleScroll()}
      >
        { 
          options.slice(0, limit).map( (option, index) => {
            return <li 
              key={index}
              className={`dropdown__option ${ activeOption === option.family ? 'dropdown__option--selected' : '' }`} 
              onClick={ () => setSelected(option)}>{option.family}</li>;
          })}
      </ul>
    </div>
  );
    
};

export default GoogleFontsDropdown;