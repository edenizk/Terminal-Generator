import React, { useState } from 'react';
import AdvanceSettingsTemplate from './AdvanceSettingsTemplate';
import { ChevronsUp } from 'react-feather';
import BasicSettingsTemplate from './BasicSettingsTemplate';

const ResultCard = () => {
  const [isClose, setIsClose] = useState(true);

  const openCard = () => {
    if (!isClose) return;

    setIsClose(false);
  }

  const closeCard = () => {
    console.log('closed')
    setIsClose(true);
  }
  
  return (
    <div className={`resultCard resultCard--${isClose && 'closed'}`} onClick={openCard}>
      <div className="resultCard__toggle" onClick={closeCard}>
        <ChevronsUp className="resultCard__toggleIcon"></ChevronsUp>
          <h4 className="resultCard__toggleText">{isClose ? 'Done?' : 'Close'}</h4>
        <ChevronsUp className="resultCard__toggleIcon"></ChevronsUp>
      </div>
      <BasicSettingsTemplate />
      {/* <AdvanceSettingsTemplate /> */}
    </div>
  )
}

export default ResultCard;
