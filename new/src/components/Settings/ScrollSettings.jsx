import { useDispatch, useSelector } from 'react-redux';
import { setScrollbarVisibility, setScrollToInput, setHistorySize } from '../../redux/actions';
import { Checkbox, SliderInput } from '../Input';

const ScrollSettings = () => {
  const dispatch = useDispatch();
  const { scrollbarVisibility, scrollToInput, historySize } = useSelector(state => state.terminalReducer);

  return (
    <div className="general-settings">
      <h1 className="general-settings__title settings-title">Scroll Settings</h1>
      <div className="general-settings__content content">
        <Checkbox
          name="Show Scrollbar"
          isChecked={scrollbarVisibility}
          event={(value) => dispatch(setScrollbarVisibility(value))}
        />
        <Checkbox
          name="Snap to Input on Type"
          isChecked={scrollToInput}
          event={(value) => dispatch(setScrollToInput(value))}
        />
        <SliderInput
          title="History Size"
          value={historySize}
          valueText={`${historySize} rows`}
          max={9001}
          event={(value) => dispatch(setHistorySize(value))}
          link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-advanced#history-size"
        />
      </div>
    </div>
  );
};

export default ScrollSettings;