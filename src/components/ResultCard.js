import React, { useState } from 'react';
import { ChevronsUp } from 'react-feather';
import { useSelector } from 'react-redux';
import BasicSettingsTemplate from './BasicSettingsTemplate';
import AdvanceSettingsTemplate from './AdvanceSettingsTemplate'
import { v4 as uuidv4 } from 'uuid';

const ResultCard = () => {
  const [isClose, setIsClose] = useState(true);
  const terminalReducer = useSelector(state => state.terminalReducer);
  const defaultValueReducer = useSelector(state => state.defaultValueReducer);
  const filterReducer = useSelector(state => state.filterReducer);
  const fontLink = 
  filterReducer.fontObject.files && filterReducer.fontObject.files[terminalReducer.fontWeight];
  const [settings, setSettings] = useState({});

  const openCard = () => {
    if (!isClose) return;

    removeEmptyValues();
    setIsClose(false);
  };

  const closeCard = () => {
    setIsClose(true);
  };

  const removeEmptyValues = () => {
    const tmpSettings = {};

    Object.keys(terminalReducer).forEach((prop) => {
      if (
        terminalReducer[prop] !== null &&
        JSON.stringify(terminalReducer[prop]) !== JSON.stringify(defaultValueReducer[prop])
      ) {
        tmpSettings[prop] = terminalReducer[prop];
      }
    });

    tmpSettings['guid'] = uuidv4();

    setSettings(tmpSettings);
  };

  return (
    <details 
      className={`resultCard${isClose ? ' resultCard--closed' : ''}`} 
      onClick={openCard}
      open={!isClose}
    >
      <summary className="resultCard__toggle" onClick={closeCard}>
        <ChevronsUp className="resultCard__toggleIcon"></ChevronsUp>
        <h4 className="resultCard__toggleText">{isClose ? 'Done?' : 'Close'}</h4>
        <ChevronsUp className="resultCard__toggleIcon"></ChevronsUp>
      </summary>
      <div className="resultCard__content">
        <div className="resultCard__description richText">
          { fontLink && (
            <p className="resultCard__googleFont">
              If you do not have the <span className="highlight">{terminalReducer.fontFace}</span> font face installed to your windows 
              <a className="resultCard__googleFontLink" href={fontLink}> download from here</a>
              <span className="resultCard__googleFontInfo"> (link generated from google API)</span>
            </p>
          )}
          <p>You can exchange commandLine with the command line you would want to use.(e.g. powershell.exe, cmd.exe, etc.)</p>
          <br/>
          <p>For applying below setting:</p>
          <ol>
            <li>
              Copy Below code
            </li>
            <li>Open Windows Terminal Settings
              <ul>
                <li>You can click down arrow next to the add new tab icon -> select settings -> Open JSON file</li>
                <li>Or you open Windows Terminal and press <span className="highlight">CTRL+,</span></li>
              </ul>
            </li>
            <li>Paste inside the list array (<span className="highlight">{' list: [ '}</span>)</li>
            {
              terminalReducer.backgroundImage !== '' &&
                <li><span className="highlight">NOTE:</span> You need to set directory/path of the background image (e. g. "C:\\Users\\YOUR_USERNAME\\image.PNG")</li>
            }
          </ol>
        </div>

        <BasicSettingsTemplate settings={settings}/>
        <div className="resultCard__description richText">
          <p>Below is how the code should look like in default settings file. You can also copy paste whole thing to your settings.json file</p>
        </div>
        <AdvanceSettingsTemplate settings={settings}/>
      </div>
    </details>
  );
};

export default ResultCard;
