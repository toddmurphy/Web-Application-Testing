import React from 'react';
import './App.css';
// import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Baseball Scoreboard</h1>
        {/* <Display /> */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
