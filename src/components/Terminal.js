import React from 'react';
import TerminalHeader from './TerminalHeader';
import { useSelector } from 'react-redux';
import PAD_DIR from '../helpers/PaddingDir';
import FONT_WEIGHT from '../helpers/FontWeight';

function Terminal() {
  const terminalReducer = useSelector(state => state.terminalReducer);
	const settingsReducer = useSelector((state) => state.settingsReducer);
  const cursorShape = terminalReducer.cursorShape;
  const image = settingsReducer.backgroundImage;
  const paddingsArray = terminalReducer.padding.split(',');

  const cursorShapeOptions = {
    bar: '┃', 
    vintage: '▃', 
    underscore: '▁', 
    filledBox: '█', 
    emptyBox: '▯'
  };

  const getFontWeightByValue = (value) => {
    return Object.keys(FONT_WEIGHT).find(key => FONT_WEIGHT[key] === value);
  }
  
  return (
    <div className="terminal">
      <TerminalHeader />
      <div className="terminal__content" style={{
        paddingTop: paddingsArray[PAD_DIR.top] + 'px',
        paddingRight: paddingsArray[PAD_DIR.right] + 'px',
        paddingBottom: paddingsArray[PAD_DIR.bottom] + 'px',
        paddingLeft: paddingsArray[PAD_DIR.left] + 'px',
        fontFamily: terminalReducer.fontFace,
        fontWeight: getFontWeightByValue(terminalReducer.fontWeight),
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
      {
        terminalReducer.backgroundImage === 'kity_space.gif' &&
          <a className="terminal__credit" target="_blank" rel="noopener noreferrer" href="https://giphy.com/stickers/transparent-catpaw-QWRTFvymri1XABdEFA">
            Kitty Gif Credit: <span className="highlight">catpaw</span>
          </a>
      }
    </div>
  );
}

export default Terminal;