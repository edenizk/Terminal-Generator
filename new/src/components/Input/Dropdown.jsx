import React from 'react';
import { HelpCircle } from 'react-feather';

const Dropdown = ({ title, link, options, activeOption, event }) => {
  return (
    <div className="dropdown">
      <div className="dropdown__titleWrapper">
        <h2 className="dropdown__title input-title">{title}</h2>
        {link && link !== '' && (
          <a className="dropdown__help help-link" href={link} target="_blank" rel="noopener noreferrer">
            <HelpCircle />
          </a>
        )}
      </div>
      <select
        className="dropdown__select"
        value={activeOption}
        onChange={e => event(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
