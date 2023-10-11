
type SingleWord = {
  word: string;
  phonetics: {
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
    text: string | undefined;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

type WordResponse = SingleWord[]

export type { WordResponse, SingleWord }