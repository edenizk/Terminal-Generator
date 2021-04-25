import React from 'react';
import { CheckCircle } from 'react-feather';

const Checkbox = (props) => {
  const { name, isChecked, event } = props;

  return ( 
    <div className={`checkbox${ isChecked ? ' checkbox--active' : '' }`}>
      <button 
        className="checkbox__button"
        onClick={() => {event(!isChecked);}}>
        <CheckCircle className="checkbox__checkbox"></CheckCircle>
        <h2 className="checkbox__title input-title">{name}</h2>
      </button>
    </div>
  );
};
 
export default Checkbox;