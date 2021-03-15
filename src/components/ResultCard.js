import React, { useState } from 'react';
import AdvanceSettingsTemplate from './AdvanceSettingsTemplate';
import { ChevronsUp } from 'react-feather';

const ResultCard = () => {
  const [isClose, setIsClose] = useState(true);

  const toggleCard = () => {
    setIsClose(!isClose);
  }
  
  return (
    <div className={`resultCard resultCard--${isClose && 'closed'}`}>
      <div className="resultCard__toggle" onClick={toggleCard}>
        <ChevronsUp className="resultCard__toggleIcon"></ChevronsUp>
          <h4 className="resultCard__toggleText">{isClose ? 'Done?' : 'Close'}</h4>
        <ChevronsUp nsUp className="resultCard__toggleIcon"></ChevronsUp>
      </div>
      <AdvanceSettingsTemplate />
    </div>
  )
}

export default ResultCard;
