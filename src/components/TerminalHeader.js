import React, { Component } from 'react';
import feather from 'feather-icons'
import { X, Slash, Plus, ChevronDown, Minus, Square } from 'react-feather';

class TerminalHeader extends Component {
  constructor(props) {
    super(props);

    feather.replace();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    feather.replace();
  }
    state = {  }
    render() { 
        return ( 
          <div className="terminal-header">
            <div className="terminal-header__tab">
              {
                this.props.icon ? <img className="terminal-header__icon" src={this.props.icon} alt="tab icon"></img>  : 
                                  <Slash className="terminal-header__icon terminal-header__icon--missing"></Slash>
              }
              <h2 className="terminal-header__title">{this.props.title ? this.props.title : 'Windows PowerShell'}</h2>
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
