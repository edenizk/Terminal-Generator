import { useDispatch, useSelector } from 'react-redux';
import {
  setStartOnUserLogin, setFirstWindowPreference, setLaunchMode,
  setWindowingBehavior, setInitialCols, setInitialRows,
  setInitialPosition, setCenterOnLaunch, setStartupActions, setAllowHeadless
} from '../../redux/actions';
import { Checkbox, Dropdown, Input, SliderInput } from '../Input';

const firstWindowOptions = ['defaultProfile', 'persistedWindowLayout'];
const launchModeOptions = ['default', 'maximized', 'fullscreen', 'focus', 'maximizedFocus'];
const windowingBehaviorOptions = ['useNew', 'useExisting', 'useAnyExisting'];

const StartupSettings = () => {
  const dispatch = useDispatch();
  const s = useSelector(state => state.startupReducer);

  return (
    <div className="general-settings__content content">
      <Checkbox
        name="Launch on Machine Startup"
        isChecked={s.startOnUserLogin}
        event={(value) => dispatch(setStartOnUserLogin(value))}
      />
      <Dropdown
        title="First Window Preference"
        options={firstWindowOptions}
        activeOption={s.firstWindowPreference}
        event={(value) => dispatch(setFirstWindowPreference(value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#behavior-when-starting-a-new-terminal-session"
      />
      <Dropdown
        title="Launch Mode"
        options={launchModeOptions}
        activeOption={s.launchMode}
        event={(value) => dispatch(setLaunchMode(value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#launch-mode"
      />
      <Dropdown
        title="New Instance Behavior"
        options={windowingBehaviorOptions}
        activeOption={s.windowingBehavior}
        event={(value) => dispatch(setWindowingBehavior(value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#new-instance-behavior"
      />
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
      <Input
        title="Startup Actions"
        value={s.startupActions}
        event={(e) => dispatch(setStartupActions(e.target.value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#startup-actions"
      />
      <Checkbox
        name="Continue Running in Background"
        isChecked={s.allowHeadless}
        event={(value) => dispatch(setAllowHeadless(value))}
      />
    </div>
  );
};

export default StartupSettings;
