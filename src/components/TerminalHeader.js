import React, { Component } from 'react';
// import feather from 'feather-icons'
import { X, Slash, Plus, ChevronDown, Minus, Square } from 'react-feather';

class TerminalHeader extends Component {

    state = {  }
    render() { 
      const { icon, title } = this.props

      return ( 
        <div className="terminal-header">
          <div className="terminal-header__tab">
            {
              icon ? <img className="terminal-header__icon" src={icon} alt="tab icon"></img>  : 
                                <Slash className="terminal-header__icon terminal-header__icon--missing"></Slash>
            }
            <h2 className="terminal-header__title">{title ? title : 'Windows PowerShell'}</h2>
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
}
 
export default TerminalHeader;
