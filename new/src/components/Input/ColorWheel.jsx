import { HelpCircle } from 'react-feather';

const ColorWheel = ({ title, link, value, event }) => {
  return (
    <div className="colorWheel">
      <div className="colorWheel__titleWrapper">
        <h2 className="colorWheel__title input-title">{title}</h2>
        {link && link !== '' && (
          <a className="colorWheel__help help-link" href={link} target="_blank" rel="noopener noreferrer">
            <HelpCircle />
          </a>
        )}
      </div>
      <input
        type="color"
        className="colorWheel__picker"
        value={value || '#000000'}
        onChange={(e) => event(e.target.value)}
      />
      <span className="colorWheel__value">{value}</span>
    </div>
  );
};

export default ColorWheel;
