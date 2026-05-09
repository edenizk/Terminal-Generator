import { useDispatch, useSelector } from 'react-redux';
import { setCloseOnExit, setCommandLine } from '../../redux/actions';
import { Dropdown, Input } from '../Input';
import AdvancedCarousel from './AdvancedCarousel';

const closeOnExitOptions = ['graceful', 'always', 'never'];

const KeyboardSettings = () => {
  const dispatch = useDispatch();
  const { closeOnExit, commandLine } = useSelector(state => state.terminalReducer);

  return (
    <AdvancedCarousel title="Keyboard Settings">
      <Dropdown
        title="Close on Exit"
        options={closeOnExitOptions}
        activeOption={closeOnExit}
        event={(value) => dispatch(setCloseOnExit(value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-general#close-on-exit-behavior"
      />
      <Input
        title="Command Line"
        value={commandLine}
        event={(e) => dispatch(setCommandLine(e.target.value))}
        link="https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-general#command-line"
      />
    </AdvancedCarousel>
  );
};

export default KeyboardSettings;