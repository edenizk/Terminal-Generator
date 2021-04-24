import React from 'react';
import { SliderInput } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setPadding } from '../../redux/actions';
import PAD_DIR from '../../helpers/PaddingDir'

const Padding = () => {
  const dispatch = useDispatch();
  const padding = useSelector(state => state.terminalReducer.padding);
  const paddingsArray = padding.split(',');

  const setPaddingValueTop = (value) => {
    console.log(padding);
    dispatch(setPadding(value, 'TOP'));
  };

  const setPaddingValueRight = (value) => {
    dispatch(setPadding(value, 'RIGHT'));
  };

  const setPaddingValueBottom = (value) => {
    dispatch(setPadding(value, 'BOTTOM'));
  };

  const setPaddingValueLeft = (value) => {
    dispatch(setPadding(value, 'LEFT'));
  };

  return (
    <div className="general-settings">
      <h2 className="general-settings__title settings-title">Padding</h2>
      <div className="general-settings__content content">
        <SliderInput title="Top" max={2000} event={setPaddingValueTop} value={paddingsArray[PAD_DIR.top]} valueText={paddingsArray[PAD_DIR.top]}></SliderInput>
        <SliderInput title="Right" max={2000} event={setPaddingValueRight} value={paddingsArray[PAD_DIR.right]}  valueText={paddingsArray[PAD_DIR.right]}></SliderInput>
        <SliderInput title="Bottom" max={2000} event={setPaddingValueBottom} value={paddingsArray[PAD_DIR.bottom]}  valueText={paddingsArray[PAD_DIR.bottom]}></SliderInput>
        <SliderInput title="Left" max={2000} event={setPaddingValueLeft} value={paddingsArray[PAD_DIR.left]}  valueText={paddingsArray[PAD_DIR.left]}></SliderInput>
      </div>
    </div>
  );
};

export default Padding;