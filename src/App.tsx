import { useState, useEffect,  } from 'react';
import { getWord } from './api';
import { SingleWord } from './types';
import './styles/App.css';
import Meaning from './components/Meaning';
import Searchbar from './components/Searchbar';

function App() {
  const [word, setWord] = useState<SingleWord | undefined>()
  const [query, setQuery] = useState('nice')
  const [isDark, setIsDark] = useState(true)

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
    <main data-theme={isDark ? 'dark' : 'light'}>
      <div className='app'>
        <Searchbar query={query} setQuery={setQuery} submitSearch={submitSearch}/>
        <div className='word-container'>
          <div className='word-column'>
            <h1>
              {word?.word}
            </h1>
            <p className='phonetic'>
              {word?.phonetics[0].text && word?.phonetics[0].text}
            </p>
          </div>
          {word && meanings}
          <p>Source</p>
          <a className='source' href={word?.sourceUrls[0]}>{word?.sourceUrls[0]}</a>
        </div>
      </div>
    </main>
  );
}

export default App;