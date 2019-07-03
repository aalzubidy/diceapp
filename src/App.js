import React from 'react';
import './App.css';
import Dice from './Dice';

function App() {
  return (
    <div className="App">
      <h1>Roll a Dice!</h1>
      <Dice number="1"></Dice>
    </div>
  );
}

export default App;
