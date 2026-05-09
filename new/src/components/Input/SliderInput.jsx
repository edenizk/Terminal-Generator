import Slider from '@mui/material/Slider';
import { HelpCircle } from 'react-feather';

const SliderInput = ({ title, link, required, event, value, valueText, max, min }) => {
  return (
    <div className="slider">
      <div className="slider__titleWrapper">
        <h2 className="slider__title input-title">
          {title}<span className="input__required">{required && '*'}</span>
        </h2>
        {link && link !== '' && (
          <a className="input__help help-link" href={link} target="_blank" rel="noopener noreferrer">
            <HelpCircle />
          </a>
        )}
      </div>
      <Slider
        className="slider__slider"
        min={min ?? 0}
        max={max ?? 100}
        defaultValue={Number(value)}
        onChange={(_, newValue) => event(newValue)}
      />
      <span className="slider__value">{valueText}</span>
    </div>
  );
};

export default SliderInput;