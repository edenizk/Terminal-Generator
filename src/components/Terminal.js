import React from 'react';
import TerminalHeader from './TerminalHeader';
import { useSelector } from 'react-redux';
import defaultBackground from '../images/kity_space.gif'

function Terminal() {
  const cursorShape = useSelector(state => state.terminalReducer.cursorShape)
  const backgroundImageOpacity = useSelector(state => state.terminalReducer.backgroundImageOpacity)
  const padding = useSelector(state => state.terminalReducer.padding)

  const regex = /(?<=\().+?(?=\))/g;
  
  return (
    <div className="terminal">
      <TerminalHeader />
      <div className="terminal__content" style={{
        paddingTop: padding.top,
        paddingRight: padding.right,
        paddingBottom: padding.bottom,
        paddingLeft: padding.left
      }}>
        <div 
        className="terminal__backgroundImage" 
        style={{
          backgroundImage:`url(${defaultBackground})`,
          opacity:backgroundImageOpacity / 100
        }}></div>
        <p className="terminal__paragraph">Your Favorite Shell ❤</p>
        <p className="terminal__paragraph">C:\Users\me&gt; <span className="terminal__cursorShape">{cursorShape ? cursorShape.match(regex) : ' |'}</span></p>
      </div>
    </div>
  );
}

export default Terminal;