import React from 'react';
import TerminalHeader from './TerminalHeader';
import { useSelector } from 'react-redux';
import defaultBackground from '../images/kity_space.gif';

function Terminal() {
  const terminalReducer = useSelector(state => state.terminalReducer);
	const settingsReducer = useSelector((state) => state.settingsReducer);
  const cursorShape = terminalReducer.cursorShape;
  const image = settingsReducer.backgroundImage;

  const cursorShapeOptions = {
    bar: '┃', 
    vintage: '▃', 
    underscore: '▁', 
    filledBox: '█', 
    emptyBox: '▯'
  };

  
  return (
    <div className="terminal">
      <TerminalHeader />
      <div className="terminal__content" style={{
        paddingTop: terminalReducer.padding.top,
        paddingRight: terminalReducer.padding.right,
        paddingBottom: terminalReducer.padding.bottom,
        paddingLeft: terminalReducer.padding.left,
        fontFamily: terminalReducer.fontFace,
        fontWeight: terminalReducer.fontWeight,
      }}>
        <div 
          className="terminal__backgroundImage" 
          style={{
            backgroundImage:`url("${image ?? ''}")`,
            opacity:terminalReducer.backgroundImageOpacity / 100,
          }}></div>
        <p className="terminal__paragraph">Your Favorite Shell ❤</p>
        <p className="terminal__paragraph">C:\Users\me&gt; 
          <span className="terminal__cursorShape">
            {cursorShape ? cursorShapeOptions[cursorShape] : '|'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Terminal;