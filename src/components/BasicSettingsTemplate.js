import React from 'react'

const BasicSettingsTemplate = () => {
  return (
    <p className="basicSettingsTemplate multiline code">
      {`
        {
            "guid": "{}",
            "hidden": false,
            "name": "",
        }
      `}
    </p>
  )
}

export default BasicSettingsTemplate;
