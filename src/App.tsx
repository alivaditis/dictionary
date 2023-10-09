import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className='word-container'>
        <div className='word-column'>
          <h1>
            Word
          </h1>
          <p>
            word
          </p>
        </div>
        <div className='word-type'>
          <p>
            noun
          </p>
          <div className='seperator'>
          </div>
          <p>
            meaning
          </p>
          <li>

          </li>
        </div>
      </div>
    </div>
  );
}

export default App;