import React from 'react';
import { Slider } from 'material-ui-slider';

const SliderInput = (props) => {
  const { title, event, value, valueText, max, min } = props;

  const setSliderValue = (value) => {
    event(value);
  };

  return ( 
    <div className="slider">
      <h3 className="slider__title input-title">{title}</h3>
      <Slider className="slider__slider" min={min ? min : 0} max={max ? max : 100} defaultValue={value} onChange={(value) => setSliderValue(value)}></Slider>
      <span className="slider__value">{valueText}</span>
    </div>
  );
};
 
export default SliderInput;