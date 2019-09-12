import React from 'react';
import './App.css';

function App() {
  return (
    /* this is a container of the whole page, this holds up the app*/
    <div className="container">
      <h1>Tic Tac Toe </h1>
        <div className="board">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
    </div>
  );
}

export default App;
