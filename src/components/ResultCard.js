import React, { useState } from 'react';
import { ChevronsUp } from 'react-feather';
import { useSelector } from 'react-redux';
import BasicSettingsTemplate from './BasicSettingsTemplate';

const ResultCard = () => {
  const [isClose, setIsClose] = useState(true);
  const terminalReducer = useSelector(state => state.terminalReducer);
  const defaultValueReducer = useSelector(state => state.defaultValueReducer);
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
    <div className={`resultCard resultCard--${isClose && 'closed'}`} onClick={openCard}>
      <div className="resultCard__toggle" onClick={closeCard}>
        <ChevronsUp className="resultCard__toggleIcon"></ChevronsUp>
        <h4 className="resultCard__toggleText">{isClose ? 'Done?' : 'Close'}</h4>
        <ChevronsUp className="resultCard__toggleIcon"></ChevronsUp>
      </div>
      <div className="resultCard__content">
        <BasicSettingsTemplate settings={settings}/>
        {/* <AdvanceSettingsTemplate /> */}
      </div>
    </div>
  );
};

export default ResultCard;
