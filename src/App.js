import React, { useState } from 'react';
import './App.css';

function App() {
  const [bombs, setBombs] = useState([])
  const [visited, setVisited] = useState([])
  const buttonStyle = {
    width: 40,
    height: 40,
    backgroundColor: '#777',
    margin: 5,
    color: 'black',
    verticalAlign: 'top',
    fontSize: '32px',
    fontFamily: 'Arial, Helvetica, sans-serif;',
    border: '1px solid #999',
    display: 'inline-block'
  }

  const generateBombs = () => {
    console.log("Generating bombs")
    let bombArr = Array(10).fill(0).map(elem => Array(10).fill(0))
    for(let i = 0; i < bombArr.length; i++){
      let bombPos = Math.floor(Math.random() * 10)
      bombArr[i][bombPos] = 'X'
    }

    for(let i = 0; i < bombArr.length; i++){
      for(let j = 0; j < bombArr[i].length; j++){
        if(bombArr[i][j] !== 'X'){
          let sum = 0

          if(i > 0 && bombArr[i-1][j] == 'X') sum++
          if(i < bombArr.length - 1 && bombArr[i+1][j] == 'X') sum++
          if(j < bombArr.length - 1 && bombArr[i][j+1] == 'X') sum++
          if(j > 0 && bombArr[i][j-1] == 'X') sum++
          if(i < bombArr.length - 1 && j > 0 && bombArr[i+1][j-1] == 'X') sum++
          if(i < bombArr.length - 1 && j < bombArr.length - 1 && bombArr[i+1][j+1] == 'X') sum++
          if(i > 0 && j > 0 && bombArr[i-1][j-1] == 'X' ) sum++
          if(i > 0 && j < bombArr.length - 1 && bombArr[i-1][j+1] == 'X' ) sum++

          bombArr[i][j] = sum
        }
      }
    }
    setBombs(bombArr)

    let cover = Array(10).fill(0).map(elem => Array(10).fill(0))
    setVisited(cover)
  }

  const visitCell = (i, j) => {
    visited[i][j] = 1
    setVisited([...visited])
  }

  return (
    <div className="App">
      <header className="App-header">
        {bombs.map((arr, index) =>
          <div>
            {arr.map((elem, i) =>
              <div onClick={() => visitCell(index, i)} style={buttonStyle}>{visited[index][i] == 0 ? null : bombs[index][i]}</div>
            )}
          </div>
        )}
        <button onClick={() => generateBombs()}
        >Generate</button>
      </header>

    </div>
  );
}

export default App;
