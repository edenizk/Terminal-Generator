import React from 'react';
import GlobalHeader from './components/GlobalHeader'
import './App.scss';
import Terminal from './components/Terminal';
import SettingsWrapper from './components/Settings/SettingsWrapper';

function App() {
  return (
    <div className="App">
        <div className="container">
          <GlobalHeader/>
          
          <main className="main">
            <Terminal></Terminal>
            <SettingsWrapper></SettingsWrapper>
          </main>

        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
