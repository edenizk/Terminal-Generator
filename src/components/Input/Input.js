import React from 'react';

const Input = (props) => {
  const { title, event, value, required } = props;

  return ( 
    <div className="input">
      <h3 className="input__title input-title">{title}<span className="input__required">{required && '*'}</span></h3>
      <input type="text" className="input__inputField" onChange={(e) => {event(e);}} value={value}></input>
    </div>
  );
};
 
export default Input;