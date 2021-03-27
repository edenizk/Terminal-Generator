import React, { useState } from 'react';
import { ChevronsUp } from 'react-feather';
import { useSelector } from 'react-redux';
import BasicSettingsTemplate from './BasicSettingsTemplate';

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
        { fontLink && (
          <p className="resultCard__googleFont">
            If you do not have the <span className="resultCard__highlight">{terminalReducer.fontFace}</span> font face installed to your windows 
            <a className="resultCard__googleFontLink" href={fontLink}> download from here</a>
            <span className="resultCard__googleFontInfo"> (link generated from google API)</span>
          </p>
        )}
        <BasicSettingsTemplate settings={settings}/>
        {/* <AdvanceSettingsTemplate /> */}
      </div>
    </details>
  );
};

export default ResultCard;
