import logo from './images/logo.svg'
import newWindow from './images/icon-new-window.svg'
import { useState, useEffect,  } from 'react';
import { getWord } from './api';
import { SingleWord } from './types';
import './styles/App.css';
import Meaning from './components/Meaning';
import Searchbar from './components/Searchbar';

function App() {
  const [word, setWord] = useState<SingleWord | undefined>()
  const [query, setQuery] = useState('')
  const [searchEmpty, setSearchEmpty] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [font, setFont] = useState('sans-serif')

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query) {
      setSearchEmpty(true)
    } else {
      setSearchEmpty(false)
      getWord(query)
        .then(data => setWord(data[0]))
    }
  }
  
  useEffect(() => {
    getWord('word')
    .then(data => setWord(data[0]))
  }, [])
  
  const meanings = word?.meanings.map(meaning => <Meaning meaning={meaning}/>)

  return (
    <main data-theme={isDark ? 'dark' : 'light'} style={{fontFamily: font}}>
      <div className='app'>
        <nav>
          <img src={logo}/>
          <div className='nav-right'>
            <select value={font} onChange={(e)=>setFont(e.target.value)}>
              <option style={{fontFamily: 'sans-serif'}} value='sans-serif'>Sans Serif</option>
              <option style={{fontFamily: 'serif'}} value='serif'>Serif</option>
              <option style={{fontFamily: 'monospace'}} value='monospace'>Mono</option>
            </select>
            <div className='toggle' onClick={() => setIsDark(!isDark)}/>
          </div>
        </nav>
        <Searchbar query={query} setQuery={setQuery} submitSearch={submitSearch} searchEmpty={searchEmpty}/>
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
          <div className='seperator full-seperator'/>
          <p className='source-heading'>Source</p>
          <a className='source' href={word?.sourceUrls[0]}>{word?.sourceUrls[0]}<img className='new-window' src={newWindow}/></a>
        </div>
      </div>
    </main>
  );
}

export default App;