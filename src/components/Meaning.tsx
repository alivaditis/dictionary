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
          {definition.definition}
        </li>
        <p>{definition.example}</p>
      </>)
    })


  return (
    <div className='meanings'>
      <p>
        {meaning.partOfSpeech}
      </p>
      <div className='seperator'>
      </div>
      <p>
        Meaning
      </p>
      <ul>
        {definitions}
      </ul>
      <p>Synonynms {meaning.synonyms[0]}</p>
    </div>
  )
}

export default Meaning