import React, { useState } from 'react';
import { ChevronsUp } from 'react-feather';
import { useSelector } from 'react-redux';
import BasicSettingsTemplate from './BasicSettingsTemplate';
import AdvanceSettingsTemplate from './AdvanceSettingsTemplate'

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

    // generateColumns();
    removeEmptyValues();
    console.log('test');
    setIsClose(false);
  };

  const closeCard = () => {
    console.log('closed');
    setIsClose(true);
  };

  const removeEmptyValues = () => {
    const tmpSettings = {};

    Object.keys(terminalReducer).forEach((prop) => {
      console.log('prop', prop);
      if (
        terminalReducer[prop] !== null &&
        JSON.stringify(terminalReducer[prop]) !== JSON.stringify(defaultValueReducer[prop])
      ) {
        console.log('includes');
        tmpSettings[prop] = terminalReducer[prop];
      }
    });

    setSettings(tmpSettings);

    console.log(settings);
  };

  // const generateColumns = () => {

  //   console.log('generating');
  //   console.log(terminalReducer);
  //   terminalReducer.forEach((column) => {
  //     let columnName = column.metadata.colName;
  //     settings[columnName] = column.value;
  //   });

  // }

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
                <li>You can click down arrow next to add new tab icon and than settings</li>
                <li>Or you open Windows Terminal and press <span className="highlight">CTRL+,</span></li>
              </ul>
            </li>
            <li>Paste inside the list array (<span className="highlight">{' list: [ '}</span>)</li>
          </ol>
        </div>

        <BasicSettingsTemplate settings={settings}/>
        <div className="resultCard__description richText">
          <p>Below is how the code should look like in default settings file. You can also copy paste whole thing to your settings.json file</p>
        </div>
        <AdvanceSettingsTemplate settings={settings} />
      </div>
    </details>
  );
};

export default ResultCard;
