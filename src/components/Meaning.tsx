import React from 'react';

type MeaningProps = {
  meaning: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }
  getWordBySynonym: (synonym: string) => void;
}

const Meaning: React.FC<MeaningProps> = ({meaning, getWordBySynonym}) => {
  
  const definitions = meaning.definitions.map((definition, i) => {
    return (
      <div key={i}>
        <li>
          <span>{definition.definition}</span>
        </li>
        {definition.example && <p className='example'> "{definition.example}"</p>}
      </div>)
    })

  const synonyms = meaning.synonyms.map((synonym, i) => <span className='synonym' key={i} onClick={(e) => getWordBySynonym(synonym)}>{synonym}</span>)

  return (
    <div className='meanings'>
      <div className='part-of-speech'>
        <p>{meaning.partOfSpeech}</p>
        <div className='seperator'></div>
      </div>
      <p className='mean'>Meaning</p>
      <ul>
        {definitions}
      </ul>
      <p className='synonym-line'>{meaning.synonyms.length>0 && 'Synonynms'} {synonyms} </p>
    </div>
  )
}

export default Meaning