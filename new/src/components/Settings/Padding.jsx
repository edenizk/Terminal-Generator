import React from 'react';
import { SliderInput, Checkbox, Input } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setPadding, setInitialCols, setInitialRows, setInitialPosition, setCenterOnLaunch } from '../../redux/actions';
import PAD_DIR from '../../helpers/PaddingDir';
import AdvancedCarousel from './AdvancedCarousel';

const Padding = () => {
  const dispatch = useDispatch();
  const padding = useSelector(state => state.terminalReducer.padding);
  const paddingsArray = padding.split(',');
  const s = useSelector(state => state.startupReducer);

  const paddingAdvanced = (
    <>
      <SliderInput
        title="Columns on First Launch"
        value={s.initialCols}
        valueText={`${s.initialCols} cols`}
        min={20}
        max={300}
        event={(value) => dispatch(setInitialCols(value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#columns-on-first-launch"
      />
      <SliderInput
        title="Rows on First Launch"
        value={s.initialRows}
        valueText={`${s.initialRows} rows`}
        min={5}
        max={100}
        event={(value) => dispatch(setInitialRows(value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#rows-on-first-launch"
      />
      <Input
        title="Launch Position (x,y)"
        value={s.initialPosition}
        event={(e) => dispatch(setInitialPosition(e.target.value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#launch-position"
      />
      <Checkbox
        name="Center on Launch"
        isChecked={s.centerOnLaunch}
        event={(value) => dispatch(setCenterOnLaunch(value))}
      />
    </>
  );

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
    <AdvancedCarousel title="Padding" advancedContent={paddingAdvanced}>
      <SliderInput title="Top" max={2000} event={setPaddingValueTop} value={paddingsArray[PAD_DIR.top]} valueText={paddingsArray[PAD_DIR.top]} />
      <SliderInput title="Right" max={2000} event={setPaddingValueRight} value={paddingsArray[PAD_DIR.right]} valueText={paddingsArray[PAD_DIR.right]} />
      <SliderInput title="Bottom" max={2000} event={setPaddingValueBottom} value={paddingsArray[PAD_DIR.bottom]} valueText={paddingsArray[PAD_DIR.bottom]} />
      <SliderInput title="Left" max={2000} event={setPaddingValueLeft} value={paddingsArray[PAD_DIR.left]} valueText={paddingsArray[PAD_DIR.left]} />
    </AdvancedCarousel>
  );
};

export default Padding;