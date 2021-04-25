import React from 'react';
import { HelpCircle } from 'react-feather';

const Input = (props) => {
  const { title, link, event, value, required } = props;

  return ( 
    <div className="input">
      <div className="input__titleWrapper">
        <h3 className="input__title input-title">{title}<span className="input__required">{required && '*'}</span></h3>
        {
          link && link !== '' &&
            <a className="input__help help-link" href={link} target="_blank" rel="noopener noreferrer"><HelpCircle/></a>
        }      
      </div>
      <input type="text" className="input__inputField" onChange={(e) => {event(e);}} value={value}></input>
    </div>
  );
};

export default Input;