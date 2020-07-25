import React from 'react';
import logo from '../images/logo.svg';

const GlobalHeader = (pros) => {
    
    return ( 
        <header className="global-header">
            <img src={logo} className="global-header__logo" alt="logo" />
            <h1 className="global-header__title">Terminal Generator</h1>
        </header>
     );
}
 
export default GlobalHeader;