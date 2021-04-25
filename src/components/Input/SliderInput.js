import React from 'react';
import { Slider } from 'material-ui-slider';
import { HelpCircle } from 'react-feather';

const SliderInput = (props) => {
  const { title, link, required, event, value, valueText, max, min } = props;

  const setSliderValue = (value) => {
    event(value);
  };

  return ( 
    <div className="slider">
      <div className="slider__titleWrapper">
        <h2 className="slider__title input-title">{title}<span className="input__required">{required && '*'}</span></h2>
        {
          link && link !== '' &&
            <a className="input__help help-link" href={link} target="_blank" rel="noopener noreferrer"><HelpCircle/></a>
        }      
      </div>
      <Slider className="slider__slider" min={min ? min : 0} max={max ? max : 100} defaultValue={value} onChange={(value) => setSliderValue(value)}></Slider>
      <span className="slider__value">{valueText}</span>
    </div>
  );
};
 
export default SliderInput;