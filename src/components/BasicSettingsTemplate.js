import React, { useState } from 'react';

const BasicSettingsTemplate = ({ settings }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyHandle = (navigator) => {
    const text = JSON.stringify(settings, null, '\t');
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);

      setTimeout(() => { setIsCopied(false); }, 3000);

    }, () => {
      console.error("Faild to copy")
    });
  }

  return (
    <div className="basicSettingsTemplate">
      <button className="btn-primary" onClick={() => copyHandle(navigator)}>Copy text</button>
      {
        isCopied &&
          <span className="highlight"> Ready to Paste <span role="img" aria-labelledby="Rock And Roll">🤘</span></span>
      }
      <p className="multiline code">
        {`${JSON.stringify(settings, null, '\t')}`}
      </p>
    </div>
  );
};

export default BasicSettingsTemplate;
