import React from 'react';
import { SliderInput } from '../Input';
import { useDispatch, useSelector } from 'react-redux'
import { setPadding } from '../../redux/actions'

const Padding = () => {
  const dispatch = useDispatch();
  const padding = useSelector(state => state.terminalReducer.padding)

  const setPaddingValueTop = (value) => {
    dispatch(setPadding(value, 'TOP'))
  }

  const setPaddingValueRight = (value) => {
    dispatch(setPadding(value, 'RIGHT'))
  }

  const setPaddingValueBottom = (value) => {
    dispatch(setPadding(value, 'BOTTOM'))
  }

  const setPaddingValueLeft = (value) => {
    dispatch(setPadding(value, 'LEFT'))
  }

  return (
    <div className="general-settings">
      <h2 className="general-settings__title settings-title">Padding</h2>
      <div className="general-settings__content content">
        <SliderInput title="Top" max={500} event={setPaddingValueTop} value={padding.top} valueText={padding.top}></SliderInput>
        <SliderInput title="Right" max={500} event={setPaddingValueRight} value={padding.right}  valueText={padding.right}></SliderInput>
        <SliderInput title="Bottom" max={500} event={setPaddingValueBottom} value={padding.bottom}  valueText={padding.bottom}></SliderInput>
        <SliderInput title="Left" max={500} event={setPaddingValueLeft} value={padding.left}  valueText={padding.left}></SliderInput>
      </div>
    </div>
  );
}

export default Padding;