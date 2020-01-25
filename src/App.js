import React, { useState } from 'react';
import './App.css';

function App() {
  const [bombs, setBombs] = useState([])

  const generateBombs = () => {
    console.log("Generating bombs")
    let bombArr = Array(10).fill(0).map(elem => Array(10).fill(0))
    for(let i = 0; i < bombArr.length; i++){
      let bombPos = Math.floor(Math.random() * 10)
      bombArr[i][bombPos] = 'X'
    }
    setBombs(bombArr)
    console.log(bombs)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => generateBombs()}
        >Generate</button>
      </header>
    </div>
  );
}

export default App;
