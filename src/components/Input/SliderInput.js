import React from 'react';
import { Slider } from 'material-ui-slider';

const SliderInput = (props) => {
    const { title, event, value } = props

    const setSliderValue = (value) => {
        event(value)
    }

    return ( 
        <div className="slider">
            <h3 className="slider__title">{title}</h3>
            <Slider className="slider__slider" defaultValue={value * 100} onChange={(value) => setSliderValue(value)}></Slider>
            <span className="slider__value">{value}</span>
        </div>
    );
}
 
export default SliderInput;