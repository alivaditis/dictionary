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
  const definitions = meaning.definitions.map(definition => {
    return (
      <>
        <li>
          <span>{definition.definition}</span>
        </li>
        <p>{definition.example && `"${definition.example}"`}</p>
      </>)
    })


  return (
    <div className='meanings'>
      <p className='part-of-speech'>
        {meaning.partOfSpeech}
      </p>
      <div className='seperator'>
      </div>
      <p className='mean'>
        Meaning
      </p>
      <ul>
        {definitions}
      </ul>
      <p>{meaning.synonyms.length>0 && 'Synonynms'} <span className='synonym'>{meaning.synonyms[0]}</span></p>
    </div>
  )
}

export default Meaning