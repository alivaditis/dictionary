import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import { getWord } from './api';
import { SingleWord } from './types';
import './styles/App.scss';
import Meaning from './components/Meaning';

function App() {
  const [word, setWord] = useState<SingleWord | undefined>()
  
  const meanings = word?.meanings.map(meaning => <Meaning meaning={meaning}/>)

 
  useEffect(() => {
    getWord('keyboard')
    .then(data => setWord(data[0]))
  }, [])

  return (
    <div className="App">
      <div className='word-container'>
        <div className='word-column'>
          <h1>
            {word?.word}
          </h1>
          <p>
            {word?.phonetics[1].text}
          </p>
        </div>
        {word && meanings}
      </div>
    </div>
  );
}

export default App;