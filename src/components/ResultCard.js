import React from 'react';
import AdvanceSettingsTemplate from './AdvanceSettingsTemplate';
import { ChevronsUp } from 'react-feather';

class ResultCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isClose: true};

    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard() {
    this.setState(state => ({
      isClose: !state.isClose
    }));
  }
  
  render() {
    return (
      <div className={`resultCard resultCard--${this.state.isClose && 'closed'}`}>
        <div className="resultCard__toggle" onClick={this.toggleCard}>
          <ChevronsUp className="resultCard__toggleIcon"></ChevronsUp>
            <h4 className="resultCard__toggleText">{this.state.isClose ? 'Done?' : 'Close'}</h4>
          <ChevronsUp nsUp className="resultCard__toggleIcon"></ChevronsUp>
        </div>
        <AdvanceSettingsTemplate />
      </div>
    );
  }
}

export default ResultCard;