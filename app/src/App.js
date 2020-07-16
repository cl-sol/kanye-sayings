import React from 'react';
import './App.css';

import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Kanye Sayings</h1>
      </header>
      <div className="quote">
        <Quote />
      </div>
    </div>
  );
}

export default App;
