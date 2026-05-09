import React, { useState, useRef } from 'react';
import { HelpCircle } from 'react-feather';

const GoogleFontsDropdown = ({ title, link, options, activeOption, event }) => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef();

  const filtered = search
    ? options.filter(o => o.family.toLowerCase().includes(search.toLowerCase())).slice(0, 50)
    : options.slice(0, 50);

  const highlight = (text) => {
    if (!search) return text;
    const idx = text.toLowerCase().indexOf(search.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="dropdown__highlight">{text.slice(idx, idx + search.length)}</span>
        {text.slice(idx + search.length)}
      </>
    );
  };

  const select = (option) => {
    event(option);
    setSearch('');
    setOpen(false);
  };

  const handleLabelClick = () => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

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
      {!open ? (
        <div className="dropdown__label" onClick={handleLabelClick}>
          <span className="dropdown__selected">{activeOption}</span>
          <span className="dropdown__icon">▾</span>
        </div>
      ) : (
        <div className="dropdown__search-wrapper">
          <input
            ref={inputRef}
            className="dropdown__search-input"
            type="text"
            placeholder="Search fonts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
          />
          <ul className="dropdown__options dropdown__options--active dropdown__options--inline">
            {filtered.map((option, index) => (
              <li
                key={index}
                className={`dropdown__option${activeOption === option.family ? ' dropdown__option--selected' : ''}`}
                onMouseDown={() => select(option)}
              >
                {highlight(option.family)}
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="dropdown__option dropdown__option--empty">No results</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GoogleFontsDropdown;
