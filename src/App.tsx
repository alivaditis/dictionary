import logo from './images/logo.svg'
import moon from './images/icon-moon.svg'
import toggleLight from './images/Group.svg'
import toggleDark from './images/Group2.svg'
import { useState, useEffect,  } from 'react';
import { getWord } from './api';
import { SingleWord } from './types';
import './styles/App.css';
import Meaning from './components/Meaning';
import Searchbar from './components/Searchbar';

function App() {
  const [word, setWord] = useState<SingleWord | undefined>()
  const [query, setQuery] = useState('')
  const [isDark, setIsDark] = useState(true)
  const [font, setFont] = useState('sans-serif')

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    getWord(query)
      .then(data => setWord(data[0]))
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
              <option value='sans-serif'>Sans Serif</option>
              <option value='serif'>Serif</option>
              <option value='monospace'>Mono</option>
            </select>
            <img className='toggle' src={isDark ? toggleDark : toggleLight} onClick={() => setIsDark(!isDark)}/>
          </div>
        </nav>
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