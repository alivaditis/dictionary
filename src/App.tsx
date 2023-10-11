import { useState, useEffect,  } from 'react';
import { getWord } from './api';
import { SingleWord } from './types';
import './styles/App.scss';
import Meaning from './components/Meaning';
import Searchbar from './components/Searchbar';

function App() {
  const [word, setWord] = useState<SingleWord | undefined>()
  const [query, setQuery] = useState('nice')

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    getWord(query)
      .then(data => setWord(data[0]))
  }
  
  useEffect(() => {
    getWord(query)
    .then(data => setWord(data[0]))
  }, [])
  
  const meanings = word?.meanings.map(meaning => <Meaning meaning={meaning}/>)

  return (
    <div className="App">
      <Searchbar query={query} setQuery={setQuery} submitSearch={submitSearch}/>
      <div className='word-container'>
        <div className='word-column'>
          <h1>
            {word?.word}
          </h1>
          <p>
            {word?.phonetics[0].text && word?.phonetics[0].text}
          </p>
        </div>
        {word && meanings}
        <p>Source</p>
        <a href={word?.sourceUrls[0]}>{word?.sourceUrls[0]}</a>
      </div>
    </div>
  );
}

export default App;