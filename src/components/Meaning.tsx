import React from 'react';

type MeaningProps = {
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

const Meaning = ({meaning}: {meaning: MeaningProps}) => {
  const definitions = meaning.definitions.map((definition, i) => {
    return (
      <div key={i}>
        <li>
          <span>{definition.definition}</span>
        </li>
        {definition.example && <p className='example'> "{definition.example}"</p>}
      </div>)
    })


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
      <p className='synonym-line'>{meaning.synonyms.length>0 && 'Synonynms'} <span className='synonym'>{meaning.synonyms[0]}</span></p>
    </div>
  )
}

export default Meaning