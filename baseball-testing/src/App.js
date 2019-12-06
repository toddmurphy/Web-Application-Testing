import React from 'react';
import './App.css';
// import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <div>
        <h1 data-testid='scoreboard-title'>Baseball Scoreboard</h1>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
