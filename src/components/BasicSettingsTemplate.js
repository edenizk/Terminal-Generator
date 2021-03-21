import React from 'react';

const BasicSettingsTemplate = ({ settings }) => {
  return (
    <p className="basicSettingsTemplate multiline code">
      {`${JSON.stringify(settings, null, '\t')}`}
    </p>
  );
};

export default BasicSettingsTemplate;
