import React from 'react';
import logo from '../images/logo.svg';

const GlobalHeader = (pros) => {
    
  return ( 
    <header className="global-header">
      <div className="global-header__logoWrapper">
        <img src={logo} className="global-header__logo" alt="logo" />
        <h1 className="global-header__title">Terminal Generator</h1>
      </div>
      <nav className="global-header__contact">
        <a className="global-header__repo link" href="https://github.com/edenizk/Terminal-Generator" target="_blank" rel="noopener noreferrer">
          Project Repo
        </a>
        <a className="global-header__me link" href="https://edenizk.github.io/" target="_blank" rel="noopener noreferrer">
          Contact Me
        </a>
      </nav>
    </header>
  );
};
 
export default GlobalHeader;