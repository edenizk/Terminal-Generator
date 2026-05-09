import { useEffect } from 'react';
import GlobalHeader from './components/GlobalHeader';
import './App.scss';
import Terminal from './components/Terminal';
import SettingsWrapper from './components/Settings/SettingsWrapper';
import ResultCard from './components/ResultCard';
import { useDispatch } from 'react-redux';
import { GetGoogleFonts } from './api/GetGoogleFonts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetGoogleFonts());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container">
        <GlobalHeader />
        <main className="main">
          <Terminal />
          <SettingsWrapper />
          <ResultCard />
        </main>
      </div>
    </div>
  );
}

export default App;
