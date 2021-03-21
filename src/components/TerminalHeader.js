import React from 'react';
import { X, Slash, Plus, ChevronDown, Minus, Square } from 'react-feather';
import { useSelector } from 'react-redux';

function TerminalHeader() {
  const icon = useSelector(state => state.terminalReducer.icon)
  const title = useSelector(state => state.terminalReducer.name)

  return ( 
    <div className="terminal-header">
      <div className="terminal-header__tab">
        {
          icon ? <img className="terminal-header__icon" src={icon} alt="tab icon"></img>  : 
                <Slash className="terminal-header__icon terminal-header__icon--missing"></Slash>
        }
        <h2 className="terminal-header__title">{title ?? ''}</h2>
        <X className="terminal-header__close"/>
      </div>
      <Plus className="terminal-header__add"/>
      <ChevronDown className="terminal-header__down"/>
      <div className="terminal-header__windowTools">
        <Minus className="terminal-header__minimize"/>
        <Square className="terminal-header__screenSize"/>
        <X className="terminal-header__closeWindow"/>
      </div>
    </div>  
  );
}
 
export default TerminalHeader;
