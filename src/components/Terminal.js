import React from 'react';
import TerminalHeader from './TerminalHeader';
import { useSelector } from 'react-redux';
import defaultBackground from '../images/kity_space.gif'

function Terminal() {
  const cursor = useSelector(state => state.terminalReducer.cursor)
  const regex = /(?<=\().+?(?=\))/g;
  
  return (
    <div className="terminal">
      <TerminalHeader />
      <div className="terminal__content">
        <div className="terminal__backgroundImage" style={{backgroundImage:`url(${defaultBackground})`}}></div>
        <p className="terminal__paragraph">Your Favorite Shell ❤</p>
        <p className="terminal__paragraph">C:\Users\me&gt; <span className="terminal__cursor">{cursor ? cursor.match(regex) : ' |'}</span></p>
      </div>
    </div>
  );
}

export default Terminal;