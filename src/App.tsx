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
  const [apiError, setApiError] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [font, setFont] = useState('sans-serif')

  const audio = new Audio(word?.phonetics[0]?.audio)

  const playAudio = () => {
    audio.play()
  }

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query) {
      setSearchEmpty(true)
    } else {
      setSearchEmpty(false)
      getWord(query)
        .then(data => {
          setWord(data[0])
          setApiError(false)
        })
        .catch(() => setApiError(true))
      }
    }
  
  const getWordBySynonym = (synonym: string) => {
    setQuery('')
    getWord(synonym)
      .then(data => setWord(data[0]))
      .catch(() => setApiError(true))
  }  

  useEffect(() => {
    getWord('hello')
      .then(data => setWord(data[0]))
      .catch(() => setApiError(true))
  }, [])
  
  const meanings = word?.meanings.map((meaning, i) => <Meaning key={i} meaning={meaning} getWordBySynonym={getWordBySynonym}/>)

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
            <div className='nav-seperator'/>
            <div className='toggle' onClick={() => setIsDark(!isDark)}/>
          </div>
        </nav>
        <Searchbar query={query} setQuery={setQuery} submitSearch={submitSearch} searchEmpty={searchEmpty}/>
        {!apiError ?
        <div className='word-container'>
          <div className='top-container'>
            <div className='word-column'>
              <h1>
                {word?.word}
              </h1>
              <p className='phonetic'>
              {word?.phonetics.length ? word?.phonetics[0].text && word?.phonetics[0].text : ''}
              </p>
            </div>
            {word?.phonetics.length ? word?.phonetics[0].audio && <button className='audio-button' onClick={playAudio}></button> : ''}
          </div>
          {word && meanings}
          <div className='seperator full-seperator'/>
          <div className='source-container'>
            <p className='source-heading'>Source</p>
            <a className='source' href={word?.sourceUrls[0]}>{word?.sourceUrls[0]}<img className='new-window' src={newWindow}/></a>
          </div>
        </div>
        :
        <div className='api-error'>
          <p className='sad-face'>😕</p>
          <p className='no-def'>No Definitions Found</p>
          <p className='sorry-pal'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
        }
      </div>
    </main>
  );
}

export default App;